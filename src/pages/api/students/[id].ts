import type { NextApiRequest, NextApiResponse } from 'next'
import { studentsProps } from '../..'
import { prisma } from '../../../utils/prisma'


const update = async (id: number,data: any) => {
  const newStudent = await prisma.student.update({
    where: {
      id
    },
    data,
  })
  return newStudent
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await update(Number(req.query.id),req.body)
    res.status(200).send(user)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}