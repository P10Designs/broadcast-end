import { FC, useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import { Player } from 'constants/interfaces'

const periods = ['PERIODO 1', 'DESCANSO', 'PERIODO 2', 'DESCANSO', 'OVERTIME', 'PENALTIES']

interface DefaultInterface{
  changed: {
    first: string,
    second: string
  }
}

export const Clock:FC<DefaultInterface> = ({ changed }) => (
  <div className='mt-5'>
    <input
      onChange={(e) => { changed.first = e.target.value }}
      className='bg-gray-300 p-2 rounded font-bold w-28 text-center text-2xl'
      defaultValue={document.querySelector('#realtime')?.textContent || ''}
    />
  </div>
)

export const Period:FC<DefaultInterface> = ({ changed }) => {
  const [value, setValue] = useState('')
  return (
  <div className='mt-5'>
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel >Period</InputLabel>
        <Select
          value={value}
          label="Periodo"
          onChange={(e) => { changed.first = e.target.value; setValue(e.target.value) }}
        >
          {periods.map((m, i) => (
            <MenuItem key={'menuy' + i} value={m}>{m}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  </div>
  )
}

interface ModalInterface {
  players: Player[],
  text1: string,
  text2: string,
  changed: {
    first: string,
    second: string
  }
}

const faults = ['CC', 'AG', 'BE', 'CA', 'CG', 'CE', 'CI', 'IF', 'CZ', 'SP', 'EG', 'MC', 'RZ', 'PP', 'SL', 'SA', 'ZC', 'VI']

export const MainModal:FC<ModalInterface> = ({ players, text1, text2, changed }) => {
  const [data, setData] = useState({
    first: '',
    second: ''
  })
  return (
    <div className='flex flex-col my-5'>
      <span className='font-bold py-2'>{text1}</span>
        <div className='inline-flex'>
          {players.map((player, i) => (
            <button onClick={() => {
              changed.first = player.dorsal
              setData(data => ({
                ...data,
                first: player.dorsal
              }))
            }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (data.first === player.dorsal ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
              {player.dorsal}
            </button>
          ))}
        </div>
      <span className='font-bold py-2'>{text2}</span>
      {text2 !== 'FALTA' &&
        <div className='inline-flex'>
          {players.map((player, i) => (
            <button onClick={() => {
              changed.second = player.dorsal; setData(data => ({
                ...data,
                second: player.dorsal
              }))
            }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (data.second === player.dorsal ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
              {player.dorsal}
            </button>
          ))}
        </div>
      }
      {text2 === 'FALTA' &&
        <div className='inline-flex'>
          {faults.map((player, i) => (
            <button onClick={() => {
              changed.second = player
              setData(data => ({
                ...data,
                second: player
              }))
            }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (data.second === player ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
              {player}
            </button>
          ))}
        </div>
      }
    </div>
  )
}
