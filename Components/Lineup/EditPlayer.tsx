import { FC, useState } from 'react'
import Image from 'next/image'
import { Player } from 'constants/interfaces'
import StorageIcon from '@mui/icons-material/Storage'
import EditIcon from '@mui/icons-material/Edit'
import CancelIcon from '@mui/icons-material/Cancel'
import DeleteIcon from '@mui/icons-material/Delete'

interface editPlayerInterface{
  player: Player,
  setView: (x: boolean) => void,
  modifyPlayer: (type:string) => void,
}

const pos = ['P1', 'P2', 'C', 'A']

const editPlayer: FC<editPlayerInterface> = ({ player, setView, modifyPlayer }) => {
  const initialDorsal = player.dorsal
  const [position, setPos] = useState(player.position)
  return (
  <div className='w-full h-full absolute z-10 bg-black/60 flex items-center justify-center'>
    <div className='flex flex-col items-center justify-start w-2/3 bg-white rounded'>
      <div className='text-left w-full bg-[#013a54] text-white font-semibold inline-flex items-center justify-start px-2'>
        <StorageIcon />
        <span className='ml-1'>EDICION DE ALINEACIONES...</span>
      </div>
      {player &&
        <div className='w-5/6'>
          <div className='p-5 inline-flex flex-start justify-between w-full'>
            {player.img && player.img !== '' && <Image src={player.img} width={140} height={175} />}
            <div className='flex flex-col items-end justify-start'>
              <span className='mb-5 text-blue-500 font-bold'>{player.name}</span>
              <input type={'numeric'} className='w-20 mb-5 bg-blue-200' defaultValue={player.dorsal} onChange={(e) => { player.dorsal = e.target.value }} />
              <div>
                {pos.map((p, i) => (
                  <button
                    className={'rounded-full px-2 py-0.5 min-w-[40px] mx-0.5 text-white ' + (position === p ? 'bg-yellow-500' : 'bg-gray-500')}
                    onClick={() => { player.position = (p === player.position ? undefined : p); setPos(p === position ? undefined : p) }}
                    key={'b' + i}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      <div className='inline-flex items-center justify-between w-5/6 p-5 text-white'>
        <button onClick={() => { setView(false); modifyPlayer('delete') }} className='mx-1.5 bg-red-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-red-700 transition-all'>
          <DeleteIcon />
          <span className='ml-1'>Eliminar</span>
        </button>
        <button onClick={() => { setView(false); player.dorsal = initialDorsal }} className='mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all'>
          <CancelIcon />
          <span className='ml-1'>Cancelar</span>
        </button>
        <button onClick={() => { modifyPlayer('save'); setView(false) }} className='mx-1.5 bg-blue-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-blue-700 transition-all'>
          <EditIcon />
          <span className='ml-1'>Modificar</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default editPlayer
