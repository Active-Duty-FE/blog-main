---
highlight: atom-one-dark
---

### @reduxjs/toolkit 是什么？

他是当代 redux 的新的写法。以原来的 redux 库为依赖，对传统的繁琐的 redux 写法进行了简化。并不是一个新的状态管理库。

> 以下为传统的 redux 写法  
> 注：对异步 action 的写法在最下方另行阐述，因此在上方代码里以注释表示。

contants.js 文件

```js
// 定义常量
export const ADDTODO = 'addtodo'
export const DELETETODO = 'deletetodo'
export const TOGGLETODO = 'toggletodo'
export const ADDFETCHEDTODOS = 'addfetchedtodos'
```

actioncreator actions.js 文件

```js
import { ADDTODO, DELETETODO, TOGGLETODO } from './constants.js'
import axios from 'axios'
// 定义
export const addtodo = (payload) => {
  return {
    type: ADDTODO,
    payload
  }
}
export const deletetodo = (payload) => {
  return {
    type: DELETETODO,
    payload
  }
}
export const toggletodo = (payload) => {
  return {
    type: TOGGLETODO,
    payload
  }
}
// 以下为异步函数 action 的处理
/* const fetchTodoActionCreator = (payload) => {
    return {
        type: ADDFETCHEDTODOS,
        payload
    }
}
export const addfetchedtodos = async (payload) => {
    return (dispatch, getState) => {
        const res = axios.get('/api/todo?offset=payload.offset')
        dispatch(fetchTodoActionCreator(res.data.todosList))
    }
} */
```

todoReducer.js 文件

```js
import {ADDTODO, DELETETODO, TOGGLETODO} from './constants.js'
// 定义 state 初始值
const initailState = {
    todos: []
}
// 定义 todoReducer
function todoReducer(state = initailState, {type, payload}){
    switch(type){
        case ADDTODO:
            const todos = state.todos
            state.todos = [payload, ...todos]
            break;
        case DELETETODO:
            const todos = state.todos
            const newTodos = todos.filter((item, index) => index !== payload.index)
            state.todos = newTodos
            break;
        case TOGGLETODO:
            const todos = state.todos
            const newTodos = todos.map((item, index) => {
                if(index === payload.index){
                    item.complete = !item.complete
                }
                return item
            })
            state.todos = newTodos
            break;
            // 以下为异步函数 action 的处理
        /* case ADDFETCHEDTODO:
            const todos = state.todos
            state.todos = [...payload, ...todos]
            break;*/
        case default:
            return state
            break;
    }
}
export default todoReducer
```

store/index.js

```js
import { createStore, combineReducers /*applyMiddleware// 用于异步函数 action*/ } from 'store'
//import thunkMiddleware from 'redux-thunk' // 用于异步函数 action
import todoReducer from './todoReducer.js'
import counterReducer from './counterReducer.js'

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer
})
const store = createStore(rootReducer /*applyMiddleware(thunkMiddleware) // 用于异步函数 action */)

export default store
```

> 通过上面的代码，我们可以总结以下几个传统 redux 写法的痛点。

1.  反复写同样的常量 （如：ADDTODO, DELETETODO, TOGGLETODO），如果像上面把不同功能的代码分到不同的文件的话，还需要反复导入同样的常量。如（reduder.js， action.js)里都需要导入（ADDTODO, DELETETODO, TOGGLETODO）
2.  重复写差不多的 actioncreator。 例如 increment, decrement, increodd 等函数，返回的结果除了 type ，其他都一模一样。
3.  reducer 里改变 state 的时候，当 state 的值为数组或者对象的时候（如：todos），不能用直接对其进行修改的方法进行赋值，比如 `state.todos.push(newTodo)` 等。需要从新生成新的对象，并进行赋值。比如 `state.todos = [...state.todos, newTodo]`
4.  多个 reducer 需要使用 combineReducers 来合并。
5.  action 为异步函数时需要导入 redux-thunk 中间件，并使用 applyMiddleware 对其进行处理。

> 以下为 利用 @reduxjs/toolkit 写的代码

todoSlice.js

```js
// 定义 todoSlice
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async(payload, thunkAPI)=> {
       const res = await axios.get('/api/todos?offset=payload.offset')
       return res.data.todoList
    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, {payload}){
            state.todos.push(payload)
        },
        deleteTodo(state, {payload}){
            state.todos.splice(payload.index, 1)
        },
        toggleTodo(state, {payload}){
            state.todos[payload.index].complete = !state.todos[payload.index].complete
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.fulfilled, (state, {payload}) => {
            state.todos.splice(0,0,payload)
        })
        builder.addCase(fetchTodos.pending, (state, {payload}) => {
            console.log('正在读取数据')
        })
        builder.addCase(fetchTodos.rejected, (state, {payload}) => {
            console.log('读取数据失败'
        })
    }
})
const {actions, reducer} = todoSice
export const {addTodo, deleteTodo, toggleTodo} = actions // 导出 actioncreators
export defalut reducer // 导出 reducer
```

store/index.js

```js
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice.js'
import counterReducer from './counterSlice.js'

const store = configureStore({
    reducer: {
        todos: todoReducer,
        counter: counterReducer
    }
})
export defalut store
```

> 通过上面的代码可知，@reduxjs/toolkit 解决的以下几个传统 redux 的痛点。

1. 不用重复定义常量，因为 reducers 里面的各个 reducer 直接即为各个 case。
2. 一次写 reducer 可以导出 reducer 和 以 reducer 的名字为 type 的 actioncreator。
   例如：`console.log(addTodo({id: 2, titile: '运动'}))` 的结果为
   ```js
   {
       type: 'todos/addTodo',
       payload: {id: 2, titile: '运动'}
   }
   ```
3. 当 state 为对象时，可直接对其进行赋值。减少了传统的取值，赋值的繁琐过程。例如：`state.todos.push(newTodo)` 即可直接改变 state。
4. 多个 reducer 可直接创建 store 的函数内部合并，无需导入其他工具。
5. 以集成对异步 action 的中间件，无需另导入中间件。

> @reduxjs/toolkit 对处理异步函数 action 的方法

方法 A：步骤：

1. 引入 createAsyncThunk ,在里面进行异步函数的处理，return 结果， 并将其作为 action 导出。

```js
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (payload, thunkAPI) => {
  const res = await axios.get('/api/todos?offset=payload.offset')
  return res.data.todoList
})
```

2. 在 extraReducers 里进行对 state 的更新。可对返回结果的状态进行细粒度的操作。（如：异步函数的 pending, fulfilled, rejectd 等状态）

```js
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {...},
    extraReducers: builder => {
        builder.addCase(fetchTodos.fulfilled, (state, {payload}) => {
            state.todos.splice(0,0,payload)
        })
        builder.addCase(fetchTodos.pending, (state, {payload}) => {
            console.log('正在读取数据')
        })
        builder.addCase(fetchTodos.rejected, (state, {payload}) => {
            console.log('读取数据失败'
        })
    }
})

```

方法 B：步骤

1. 在 reducers 里与普通的 reducer 一样，进行对 state 的更新。

```js
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, {payload}){
            state.todos.push(payload)
        },
        deleteTodo(state, {payload}){
            state.todos.splice(payload.index, 1)
        },
        toggleTodo(state, {payload}){
            state.todos[payload.index].complete = !state.todos[payload.index].complete
        },
        addfetchedtodos(state, {payload}){
            state.todos.splice(0,0,payload)
        }
    }
})
const {reducer, actions} = todoSlice
export {addTodo, deleteTodo, toggleTodo, addfetchedTodos} = actions
export default reducer

```

3. 在 createAsyncThunk 里定义异步函数，并利用第二个参数里的 getState 和 dispatch 直接进行 dispatch 操作。

```js
import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk({
    'todos/fetchtodos',
    async (payload, {getState, dispatch}) => {
        const res = axios.get('/api/todos')
        dispatch(addfetchedTodos(payload))
    }
})
```

@reduxjs/toolkit 对异步 action 的处理的总结

1. 方法 A，虽然可以对结果进行细粒度的处理，可是不能与其他的 reducer 放在一起，缺乏统一性。
2. 方法 B，然可以与其他 reducer 写在一起，具统一感，但是失去了可以细粒度处理的功能。
