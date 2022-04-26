import { FC } from 'react'
import StorageIcon from '@mui/icons-material/Storage'
import EditIcon from '@mui/icons-material/Edit'
import CancelIcon from '@mui/icons-material/Cancel'
import { Player } from 'constants/interfaces'
import { Clock, Period, MainModal } from 'components/Controller/Modals'

interface MenuInterface {
  modalType: string,
  changed:{
    first: string,
    second: string,
  },
  players: Player[],
  setView: (x:boolean) => void,
  handleSave: () => void
}

export const Menu:FC<MenuInterface> = ({ modalType, changed, players, setView, handleSave }) => (
  <div className='w-full h-full absolute z-10 bg-black/60 flex items-center justify-center'>
    <div className={'flex flex-col items-center justify-start bg-white rounded ' + (modalType !== 'goal' && modalType !== 'fault' ? 'w-1/3' : 'w-1/2')}>
      <div className='text-left w-full bg-[#013a54] text-white font-semibold inline-flex items-center justify-start px-2'>
        <StorageIcon />
        <span className='ml-1'>EDICION DE {modalType.toUpperCase()}...</span>
      </div>
      <div>
        {modalType === 'clock' && <Clock changed={changed} />}
        {modalType === 'period' && <Period changed={changed} />}
        {modalType === 'goal' && <MainModal changed={changed} text1='ANOTADOR' text2='ASISTENTE' players={players} />}
        {modalType === 'fault' && <MainModal changed={changed} text1='JUGADOR' text2='FALTA' players={players} />
      }
      </div>
      <div className='inline-flex items-center justify-between w-5/6 p-5 text-white'>
        <button onClick={() => { setView(false) }} className='mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all'>
          <CancelIcon />
          <span className='ml-1'>Cancelar</span>
        </button>
        <button onClick={() => { handleSave(); setView(false) }} className='mx-1.5 bg-blue-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-blue-700 transition-all'>
          <EditIcon />
          <span className='ml-1'>Modificar</span>
        </button>
      </div>
    </div>
  </div>
)
