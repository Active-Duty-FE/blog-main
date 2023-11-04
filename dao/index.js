const express = require('express')
const app = express()
const port = 4000
const { connection } = require('./connect')
const cors = require('cors')

app.use(express.json())
app.use(cors())

function rest(fn) {
  setTimeout(fn, 2000)
}
app.get('/post', (req, res) => {
  connection.query('SELECT * from blog', (err, rows, fields) => {
    if (err) throw err
    // rest(() =>
    res.send({
      msg: 'gesuccess',
      data: rows
    })
    // );
  })
})
app.post('/post', (req, res) => {
  const { title, content } = req.body
  connection.query(`INSERT INTO blog (title, content) VALUES ('${title}', '${content}')`, (err, rows, fields) => {
    // if (err) throw err;
    // rest(() =>
    res.send({
      msg: 'success',
      data: 'add finished'
    })
    // );
  })
})
app.delete('/list/:id', (req, res) => {
  const { id } = req.params
  connection.query(`DELETE FROM blog WHERE id=${id}`, (err, rows, fields) => {
    // if (err) throw err;
    // rest(() =>
    res.send({
      msg: 'delete success',
      data: null
    })
    // );
  })
})
app.get('/post/:id', (req, res) => {
  const { id } = req.params
  connection.query(`SELECT * from blog WHERE id=${id}`, (err, rows, fields) => {
    // if (err) throw err;
    // rest(() =>
    res.send({
      msg: 'detail get success',
      data: rows && rows[0]
    })
    // );
  })
})
app.put('/post/:id', (req, res) => {
  const { id, title, content } = req.body
  connection.query(`UPDATE blog SET title='${title}', content='${content}' WHERE id=${id}`, (err, rows, fields) => {
    // if (err) throw err;
    // rest(() =>
    res.send({
      msg: 'update detail success',
      data: rows
    })
    // );
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
