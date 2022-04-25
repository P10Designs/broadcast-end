import { FC } from 'react'
import { Player } from 'constants/interfaces'

interface TeamTableInterface{
  name?: string,
  players?: Player[]
}

const TeamTable: FC<TeamTableInterface> = ({ name, players }) => (
  <table className='w-full text-center mt-4'>
    <thead className='border-white bg-[#d5d6d5]'>
      <tr>
        <td colSpan={7} className='border-b font-bold'>{name}</td>
      </tr>
      <tr>
        <td className='border-r w-[35px]'>#</td>
        <td className='border-r w-[35px]'>Pos</td>
        <td className='border-r text-left pl-2'>Jugador</td>
        <td className='border-r w-[40px]'>PT</td>
        <td className='border-r w-[40px]'>Gol</td>
        <td className='border-r w-[40px]'>Ast</td>
        <td>Pim</td>
      </tr>
    </thead>
    <tbody>
      {players !== undefined && players.map((p, _i) => {
        if (p.position !== undefined && p.position.indexOf('P') !== -1) return (<tr key={'extra' + _i}></tr>)
        return (
        <tr key={'localPLayer' + _i} className='border-b'>
          <td className='border-r'>{p.dorsal}</td>
          <td className='border-r'>{p.position || ''}</td>
          <td className='border-r text-left pl-2'>{p.name}</td>
          <td className='border-r'>{p.matchStats.g + p.matchStats.a || ''}</td>
          <td className='border-r'>{p.matchStats.g || ''}</td>
          <td className='border-r'>{p.matchStats.a || ''}</td>
          <td>{p.matchStats.pim || ''}</td>
        </tr>
        )
      })}
      <tr>
        <td className='bg-[#d5d6d5]' colSpan={7}>PORTEROS</td>
      </tr>
      {players !== undefined && players.map((p, _i) => {
        if (p.position === undefined || p.position.indexOf('P') === -1) return (<tr key={'extra' + _i}></tr>)
        return (
        <tr key={'localPLayer' + _i} className='border-b'>
          <td className='border-r'>{p.dorsal}</td>
          <td className='border-r'>{p.position || ''}</td>
          <td className='border-r text-left pl-2' colSpan={5}>{p.name}</td>
        </tr>
        )
      })}
    </tbody>
  </table>
)

export default TeamTable
