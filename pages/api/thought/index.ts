import type { NextApiRequest, NextApiResponse } from 'next'
import { promises as fsPromises } from 'fs'
import { Response } from 'type'
const path = require('path')
type Posts = any[]

export const handler = async (req: NextApiRequest, res: NextApiResponse<Response<Posts>>) => {
  const folderPath = path.join(process.cwd(), 'assets/posts/thought')
  const result = await fsPromises.readdir(folderPath)

  res.status(200).json({ data: result.sort((a, b) => Number(b.charAt(1)) - Number(a.charAt(1))), code: 200 })
}

export default handler