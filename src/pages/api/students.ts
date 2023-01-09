import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../utils/prisma'


const getAll = async () => {
  const data = await prisma.student.findMany({
    select: {
      id: true,
      name: true,
      nota: true
    }
  })
  return data
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await getAll()
    res.status(200).send(user)
  } catch (error) {
    
  }
}