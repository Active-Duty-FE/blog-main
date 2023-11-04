const mysql = require('mysql2')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdfasdf123',
  database: 'blog-test'
})

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err)
    return
  }
  console.log('Connected to MySQL database')
})
export default db
