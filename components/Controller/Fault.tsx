import { FC } from 'react'

interface FaultInterface {
  local: {
    first: string,
    second: string
  },
  visitor: {
    first: string,
    second: string
  },
}

export const Fault:FC<FaultInterface> = ({ local, visitor }) => (
  <div className='w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center'>
    <span className='text-xl py-1'>FALTAS</span>
    <div className='w-full inline-flex items-center justify-center border-t'>
      <div className='w-1/2 flex flex-col items-center justify-start border-r'>
        <span className='w-full border-b text-center'>{local.first}</span>
        <span>{local.second}</span>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-start'>
      <span className='w-full border-b text-center'>{visitor.first}</span>
        <span>{visitor.second}</span>
      </div>
    </div>
  </div>
)
