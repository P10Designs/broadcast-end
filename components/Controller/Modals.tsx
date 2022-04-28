import { FC, useState } from 'react'
import { Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { Player } from 'constants/interfaces'
import Check from 'public/Check.png'
import Missed from 'public/Missed.png'
import Null from 'public/Null.png'
import Image from 'next/image'

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
    <div className='flex flex-col my-5 px-2'>
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

interface PenaltiesInterface{
  changed: {
    first: string,
    second: string
  },
  data: any
}

export const Penalties:FC<PenaltiesInterface> = ({ changed, data }) => {
  const [penalties, setPenalties] = useState<any>({
    local: {
      first: data.local.penalties.first === location.origin + Missed.src ? false : data.local.penalties.first === location.origin + Check.src ? true : null,
      second: data.local.penalties.second === location.origin + Missed.src ? false : data.local.penalties.second === location.origin + Check.src ? true : null,
      third: data.local.penalties.third === location.origin + Missed.src ? false : data.local.penalties.third === location.origin + Check.src ? true : null,
      total: data.local.penalties.total || 0
    },
    visitor: {
      first: data.visitor.penalties.first === location.origin + Missed.src ? false : data.visitor.penalties.first === location.origin + Check.src ? true : null,
      second: data.visitor.penalties.second === location.origin + Missed.src ? false : data.visitor.penalties.second === location.origin + Check.src ? true : null,
      third: data.visitor.penalties.third === location.origin + Missed.src ? false : data.visitor.penalties.third === location.origin + Check.src ? true : null,
      total: data.local.penalties.total || 0
    }
  })
  const button = (team: string, place: string) => (
    <div className='flex flex-col'>
      <Button onClick={() => {
        data[team].penalties[place] = location.origin + Check.src
        data[team].penalties.total += 1
        setPenalties({
          local: {
            first: (place === 'first' && team === 'local' ? true : penalties.local.first),
            second: (place === 'second' && team === 'local' ? true : penalties.local.second),
            third: (place === 'third' && team === 'local' ? true : penalties.local.third),
            total: (team === 'local' ? penalties.local.total += 1 : penalties.local.total)
          },
          visitor: {
            first: (place === 'first' && team === 'visitor' ? true : penalties.visitor.first),
            second: (place === 'second' && team === 'visitor' ? true : penalties.visitor.second),
            third: (place === 'third' && team === 'visitor' ? true : penalties.visitor.third),
            total: (team === 'visitor' ? penalties.visitor.total += 1 : penalties.visitor.total)
          }
        })
      }} variant='outlined' className={'w-20 h-20 m-1 ' + (penalties[team][place] === true ? 'bg-green-300' : 'bg-white')}>
        <Image src={Check} alt='xd' width={40} height={40} />
      </Button>
      <Button onClick={() => {
        data[team].penalties[place] = location.origin + Missed.src
        data[team].penalties.total = (penalties[team][place] === true ? data[team].penalties.total -= 1 : data[team].penalties.total)
        setPenalties({
          local: {
            first: (place === 'first' && team === 'local' ? false : penalties.local.first),
            second: (place === 'second' && team === 'local' ? false : penalties.local.second),
            third: (place === 'third' && team === 'local' ? false : penalties.local.third),
            total: (team === 'local' && penalties.local[place] === true ? penalties.local.total -= 1 : penalties.local.total)
          },
          visitor: {
            first: (place === 'first' && team === 'visitor' ? false : penalties.visitor.first),
            second: (place === 'second' && team === 'visitor' ? false : penalties.visitor.second),
            third: (place === 'third' && team === 'visitor' ? false : penalties.visitor.third),
            total: (team === 'visitor' && penalties.visitor[place] === true ? penalties.visitor.total -= 1 : penalties.visitor.total)
          }
        })
      }} variant='outlined' className={'w-20 h-20 m-1 ' + (penalties[team][place] === false ? 'bg-red-300' : 'bg-white')}>
        <Image src={Missed} alt='xd' width={40} height={40} />
      </Button>
    </div>
  )
  const team = (team: string) => (
    <div className='flex flex-col items-center bg-gray-200 p-2 rounded mx-2'>
      <span className='font-bold text-xl'>{team.toUpperCase()}: {penalties[team].total}</span>
      <div className='inline-flex'>
        {button(team, 'first')}
        {button(team, 'second')}
        {button(team, 'third')}
      </div>
    </div>
  )
  return (
  <div className='flex flex-col my-5'>
    <div className='inline-flex'>
      {team('local')}
      {team('visitor')}
    </div>
    <button onClick={() => {
      setPenalties({
        local: {
          first: null,
          second: null,
          third: null,
          total: penalties.local.total
        },
        visitor: {
          first: null,
          second: null,
          third: null,
          total: penalties.visitor.total
        }
      })
      data.local.penalties.first = location.origin + Null.src
      data.local.penalties.second = location.origin + Null.src
      data.local.penalties.third = location.origin + Null.src
      data.visitor.penalties.first = location.origin + Null.src
      data.visitor.penalties.second = location.origin + Null.src
      data.visitor.penalties.third = location.origin + Null.src
    }} className='text-white m-3 mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all'>
      <RestartAltIcon />
      <span className='ml-1'>RESET</span>
    </button>
  </div>
  )
}
