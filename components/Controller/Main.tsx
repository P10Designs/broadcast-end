import { Player, Team } from 'constants/interfaces'
import { FC } from 'react'
import Image from 'next/image'
import { TableContainer, TableHead, Table, TableCell, TableRow, TableBody, Paper } from '@mui/material'
import SportsHockey from '@mui/icons-material/SportsHockey'
import Sports from '@mui/icons-material/Sports'
import SportsScore from '@mui/icons-material/SportsScore'
import HourglassBottom from '@mui/icons-material/HourglassBottom'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'

interface TeamComponentInterface{
  team: string,
  match: Team,
  players: Player[],
  selected: string,
  playerSelected: Player | string,
  setPlayerSelected: (e:Player, y: string) => void
}

export const TeamComponent: FC<TeamComponentInterface> = ({ team, match, players, selected, playerSelected, setPlayerSelected }) => {
  return (
    <div className={'w-2/5 bg-white flex items-center ' + (team === 'local' ? 'flex-row' : 'flex-row-reverse')}>
      <div className='w-full'>
        <div className={'w-full items-center h-12 justify-start px-4 flex bg-black text-white font-bold py-0 ' + (team === 'local' ? 'flex-row-reverse' : 'flex-row')} >
          <Image src={match.logo} width={40} height={40} />
          <span className='mx-2'>{match.name}</span>
        </div>
        <div className='flex flex-col items-start justify-start'>
          <span className='w-full text-center font-bold text-white text-sm py-0.5 bg-[#656665]'>{match.name}</span>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow
                  className='bg-gray-200 h-1 font-bold'
                >
                  <TableCell className='font-bold'>#</TableCell>
                  <TableCell className='font-bold'>P</TableCell>
                  <TableCell className='font-bold'>Nombre</TableCell>
                  <TableCell className='font-bold' align="right">G</TableCell>
                  <TableCell className='font-bold' align="right">A</TableCell>
                  <TableCell className='font-bold' align="right">PIM</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {players.map((row, i) => {
                  if (selected === 'season') {
                    return (
                      <TableRow
                        key={row.name + i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        className={(i % 2 !== 0 ? 'bg-gray-200 text-center' : 'text-center') + (playerSelected !== undefined && typeof playerSelected !== 'string' && playerSelected.name === row.name ? ' bg-green-600' : '')}
                        onClick={() => { setPlayerSelected(row, team) }}
                      >
                        <TableCell className='py-1'>
                          {row.dorsal}
                        </TableCell>
                        <TableCell className='py-0'>{row.position}</TableCell>
                        <TableCell className='text-xs py-0'>{row.name}</TableCell>
                        <TableCell className='py-0' align="right">{row.stats.g}</TableCell>
                        <TableCell className='py-0' align="right">{row.stats.a}</TableCell>
                        <TableCell className='py-0' align="right">{row.stats.pim}</TableCell>
                      </TableRow>
                    )
                  } else {
                    return (
                      <TableRow
                        key={row.name + i}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        className={(i % 2 !== 0 ? 'bg-gray-200 text-center' : 'text-center') + (playerSelected !== undefined && typeof playerSelected !== 'string' && playerSelected.name === row.name ? ' bg-green-600' : '')}
                        onClick={() => { setPlayerSelected(row, team) }}
                      >
                        <TableCell className='py-1'>
                          {row.dorsal}
                        </TableCell>
                        <TableCell className='py-0'>{row.position}</TableCell>
                        <TableCell className='text-xs py-0'>{row.name}</TableCell>
                        <TableCell className='py-0' align="right">{row.matchStats?.g}</TableCell>
                        <TableCell className='py-0' align="right">{row.matchStats?.a}</TableCell>
                        <TableCell className='py-0' align="right">{row.matchStats?.pim}</TableCell>
                      </TableRow>
                    )
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

interface ShootCounterInterface {
  shoots: number
}

export const ShootCounter: FC<ShootCounterInterface> = ({ shoots }) => {
  return (
    <div className='flex-col flex items-center justify-center text-white'>
      <span className='font-bold text-sm'>TIROS</span>
      <span className='font-bold text-2xl leading-5'>{shoots}</span>
    </div>
  )
}

interface ScoreInterface{
  local: number,
  visitor: number,
}

export const Score:FC<ScoreInterface> = ({ local, visitor }) => {
  return (
    <div className='inline-flex items-center justify-center mx-3 text-yellow-400 font-bold text-4xl'>
      <span>{local}</span>
      <span className='mx-1.5'>-</span>
      <span>{visitor}</span>
    </div>
  )
}

interface TimeInterface{
  time: string,
  period: string,
  openModal: () => void,
  setModalType: (e:string) => void
}

export const Time:FC<TimeInterface> = ({ time, period, openModal, setModalType }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full font-bold bg-black text-[#00fafa] pb-4'>
      <button onClick={() => { openModal(); setModalType('period') }} id='period' className='font-bold'>{period}</button>
      <button onClick={() => { openModal(); setModalType('clock') }} className='text-5xl font-bold' id='time'>{time}</button>
    </div>
  )
}

interface SelectorInterface{
  setSelected: (e:string) => void,
  selected: string
}

export const Selector: FC<SelectorInterface> = ({ setSelected, selected }) => {
  return (
    <div className='w-full inline-flex items-start justify-start'>
      <button
        className={'px-3 py-1 w-1/2 font-bold text-white transition-all ' + (selected === 'season' ? 'bg-[#0078b2]' : 'bg-black') }
        onClick={() => setSelected('season')}
      >
        SEASON
      </button>
      <button
        className={'px-3 py-1 w-1/2 font-bold text-white transition-all ' + (selected === 'game' ? 'bg-[#0078b2]' : 'bg-black') }
        onClick={() => setSelected('game')}
      >
        GAME
      </button>
    </div>
  )
}

interface ButtonInterface{
  timeHandler: (e:boolean) => void,
  timeRunning: boolean,
  mainHandler: (e:string, x:string) => void
  posesion: (team: string) => void,
}

export const Buttons:FC<ButtonInterface> = ({ timeHandler, timeRunning, mainHandler, posesion }) => {
  const classButton = 'flex flex-col bg-[#0078b2] items-center justify-center text-white font-bold text-sm rounded-2xl mx-1 hover:bg-[#003954] transition-all'

  return (
    <div className='w-full px-3 bg-[#656665] h-max inline-flex items-center justify-end'>
      <div className='inline-flex items-center justify-center w-2/5'>
        <button className={classButton + ' w-24 h-24'} onClick={() => { mainHandler('local', 'shoot') }}>
          <GpsFixedIcon />
          <span className='mt-1'>TIRO</span>
        </button>
        <button className={classButton + ' w-24 h-24'} onClick={() => { mainHandler('local', 'fault') }}>
          <Sports />
          <span className='mt-1'>FALTA</span>
        </button>
        <button className={classButton + ' w-24 h-24'} onClick={() => { mainHandler('local', 'saque') }}>
          <SportsHockey />
          <span className='mt-1'>SAQUE</span>
        </button>
        <button className={classButton + ' w-24 h-24'} onClick={() => { posesion('local') }}>
          <HourglassBottom />
          <span className='mt-1'>POSESION</span>
        </button>
      </div>
      <div className='flex flex-col items-center justify-center w-1/5 my-2 h-full'>
        <div className='inline-flex items-center justify-center w-full h-full'>
          <button className={classButton + ' w-28 h-28'} onClick={() => { mainHandler('local', 'goal') }}>
            <SportsScore />
            GOAL
          </button>
          <button className={classButton + ' w-28 h-28'} onClick={() => { mainHandler('visitor', 'goal') }}>
            <SportsScore />
            GOAL
          </button>
        </div>
        <button onClick={() => { posesion(''); timeHandler(!timeRunning) }} className='w-5/6 bg-green-800 text-white text-xl font-bold rounded-xl py-2 border-2 border-black mt-3 transition-all hover:bg-green-600'>
          START/STOP
        </button>
      </div>
      <div className='flex flex-row-reverse justify-center items-center w-2/5'>
        <button className={classButton + ' w-24 h-24'} onClick={() => { mainHandler('visitor', 'shoot') }}>
          <GpsFixedIcon />
          <span className='mt-1'>TIRO</span>
        </button>
        <button className={classButton + ' w-24 h-24'} onClick={() => { mainHandler('visitor', 'fault') }}>
          <Sports />
          <span className='mt-1'>FALTA</span>
        </button>
        <button className={classButton + ' w-24 h-24'} onClick={() => { mainHandler('visitor', 'saque') }}>
          <SportsHockey />
          <span className='mt-1'>SAQUE</span>
        </button>
        <button className={classButton + ' w-24 h-24'} onClick={() => { posesion('visitor') }}>
          <HourglassBottom />
          <span className='mt-1'>POSESION</span>
        </button>
      </div>
    </div>
  )
}
