import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { studentsProps } from '../pages'
import Modal from './Modal'

interface cardStudentProps {
  student: studentsProps
}

const CardStudent = ({ student }: cardStudentProps) => {

  const [isDelete, setIsDelete] = useState(false)

  function isPassed() {
    if (student.nota >= 7) {
      return true
    }
    return false
  }

  async function updateStudent(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData)

    if (!data.nota) {
      return alert('2')
    }

    try {
      await axios.post(`http://localhost:3000/api/students/${student.id}`, {
        name: data.name,
        nota: Number(data.nota)
      })

    } catch (error) {
      console.log(error)

    }

  }

  async function Exclude() {
    try {
      await axios.post(`http://localhost:3000/api/exclude/${student.id}`, {
      })

    } catch (error) {
      console.log(error)

    }
    setIsDelete(false)
  }



  return (
    <li className='bg-zinc-300 row2 flex flex-wrap justify-between px-3 py-2'>
      <div className='flex flex-col text-start'>
        <span>Nome: {student.name}</span>
        <span>Nota: {student.nota}</span>
        <b className={`${isPassed() ? 'text-green-600' : 'text-red-600'}`}>
          {isPassed() ? 'PASSOU' : 'REPROVOU'}
        </b>
      </div>

      {isDelete && (<div className='w-full h-screen absolute bg-red-700/60 top-0 left-0' />)}

      {isDelete && (
        <div className='bg-gray-200 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed flex flex-col gap-5 p-1 rounded-lg'>


          <span>Tem certeza que quer deletar este estudante?</span>
          <div className='flex justify-between'>

            <button className='p-1 bg-red-500 rounded-md'
              onClick={Exclude}>Deletar</button>
            <button className='p-1 bg-blue-400 rounded-lg'
            onClick={() => setIsDelete(false)}>
              Cancelar</button>
          </div>
        </div>
      )}


      <Dialog.Root>
        <div className='flex flex-col justify-center gap-4'>
          <Dialog.Trigger className='bg-blue-500 p-1 rounded-md'>
            <b className='text-white drop-shadow-[1px_1px_1px_black]'>
              Editar
            </b>
          </Dialog.Trigger>

          <button className='bg-red-500 p-1 rounded-md'
            onClick={() => setIsDelete(true)}>
            <b className='text-white drop-shadow-[1px_1px_1px_black]'>
              Excluir
            </b>
          </button>

        </div>
        <Modal addStudent={updateStudent} />
      </Dialog.Root>


    </li>
  )
}

export default CardStudent