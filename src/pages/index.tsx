import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useEffect, useState } from 'react'
import CardStudent from '../components/CardStudent'
import * as Dialog from '@radix-ui/react-dialog'
import Modal from '../components/Modal'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'


export interface studentsProps {
  name: string
  id: string
  nota: number
}

const Home: NextPage = () => {

  const [students, setStudents] = useState<studentsProps[]>([])



  async function addStudent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData)

    if (!data.nota) {
      return alert('2')
    }

    try {
      await axios.post('http://localhost:3000/api/createStudent', {
        name: data.name,
        nota: Number(data.nota)
      })

    } catch (error) {
      console.log(error)

    }

    getStudents()
  }

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

            <div className='flex gap-3'>
              <Dialog.Trigger className='bg-purple-700 border-2 border-yellow-500 shadow-[1px_1px_10px_black]'>
                <AiOutlineUserAdd className='text-green-400' />
              </Dialog.Trigger>

              <button onClick={getStudents}
               className="bg-blue-400 p-1 border-2 border-yellow-500">
                <GrUpdate color='blue' />
              </button>
            </div>

            <Modal addStudent={addStudent} />
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
