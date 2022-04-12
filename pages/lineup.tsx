import Header from 'Components/Header'
import MatchHeader from 'Components/MatchHeader'
import { Match, Player } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit'
import CancelIcon from '@mui/icons-material/Cancel'
import StorageIcon from '@mui/icons-material/Storage'
import AddIcon from '@mui/icons-material/Add'
import { Autocomplete, TextField } from '@mui/material'

interface LineupProps{
  match: Match,
  players: Player[],
}

const pos = ['P1', 'P2', 'C', 'A']

const Lineup: NextPage<LineupProps> = ({ match, players }) => {
  const [playersArray, setPlayersArray] = useState<Player[]>(players)
  const [selected, setSelected] = useState(match.local.acronym)
  const [player, setPlayer] = useState<Player>()
  const [view, setView] = useState(false)
  const [playerSel, setPlayerSel] = useState(false)
  const [dorsal, setDorsal] = useState<string>()
  const [teamData, setTeamData] = useState<string>()
  const [toAddPlayer, setToAddPlayer] = useState<Player>()
  const [allPlayers, setAllPlayers] = useState<Player[]>()

  useEffect(() => {
    async function getAllPlayers () {
      const request = await fetch('https://api.cplv-tv.tk/players')
      const allPlayers = await request.json()
      const returnPlayers = []
      const names:any = []
      for (let i = 0; i < allPlayers.length; i++) {
        if (!names.includes(allPlayers[i].name)) {
          returnPlayers.push(allPlayers[i])
          names.push(allPlayers[i].name)
        }
      }
      setAllPlayers(returnPlayers)
    }
    getAllPlayers()
  }, [])

  const saveData = async () => {
    let original = players
    for (let i = 0; i < original.length; i++) {
      const playerIn = original[i]
      if (player !== undefined) {
        if (playerIn.name === player.name) {
          original[i].dorsal = dorsal || '00'
          original[i].position = teamData
        }
      }
    }
    original = original.map((p) => ({
      ...p,
      matchStats: {
        g: 0,
        a: 0,
        pim: 0
      }
    }))
    setPlayersArray(original)
    await update()
  }

  const update = async () => {
    console.log(playersArray)
    await fetch('https://api.cplv-tv.tk/app/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playersArray)
    })
  }

  const addData = async () => {
    if (toAddPlayer === undefined) return
    const play = toAddPlayer
    play.team = selected === match.local.acronym ? match.local : match.visitor
    playersArray.push(play)
    await update()
  }

  return (
    <div className='min-h-screen h-full bg-gray-300 flex flex-col items-center justify-start'>
      <Header />
      <MatchHeader match={match} />
      <button onClick={() => { setPlayerSel(true) }} className='absolute z-3 bottom-10 right-10 bg-gray-500  w-12 hover:bg-gray-700 transition-all h-12 flex items-center justify-center p-1 rounded-full text-white'><AddIcon /></button>
      {view &&
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
                    <input type={'numeric'} className='w-20 mb-5 bg-blue-200' defaultValue={dorsal} onChange={(e) => { setDorsal(e.target.value) }} />
                    <div>
                      {pos.map((p, i) => (
                        <button className={'rounded-full px-2 py-0.5 min-w-[40px] mx-0.5 text-white ' + (teamData === p ? 'bg-yellow-500' : 'bg-gray-500')} onClick={() => { setTeamData((p === teamData ? undefined : p)) }} key={'b' + i}>{p}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
            <div className='inline-flex items-center justify-between w-5/6 p-5 text-white'>
              <button onClick={() => { setView(false) }} className='mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all'>
                <CancelIcon />
                <span className='ml-1'>Cancelar</span>
              </button>
              <button onClick={() => { saveData(); setView(false) }} className='mx-1.5 bg-blue-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-blue-700 transition-all'>
                <EditIcon />
                <span className='ml-1'>Modificar</span>
              </button>
            </div>
          </div>
        </div>
      }
      {playerSel && allPlayers !== undefined &&
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
                  setToAddPlayer(v)
                }
              }}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Player" />}
            />
            </div>
            <div className='inline-flex items-center justify-between w-5/6 p-5 text-white'>
              <button onClick={() => { setPlayerSel(false) }} className='mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all'>
                <CancelIcon />
                <span className='ml-1'>Cancelar</span>
              </button>
              <button onClick={() => { addData(); setPlayerSel(false) }} className='mx-1.5 bg-blue-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-blue-700 transition-all'>
                <EditIcon />
                <span className='ml-1'>Modificar</span>
              </button>
            </div>
          </div>
        </div>
      }

      <div className='h-max inline-flex border-t w-full justify-center items-center px-24 bg-[#013a54] text-white'>
        <button onClick={() => { setSelected(match.local.acronym) }} className={'mx-3 font-bold border-b-4 py-1.5 px-3 transition-all ' + (selected === match.local.acronym ? 'border-blue-300' : 'border-transparent')}>LOCAL</button>
        <button onClick={() => { setSelected(match.visitor.acronym) }} className={'mx-3 font-bold border-b-4 py-1.5 px-3 transition-all ' + (selected === match.visitor.acronym ? 'border-blue-300' : 'border-transparent')}>VISITOR</button>
      </div>
      <div className='inline-flex flex-wrap w-full items-start justify-start'>
        {playersArray.map((player, _i) => (
          <button onClick={() => { setDorsal(player.dorsal || '0'); setTeamData(player.position); setPlayer(player); setView(true) }} key={'player' + _i} className={'max-w-[155px] mx-0.5 mb-0.5 ' + (selected === player.team.acronym ? '' : 'hidden')}>
            <div className='relative'>
              {player.img && player.img !== '' && <Image src={player.img} width={140} height={175} />}
              <div className='absolute z-5 bottom-1.5 left-0 px-2 py-1 text-white font-bold text-2xl bg-[#333332] rounded-tr-xl'>{player.dorsal === undefined ? '--' : player.dorsal}</div>
              <div className={'absolute z-5 bottom-1.5 right-0 px-2 py-1 text-white font-bold text-2xl rounded-tl-xl ' + (player.position !== undefined ? 'bg-yellow-500' : 'hidden')}>{player.position}</div>
            </div>
            <p className='text-left mx-1 break-words text-xs overflow-hidden w-[120px] text-black font-semibold capitalize'>{player.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  let request = await fetch('https://api.cplv-tv.tk/app/players')
  let players = await request.json()
  request = await fetch('https://api.cplv-tv.tk/app/select')
  const idp = await request.json()
  if (idp === '0' || idp === undefined || idp === null || idp === '') {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  request = await fetch('https://api.cplv-tv.tk/match')
  let match = await request.json()
  match = match.filter((a:any) => a.idp === idp)
  if (match.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  match = match[0]
  const league = (match.league.indexOf('-') !== -1 ? match.league.split('-')[0].trim() : match.league)
  request = await fetch('https://api.cplv-tv.tk/league/' + league)
  const data = await request.json()
  if (players.length === 0) {
    players = data.players
    players = players.filter((a:Player) => (a.team.acronym === match.local.acronym || match.visitor.acronym === a.team.acronym))
  }
  match.visitor.name = getObjects(data, 'acronym', match.visitor.acronym)[0].name
  match.local.name = getObjects(data, 'acronym', match.local.acronym)[0].name
  return {
    props: {
      match: match,
      players
    }
  }
}

function getObjects (obj:any, key:any, val:any) {
  if (val.indexOf('-') !== -1) val = val.split('-')[0].trim()
  let objects:any[] = []
  for (const i in obj) {
    if (typeof obj[i] === 'object') {
      objects = objects.concat(getObjects(obj[i], key, val))
    } else if ((i === key && obj[i] === val) || (i === key && val === '')) { //
      objects.push(obj)
    } else if (obj[i] === val && key === '') {
      if (objects.lastIndexOf(obj) === -1) {
        objects.push(obj)
      }
    }
  }
  return objects
}

export default Lineup
