import type { NextApiRequest, NextApiResponse } from 'next'
import { studentsProps } from '..'
import { prisma } from '../../utils/prisma'


const create = async (data: any) => {
  const newStudent = await prisma.student.create({
    data,
  })
  return newStudent
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await create(req.body)
    res.status(200).send(user)
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
}