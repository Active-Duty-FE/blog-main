import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fsPromises } from 'fs'
import { Response } from 'type'
const path = require('path')
type Post = string

export const handler = async (req: NextApiRequest, res: NextApiResponse<Response<Post>>) => {
  const { title } = req.query
  const filePath = path.join(process.cwd(), 'assets/posts/thought', title)
  const result = await fsPromises.readFile(filePath)

  res.status(200).json({ data: result.toString(), code: 200 })
}

export default handler
