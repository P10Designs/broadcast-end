import { FC } from 'react'

interface Datainterface{
  local: string,
  visitor: string,
  name: string,
}

export const Data: FC<Datainterface> = ({ name, local, visitor }) => (
  <div className='w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center'>
    <span className='text-xl py-1'>{name}</span>
    <div className='w-full inline-flex items-center justify-center border-t'>
      <span className='w-1/2 text-center text-2xl border-r'>{local}</span>
      <span className='w-1/2 text-center text-2xl'>{visitor}</span>
    </div>
  </div>
)
