import { FC } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import StorageIcon from '@mui/icons-material/Storage'
import EditIcon from '@mui/icons-material/Edit'
import CancelIcon from '@mui/icons-material/Cancel'
import { Player } from 'constants/interfaces'

interface PlayerAddInterface {
  allPlayers: Player[],
  setPlayer: (x:Player) => void,
  setView: (x:boolean) => void,
  modifyPlayer: (x:string) => void
}

const PlayerAdd: FC<PlayerAddInterface> = ({ allPlayers, setView, setPlayer, modifyPlayer }) => (
  <div className='w-full h-full absolute z-10 bg-black/60 flex items-center justify-center'>
    <div className='flex flex-col items-center justify-start w-2/3 bg-white rounded'>
      <div className='text-left w-full bg-[#013a54] text-white font-semibold inline-flex items-center justify-start px-2'>
        <StorageIcon />
        <span className='ml-1'>AÑADIR JUGADORES...</span>
      </div>
      <div>
      <Autocomplete
        className='mt-5'
        id="grouped-demo"
        options={allPlayers.sort((a, b) => -b.name.localeCompare(a.name))}
        groupBy={(option) => option.name[0].toUpperCase()}
        getOptionLabel={(option) => option.name}
        onChange={(e, v) => {
          if (v !== null) {
            setPlayer(v)
          }
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Player" />}
      />
      </div>
      <div className='inline-flex items-center justify-between w-5/6 p-5 text-white'>
        <button onClick={() => { setView(false) }} className='mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all'>
          <CancelIcon />
          <span className='ml-1'>Cancelar</span>
        </button>
        <button onClick={() => { modifyPlayer('add'); setView(false) }} className='mx-1.5 bg-blue-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-blue-700 transition-all'>
          <EditIcon />
          <span className='ml-1'>Modificar</span>
        </button>
      </div>
    </div>
  </div>
)

export default PlayerAdd
