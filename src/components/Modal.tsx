import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios';
import React, { FormEvent } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'


interface ModalProps {
  addStudent: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

const Modal = ({ addStudent }: ModalProps) => {



  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/30 inset-0 fixed" />
      <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] sm:w-[400px] bg-gray-600 rounded p-2">
        <div className='flex justify-between'>
          <Dialog.Title className="text-2xl text-white">
            Cadastrar aluno
          </Dialog.Title>

          <Dialog.Close className='bg-black rounded-full w-[30px] h-[30px]'>
            <AiFillCloseCircle className='text-red-500 text-[29px]' />
          </Dialog.Close>
        </div>
        <form className='flex flex-col'
          onSubmit={addStudent}>
          <label>Nome do aluno </label>
          <input name='name' id='name' type={"text"} required className='input1' />
          <label>Nota do aluno </label>
          <input name='nota' id='nota' className='input1' />


          <button className='p-1 bg-green-500 mt-3 w-[80px] rounded-lg'
            type='submit'>
            Salvar
          </button>

        </form>


      </Dialog.Content>
    </Dialog.Portal>
  )
}

export default Modal