import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios';
import React, { FormEvent } from 'react'

const Modal = () => {

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
        nota: data.nota
      })
      alert('sucess')
    } catch (error) {
      console.log(error)
      alert('not sucess')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/30 inset-0 fixed" />
      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[400px] bg-gray-600 rounded p-2">
        <div className='flex justify-between'>
          <Dialog.Title className="">
            Cadastrar aluno
          </Dialog.Title>

          <Dialog.Close>
            sair
          </Dialog.Close>
        </div>
        <form className='flex flex-col'
          onSubmit={addStudent}>
          <label>Nome do aluno </label>
          <input name='name' id='name' className='input1' />
          <label>Nota do aluno </label>
          <input name='nota' id='nota' className='input1' />

          <button className='p-1 bg-green-500 mt-3'
          type='submit'>
          Salvare
        </button>
        </form>


      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default Modal