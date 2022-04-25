import Header from 'Components/Header'
import { Match } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import MatchHeader from 'Components/MatchHeader'
import Image from 'next/image'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import { getObjects } from 'Functions/Reusable'
import TeamTable from 'Components/Casters/TeamTable'
import CastersHeader from 'Components/Casters/CastersHeader'
import { Shoots, Possesion, Sancion } from 'Components/Casters/Widgets'
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
  if (data === undefined) return (<>LOADING...</>)
  let localPlayers: any[] | undefined
  let visitorPlayers: any[] | undefined
  const events = data.events.map((item:any) => item).reverse()
  if (players !== undefined) {
    localPlayers = players.filter((p:any) => p.team.acronym === match.local.acronym)
    visitorPlayers = players.filter((p:any) => p.team.acronym === match.visitor.acronym)
  }
  return (
    <div className='min-h-screen h-full bg-white flex flex-col items-center justify-start'>
      <Header />
      <MatchHeader match={match} />
      <CastersHeader match={match} period={data.period.big} time={data.time} />
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
            <table className='border-[#d5d6d5] text-center'>
              <thead className='border-white'>
                <tr className=' bg-[#d5d6d5] w-full'>
                  <td className='w-[3px]'></td>
                  <td className='w-[150px] text-left border-r'>MARCADOR</td>
                  <td className='w-[20px] border-r'>P1</td>
                  <td className='w-[20px] border-r'>P2</td>
                  <td className='w-[20px] border-r'>OT</td>
                  <td className='w-[20px]'>Tot</td>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b'>
                  <td></td>
                  <td className='text-left border-r flex items-center'>
                    <Image src={match.local.logo} height={25} width={25} />
                    <span className='mx-2'>{match.local.acronym}</span>
                  </td>
                  <td className='border-r'>{data.local.goals.first}</td>
                  <td className='border-r'>{data.local.goals.second}</td>
                  <td className='border-r'>{data.local.goals.third}</td>
                  <td className='bg-[#0087bd] text-white font-bold'>{data.local.goalsTotal}</td>
                </tr>
                <tr>
                  <td></td>
                  <td className='text-left border-r flex items-center'>
                    <Image src={match.visitor.logo} height={25} width={25} />
                    <span className='mx-2'>{match.visitor.acronym}</span>
                  </td>
                  <td className='border-r'>{data.visitor.goals.first}</td>
                  <td className='border-r'>{data.visitor.goals.second}</td>
                  <td className='border-r'>{data.visitor.goals.third}</td>
                  <td className='bg-[#0087bd] text-white font-bold'>{data.visitor.goalsTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-col border m-2 w-full'>
            <table className='border-[#d5d6d5] text-center'>
              <thead className='border-white'>
                <tr className='bg-[#d5d6d5] w-full'>
                  <td className='w-[3px]'></td>
                  <td className='w-[150px] border-r text-left'>PENALIZACIONES</td>
                  <td className='w-[20px] border-r'>P1</td>
                  <td className='w-[20px] border-r'>P2</td>
                  <td className='w-[20px] border-r'>OT</td>
                  <td className='w-[20px]'>Tot</td>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b'>
                  <td></td>
                  <td className='text-left border-r'>{match.local.acronym}</td>
                  <td className='border-r'>{data.local.faults.first}</td>
                  <td className='border-r'>{data.local.faults.second}</td>
                  <td className='border-r'>{data.local.faults.third}</td>
                  <td className='text-white font-bold bg-[#0087bd]'>{data.local.pimTotal}</td>
                </tr>
                <tr>
                  <td></td>
                  <td className='text-left border-r'>{match.visitor.acronym}</td>
                  <td className='border-r'>{data.visitor.faults.first}</td>
                  <td className='border-r'>{data.visitor.faults.second}</td>
                  <td className='border-r'>{data.visitor.faults.third}</td>
                  <td className='text-white font-bold bg-[#0087bd]'>{data.visitor.pimTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='w-full inline-flex'>
          <div className='w-1/2 m-2 border'>
            <TeamTable name={match.local.name} players={localPlayers} />
            <TeamTable name={match.visitor.name} players={visitorPlayers} />
          </div>
          <div className='w-1/2 m-2 border'>
            <table className='w-full'>
              <thead className='bg-[#d5d6d5] w-full'>
                <tr>
                  <td colSpan={3} className='pl-2 font-bold'>INCIDENCIAS</td>
                </tr>
              </thead>
              <tbody>
                {events !== undefined && localPlayers !== undefined && visitorPlayers !== undefined && events.map((e:any, _i:number) => {
                  return (
                    <tr key={'event' + _i} className='border-b inline-flex items-center justify-start w-full pl-2'>
                      <td className='flex-col flex items-center justify-center mt-2'>
                        <Image src={e.team === 'local' ? match.local.logo : match.visitor.logo } width={23} height={23} />
                        <span className='text-sm'><AccessTimeIcon fontSize='small' className='w-[15-px] h-[15px] mb-0.5 mr-0.5'/>{e.time}</span>
                      </td>
                      <td className='h-full mx-3'>
                        {e.type === 'goal' ? <Image src={'https://www.sidgad.com/shared/portales_files/images/icon_gol.png'} width={25} height={25}/> : <CloseIcon className='text-[#ff0101] font-bold' />}
                      </td>
                      <td className='flex flex-col items-start justify-center h-full'>
                        <span className={'font-bold text-sm ' + (e.type === 'goal' ? 'text-[#0087bd]' : 'text-[#ff0101]')}>{e.type.toUpperCase()} {e.team === 'local' ? match.local.name : match.visitor.name }</span>
                        <span className='text-sm'>{e.type === 'goal' ? 'GOL:' : 'FALTA:'}: (#{e.goal}) {getObjects((e.team === 'local' ? localPlayers : visitorPlayers), 'dorsal', e.goal)[0].name}</span>
                        <span className='text-sm'>{e.type === 'fault' ? `Type: ${e.assist}` : `Assist: ${getObjects((e.team === 'local' ? localPlayers : visitorPlayers), 'dorsal', e.assist)[0].name}` }</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
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
