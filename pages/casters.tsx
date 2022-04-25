import Header from 'components/Header'
import { Match } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import MatchHeader from 'components/MatchHeader'
import { useEffect, useState } from 'react'
import { getObjects } from 'Functions/Reusable'
import TeamTable from 'components/Casters/TeamTable'
import CastersHeader from 'components/Casters/CastersHeader'
import { Loading } from 'components/Loading'
import { Shoots, Possesion, Sancion, Marcador, Penalties, Events } from 'components/Casters/Widgets'
interface MenuProps{
  match: Match,
}

const Casters: NextPage<MenuProps> = ({ match }) => {
  const [data, setData] = useState<any>()
  const [players, setPlayers] = useState<any[]>()
  useEffect(() => {
    async function getServerData () {
      const req = await fetch('https://api.cplv-tv.tk/app/data')
      setData(await req.json())
      const request = await fetch('https://api.cplv-tv.tk/app/players')
      setPlayers(await request.json())
    }
    getServerData()
    const id = setInterval(() => {
      getServerData()
    }, 1000)
    return () => clearInterval(id)
  }, [])
  if (data === undefined || data.events === undefined) return <Loading />
  let localPlayers: any[] | undefined
  let visitorPlayers: any[] | undefined
  if (players !== undefined) {
    localPlayers = players.filter((p:any) => p.team.acronym === match.local.acronym)
    visitorPlayers = players.filter((p:any) => p.team.acronym === match.visitor.acronym)
  }
  let events
  if (data.events !== undefined) events = data.events.map((item:any) => item).reverse()
  return (
    <div className='min-h-screen h-full bg-white flex flex-col items-center justify-start'>
      <Header />
      <MatchHeader match={match} />
      <CastersHeader match={match} period={data.period} time={data.time} />
      <div className='flex flex-col w-5/6'>
        <div className='w-full m-2 inline-flex items-center justify-center'>
          <Possesion match={match} data={data} />
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <div className='flex flex-col border m-2 w-4/6'>
            <Shoots match={match} data={data} />
          </div>
          <div className='flex flex-col border m-2 w-2/6'>
            <Sancion match={match} data={data} />
          </div>
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <div className='flex flex-col border m-2 w-full'>
            <Marcador match={match} data={data} />
          </div>
          <div className='flex flex-col border m-2 w-full'>
            <Penalties match={match} data={data} />
          </div>
        </div>
        <div className='w-full inline-flex'>
          <div className='w-1/2 m-2 border'>
            <TeamTable name={match.local.name} players={localPlayers} />
            <TeamTable name={match.visitor.name} players={visitorPlayers} />
          </div>
          <div className='w-1/2 m-2 border'>
            <Events match={match} events={events} localPlayers={localPlayers} visitorPlayers={visitorPlayers} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
  let request = await fetch('https://api.cplv-tv.tk/app/select')
  const idp = Number(await request.json())
  if (idp === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  request = await fetch('https://api.cplv-tv.tk/match')
  let match = await request.json()
  match = match.filter((a:any) => Number(a.idp) === idp)
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
  request = await fetch('https://api.cplv-tv.tk/league/small/' + league)
  const data = await request.json()
  match.local.name = getObjects(data, 'acronym', match.local.acronym)[0].name
  match.visitor.name = getObjects(data, 'acronym', match.visitor.acronym)[0].name
  return {
    props: {
      match
    }
  }
}

export default Casters
