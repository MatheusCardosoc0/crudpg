import React from 'react'
import { studentsProps } from '../pages'

interface cardStudentProps{
  student: studentsProps
}

const CardStudent = ({student}: cardStudentProps) => {

  function isPassed(){
    if(student.nota >= 7){
      return true
    }
    return false
  }

  return (
    <li className='bg-zinc-300 row2 flex flex-wrap justify-between px-3 py-2'>
      <span>Nome: {student.name}</span>
      <span>Nota: {student.nota}</span>
      <b className={`${isPassed() ? 'text-green-600' : 'text-red-600'}`}>
        {isPassed()? 'PASSOU': 'REPROVOU'}
        </b>
    </li>
  )
}

export default CardStudent