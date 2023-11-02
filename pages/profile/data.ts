type Skill = {
  label: string
  skills: { name: string; website: string }[]
}
type SkillList = Skill[]
export const skillList: SkillList = [
  {
    label: 'Basic',
    skills: [
      { name: 'HTML', website: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', website: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'Javascript', website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'ECMAScript6', website: 'https://wangdoc.com/es6/' },
      { name: 'Typescript', website: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html' }
    ]
  },
  {
    label: 'Style',
    skills: [
      { name: 'CSS3', website: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'LESS', website: 'https://lesscss.org/features/' },
      { name: 'SCSS', website: 'https://sass-lang.com/documentation/' },
      {
        name: 'styled-components',
        website: 'https://styled-components.com/docs'
      },
      { name: 'bootstrap', website: 'https://getbootstrap.com/docs/4.6/getting-started/introduction/' },
      { name: 'tailwind-css', website: 'https://tailwindcss.com/docs/installation' },
      { name: 'Material UI', website: 'https://mui.com/material-ui/getting-started/' },
      { name: 'Element UI', website: 'https://element.eleme.io/#/en-US/component/installation' },
      { name: 'Element Plus', website: 'https://element-plus.org/en-US/component/button.html' },
      { name: 'Ant Design', website: 'https://ant.design/components/dropdown' }
    ]
  },
  {
    label: 'Framework',
    skills: [
      { name: 'React', website: 'https://react.dev/learn' },
      { name: 'Vue', website: 'https://vuejs.org/guide/introduction.html' },
      { name: 'JQuery', website: 'https://api.jquery.com/' }
    ]
  },
  {
    label: 'Network',
    skills: [
      { name: 'XMLHttpRequest', website: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest' },
      { name: 'Axios', website: 'https://axios-http.com/docs/intro' },
      { name: 'fetch', website: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
      { name: 'react-query', website: 'https://tanstack.com/query/v5/docs/react/overview' },
      { name: 'socket-io', website: 'https://socket.io/docs/v4/' },
      { name: 'protobuf', website: 'https://protobuf.dev/' }
    ]
  },
  {
    label: 'State Management',
    skills: [
      { name: 'redux', website: 'https://redux.js.org/introduction/getting-started' },
      { name: 'react-redux', website: 'https://react-redux.js.org/tutorials/quick-start' },
      { name: 'reduxjs/toolkit', website: 'https://redux-toolkit.js.org/tutorials/overview' },
      { name: 'vuex', website: 'https://vuex.vuejs.org/guide/' },
      { name: 'pinia', website: 'https://pinia.vuejs.org/core-concepts/' },
      { name: 'recoil', website: 'https://recoiljs.org/docs/introduction/installation' },
      { name: 'mobx', website: 'https://mobx.js.org/README.html' }
    ]
  },
  {
    label: 'Form Control',
    skills: [
      { name: 'formik', website: 'https://formik.org/docs/overview' },
      { name: 'react-hook-form', website: 'https://react-hook-form.com/get-started' }
    ]
  },
  {
    label: 'Build',
    skills: [
      { name: 'webpack', website: 'https://webpack.js.org/concepts/' },
      { name: 'vite', website: 'https://vitejs.dev/guide/' },
      { name: 'babel', website: 'https://babel.dev/docs/' }
    ]
  },
  {
    label: 'Back-end',
    skills: [
      { name: 'Nodejs', website: 'https://nodejs.org/en/learn' },
      { name: 'express', website: 'https://expressjs.com/en/guide/routing.html' },
      { name: 'koa', website: 'https://koajs.com/#introduction' },
      { name: 'nestjs', website: 'https://docs.nestjs.com/' },
      { name: 'mysql2', website: 'https://www.npmjs.com/package/mysql2' }
    ]
  },
  {
    label: 'Server',
    skills: [
      { name: 'Jenkins', website: 'https://www.jenkins.io/doc/book/getting-started/' },
      { name: 'Nginx', website: 'https://docs.nginx.com/nginx/admin-guide/' },
      { name: 'AWS', website: 'https://aws.amazon.com/ec2/?nc2=h_ql_prod_fs_ec2' }
    ]
  },
  {
    label: 'Collaboration',
    skills: [
      { name: 'git', website: 'https://github.com/' },
      { name: 'slack', website: 'https://slack.com/' },
      { name: 'figma', website: 'https://www.figma.com/design-overview/' },
      { name: 'zeplin', website: 'https://zeplin.io/features/document/' },
      { name: 'jira', website: 'https://www.atlassian.com/software/jira' },
      { name: 'confluence', website: 'https://www.atlassian.com/software/confluence' }
    ]
  }
]
