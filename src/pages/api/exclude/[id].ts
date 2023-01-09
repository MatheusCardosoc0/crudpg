import type { NextApiRequest, NextApiResponse } from 'next'
import { studentsProps } from '../..'
import { prisma } from '../../../utils/prisma'


const update = async (id: number) => {
   await prisma.student.delete({
    where: {
      id
    }
  })
  return 
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await update(Number(req.query.id))
    res.status(200).send({})
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}