import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CardStudent from '../components/CardStudent'
import * as Dialog from '@radix-ui/react-dialog'
import Modal from '../components/Modal'


export interface studentsProps {
  name: string
  id: string
  nota: number
}

const Home: NextPage = () => {

  const [students, setStudents] = useState<studentsProps[]>([])

  async function getStudents() {
    const url = 'http://localhost:3000/api/students'
    await axios.get(url).then(response => {
      setStudents(response.data)
    })
  }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <div className="w-full h-screen flex justify-center pt-20 overflow-hidden bg-gray-500">
      <Head>
        <title>Crud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className='flex flex-col w-full text-center sm:w-[500px] h-[500px]  bg-gray-200'>

        <div className='flex px-3 justify-between text-gray-50 bg-gray-400 row text-2xl uppercase py-2'>

          <h2>Alunos cadastrados </h2>

          <Dialog.Root>

            <Dialog.Trigger>
           a
            </Dialog.Trigger>

            <Modal />
          </Dialog.Root>

        </div>

        <div className='h-[500px] overflow-y-scroll bg-gray-600'>
          {students.map(student => (
            <CardStudent key={student.id}
              student={student} />
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Home
