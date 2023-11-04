// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import db from '@dao/connect'
import { Post } from 'type'
type Data = {
  msg: string
  data: any
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      db.query(`SELECT * from post WHERE id=${req.query.id}`, (err, rows, fields) => {
        // if (err) throw err;
        // rest(() =>
        res.send({
          msg: 'detail get success',
          data: rows
        })
        // );
      })
      break
    default:
      break
  }
}
