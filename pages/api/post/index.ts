import type { NextApiRequest, NextApiResponse } from 'next'

import { SelectResult, InsertResult, UpdateResult } from '../../../type/mysql'

import db from '@dao/connect'
import { Post } from 'type'
type Data = {
  msg: string
  data: any
}
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      db.query('SELECT * from post', (err, rows, fields) => {
        if (err) throw err
        // rest(() =>
        res.send({
          msg: 'gesuccess',
          data: rows
        })
        // );
      })
      break
    case 'POST':
      db.query(
        `INSERT INTO post (title, content) VALUES ('${req.body.title}', '${req.body.content}')`,
        (err, rows, fields) => {
          // if (err) throw err;
          // rest(() =>
          res.send({
            msg: 'success',
            data: 'add finished'
          })
          // );
        }
      )
      break
    case 'PUT':
      db.query(
        `INSERT INTO post (title, content) VALUES ('${req.body.title}', '${req.body.content}')`,
        (err, rows, fields) => {
          // if (err) throw err;
          // rest(() =>
          res.send({
            msg: 'success',
            data: 'add finished'
          })
          // );
        }
      )
    case 'DELETE':
      db.query(`DELETE FROM post WHERE id=${req.query}`, (err, rows, fields) => {
        // if (err) throw err;
        // rest(() =>
        res.send({
          msg: 'delete success',
          data: null
        })
        // );
      })
      break
    default:
      break
  }
}
