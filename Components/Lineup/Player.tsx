import { FC } from 'react'
import Image from 'next/image'
import { Player } from 'constants/interfaces'

interface playerInterface{
  setPlayer: (player:Player) => void,
  setView: (x: boolean) => void,
  setPanel: (x: string) => void,
  player: Player,
  selected: string
}

const PlayerComponent: FC<playerInterface> = ({ setPlayer, player, selected, setView, setPanel }) => (
  <button onClick={() => { setPlayer(player); setView(true); setPanel('editPlayer') }} className={'max-w-[155px] mx-0.5 mb-0.5 ' + (selected === player.team.acronym ? '' : 'hidden')}>
    <div className='relative'>
      {player.img && player.img !== '' && <Image src={player.img} width={140} height={175} />}
      <div className='absolute z-5 bottom-1.5 left-0 px-2 py-1 text-white font-bold text-2xl bg-[#333332] rounded-tr-xl'>{player.dorsal === undefined ? '--' : player.dorsal}</div>
      <div className={'absolute z-5 bottom-1.5 right-0 px-2 py-1 text-white font-bold text-2xl rounded-tl-xl ' + (player.position !== undefined ? 'bg-yellow-500' : 'hidden')}>{player.position}</div>
    </div>
    <p className='text-left mx-1 break-words text-xs overflow-hidden w-[120px] text-black font-semibold capitalize'>{player.name}</p>
  </button>
)

export default PlayerComponent
