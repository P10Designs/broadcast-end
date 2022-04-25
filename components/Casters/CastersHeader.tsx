import { FC } from 'react'
import Image from 'next/image'
import { Match } from 'constants/interfaces'

interface CastersHeaderInterface{
  match: Match,
  period: string,
  time: string
}

const CastersHeader: FC<CastersHeaderInterface> = ({ match, period, time }) => (
  <div className='inline-flex w-full items-center justify-center h-max py-4 border-b border-black bg-gray-500 text-white' >
    <div className='inline-flex items-center justify-center mx-10'>
      <Image src={match.local.logo} width={100} height={100}/>
      <div className='flex flex-col items-start justify-start ml-3'>
        <span>{match.local.name}</span>
        <span>({match.local.acronym})</span>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center'>
      <span className='font-semibold'>{period?.big}</span>
      <span className='font-bold text-4xl'>{time}</span>
    </div>
    <div className='inline-flex items-center justify-center mx-10'>
      <div className='flex flex-col items-end justify-start mr-3'>
        <span>{match.visitor.name}</span>
        <span>({match.visitor.acronym})</span>
      </div>
      <Image src={match.visitor.logo} width={100} height={100}/>
    </div>
  </div>
)

export default CastersHeader
