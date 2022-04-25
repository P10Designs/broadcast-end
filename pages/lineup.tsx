import Header from 'components/Header'
import MatchHeader from 'components/MatchHeader'
import { Match, Player } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import PlayerComponent from 'components/Lineup/Player'
import PlayerAdd from 'components/Lineup/PlayerAdd'
import EditPlayer from 'components/Lineup/EditPlayer'
import { getAllPlayers, update, setPlayerStats } from 'Functions/Lineup'
import { getObjects } from 'Functions/Reusable'
interface LineupProps{
  match: Match,
  players: Player[],
}

const Lineup: NextPage<LineupProps> = ({ match, players }) => {
  const [playersArray, setPlayersArray] = useState<Player[]>(players)
  const [allPlayers, setAllPlayers] = useState<Player[]>()
  const [selected, setSelected] = useState(match.local.acronym)
  const [player, setPlayer] = useState<Player>()
  const [view, setView] = useState(false)
  const [panel, setPanel] = useState('')

  useEffect(() => {
    getAllPlayers(setAllPlayers)
    setPlayerStats(players, setPlayersArray)
  }, [])

  const modifyPlayer = async (type:string) => {
    let toEdit = playersArray
    if (type === 'save') {
      for (let i = 0; i < toEdit.length; i++) {
        const playerIn = toEdit[i]
        if (player !== undefined) {
          if (playerIn.name === player.name) {
            toEdit[i].dorsal = player.dorsal || '00'
            toEdit[i].position = player.position
          }
        }
      }
    } else if (type === 'delete') {
      if (player !== undefined) {
        toEdit = toEdit.filter((e) => {
          return e.name !== player.name
        })
      }
    } else if (type === 'add') {
      if (player === undefined) return
      player.team = selected === match.local.acronym ? match.local : match.visitor
      toEdit.push(player)
    }
    setPlayersArray(toEdit)
    update(toEdit)
  }

  return (
    <div className='min-h-screen h-full bg-gray-300 flex flex-col items-center justify-start'>
      <Header />
      <MatchHeader match={match} />
      <button onClick={() => { setView(true); setPanel('addPlayer') }} className='absolute z-3 bottom-10 right-10 bg-gray-500  w-12 hover:bg-gray-700 transition-all h-12 flex items-center justify-center p-1 rounded-full text-white'><AddIcon /></button>
      {view && panel === 'editPlayer' && player !== undefined &&
        <EditPlayer setView={setView} player={player} modifyPlayer={modifyPlayer} />
      }
      {view && allPlayers !== undefined && panel === 'addPlayer' &&
        <PlayerAdd allPlayers={allPlayers} setPlayer={setPlayer} setView={setView} modifyPlayer={modifyPlayer} />
      }
      <div className='h-max inline-flex border-t w-full justify-center items-center px-24 bg-[#013a54] text-white'>
        <button onClick={() => { setSelected(match.local.acronym) }} className={'mx-3 font-bold border-b-4 py-1.5 px-3 transition-all ' + (selected === match.local.acronym ? 'border-blue-300' : 'border-transparent')}>LOCAL</button>
        <button onClick={() => { setSelected(match.visitor.acronym) }} className={'mx-3 font-bold border-b-4 py-1.5 px-3 transition-all ' + (selected === match.visitor.acronym ? 'border-blue-300' : 'border-transparent')}>VISITOR</button>
      </div>
      <div className='inline-flex flex-wrap w-full items-start justify-start'>
        {playersArray.map((player, _i) => (
          <PlayerComponent player={player} key={'player' + _i} selected={selected} setPlayer={setPlayer} setView={setView} setPanel={setPanel}/>
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

export default Lineup
