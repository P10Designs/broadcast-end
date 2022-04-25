import { Match } from 'constants/interfaces'
import { FC } from 'react'

interface MatchHeaderInterface{
  match: Match
}

const MatchHeader: FC<MatchHeaderInterface> = ({ match }) => (
  <div className='h-max inline-flex w-full justify-between px-24 items-center bg-[#013a54] text-white py-1.5'>
    <span className='capitalize font-bold'>{match.sede} - {new Date(match.date).toLocaleString([], { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
    <span className='capitalize font-bold'>IDP: {match.idp}</span>
    <div className='text-sm flex flex-col items-start'>
      <div><span className='text-gray-500'>Local: </span><span>{match.local.name} ({match.local.acronym})</span></div>
      <div><span className='text-gray-500'>Visit: </span><span>{match.visitor.name} ({match.visitor.acronym})</span></div>
    </div>
  </div>
)

export default MatchHeader
