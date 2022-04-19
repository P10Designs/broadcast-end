import Header from 'Components/Header'
import { Match } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import MatchHeader from 'Components/MatchHeader'
import Image from 'next/image'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'

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
      <div className='inline-flex w-full items-center justify-center h-max py-4 border-b border-black bg-gray-500 text-white' >
        <div className='inline-flex items-center justify-center mx-10'>
          <Image src={match.local.logo} width={100} height={100}/>
          <div className='flex flex-col items-start justify-start ml-3'>
            <span>{match.local.name}</span>
            <span>({match.local.acronym})</span>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span className='font-semibold'>{data.period.big}</span>
          <span className='font-bold text-4xl'>{data.time}</span>
        </div>
        <div className='inline-flex items-center justify-center mx-10'>
          <div className='flex flex-col items-end justify-start mr-3'>
            <span>{match.visitor.name}</span>
            <span>({match.visitor.acronym})</span>
          </div>
          <Image src={match.visitor.logo} width={100} height={100}/>
        </div>
      </div>
      <div>
      </div>
      <div className='flex flex-col w-5/6'>
        <div className='w-full m-2 inline-flex items-center justify-center'>
          <table className='border-[#d5d6d5]'>
            <thead className='bg-[#d5d6d5]'>
              <tr className='text-center'>
                <td className='border-r border-white' colSpan={3}>POSESIÓN</td>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center border-b border-[#d5d6d5]'>
                <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
                  <Image src={match.local.logo} height={25} width={25} />
                  <span className='mx-2'>{match.local.acronym}</span>
                </td>
                <td className='text-left inline-flex relative border-r w-[800px]'>
                  <div className='mx-2'>{data.local.posTotal}%</div>
                  <div style={{ width: `${(data.local.posTotal * 800) / 100}px` }} className='float-left bg-[#0087bd] h-[20px]'></div>
                  <div style={{ width: `${((100 - (data.local.posTotal + data.visitor.posTotal)) * 800) / 100}px` }} className='float-left text-center bg-[#d5d6d5] h-[20px]'>{(100 - (data.local.posTotal + data.visitor.posTotal)).toFixed(2)}%</div>
                  <div style={{ width: `${(data.visitor.posTotal * 800) / 100}px` }} className='float-right bg-[#ff0101] h-[20px]'></div>
                  <div className='mx-2'>{data.visitor.posTotal}%</div>
                </td>
                <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
                  <span className='mx-2'>{match.visitor.acronym}</span>
                  <Image src={match.visitor.logo} height={25} width={25} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <div className='flex flex-col border m-2 w-4/6'>
            <table className='border-[#d5d6d5]'>
              <thead className='bg-[#d5d6d5]'>
                <tr className='text-center'>
                  <td className='border-r border-white' colSpan={2}>% GOLES / TIROS A PUERTA</td>
                  <td className='w-[60px] border-r border-white'>Goles</td>
                  <td className='w-[60px] border-r border-white'>Tiros</td>
                  <td className='w-[60px]'>%</td>
                </tr>
              </thead>
              <tbody>
                <tr className='text-center border-b border-[#d5d6d5]'>
                  <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
                    <Image src={match.local.logo} height={25} width={25} />
                    <span className='mx-2'>{match.local.acronym}</span>
                  </td>
                  <td className='text-left relative border-r w-[325px]'>
                    <div style={{ width: `${(data.local.goalsTotal * 325) / 50}px` }} className='absolute bg-[#0087bd] h-[20px]'></div>
                    <div style={{ width: `${(data.local.shootsTotal * 325) / 50}px` }} className='bg-[#d5d6d5] h-[20px]'></div>
                    <div></div>
                  </td>
                  <td className='border-r'>{data.local.goalsTotal}</td>
                  <td className='border-r'>{data.local.shootsTotal}</td>
                  <td>{isNaN((data.local.goalsTotal * 100) / data.local.shootsTotal) ? '0.00' : ((data.local.goalsTotal * 100) / data.local.shootsTotal).toFixed(2)}</td>
                </tr>
                <tr className='text-center border-[#d5d6d5]'>
                  <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
                    <Image src={match.visitor.logo} height={25} width={25} />
                    <span className='mx-2'>{match.visitor.acronym}</span>
                  </td>
                  <td className='text-left relative border-r w-[325px]'>
                    <div style={{ width: `${(data.visitor.goalsTotal * 325) / 50}px` }} className='absolute bg-[#0087bd] h-[20px]'></div>
                    <div style={{ width: `${(data.visitor.shootsTotal * 325) / 50}px` }} className='bg-[#d5d6d5] h-[20px]'></div>
                    <div></div>
                  </td>
                  <td className='border-r'>{data.visitor.goalsTotal}</td>
                  <td className='border-r'>{data.visitor.shootsTotal}</td>
                  <td>{isNaN((data.visitor.goalsTotal * 100) / data.visitor.shootsTotal) ? '0.00' : ((data.visitor.goalsTotal * 100) / data.visitor.shootsTotal).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-col border m-2 w-2/6'>
            <table className='border-[#d5d6d5] text-center'>
              <thead className='bg-[#d5d6d5] border-white'>
                <tr>
                  <td className='border-r' colSpan={2}>MINUTOS DE SANCIÓN</td>
                  <td className='w-[60px] border-r '>Min</td>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-[#d5d6d5]'>
                  <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
                    <Image src={match.local.logo} height={25} width={25} />
                    <span className='mx-2'>{match.local.acronym}</span>
                  </td>
                  <td className='text-left relative border-r w-[150px]'>
                    <div style={{ width: `${(data.local.pimTotal * 150) / 20}px` }} className='bg-[#0087bd] h-[20px]'></div>
                    <div></div>
                  </td>
                  <td>{data.local.pimTotal}</td>
                </tr>
                <tr className='border-b border-[#d5d6d5]'>
                  <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
                    <Image src={match.visitor.logo} height={25} width={25} />
                    <span className='mx-2'>{match.visitor.acronym}</span>
                  </td>
                  <td className='text-left relative border-r w-[150px]'>
                    <div style={{ width: `${(data.visitor.pimTotal * 150) / 20}px` }} className='bg-[#0087bd] h-[20px]'></div>
                  </td>
                  <td>{data.visitor.pimTotal}</td>
                </tr>
              </tbody>
            </table>
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
            <table className='w-full text-center'>
              <thead className='border-white bg-[#d5d6d5]'>
              <tr>
                  <td colSpan={7} className='border-b font-bold'>{match.local.name}</td>
                </tr>
                <tr>
                  <td className='border-r w-[35px]'>#</td>
                  <td className='border-r w-[35px]'>Pos</td>
                  <td className='border-r text-left pl-2'>Jugador</td>
                  <td className='border-r w-[40px]'>PT</td>
                  <td className='border-r w-[40px]'>Gol</td>
                  <td className='border-r w-[40px]'>Ast</td>
                  <td>Pim</td>
                </tr>
              </thead>
              <tbody>
                {localPlayers !== undefined && localPlayers.map((p, _i) => {
                  if (p.position !== undefined && p.position.indexOf('P') !== -1) return (<tr key={'extra' + _i}></tr>)
                  return (
                  <tr key={'localPLayer' + _i} className='border-b'>
                    <td className='border-r'>{p.dorsal}</td>
                    <td className='border-r'>{p.position || ''}</td>
                    <td className='border-r text-left pl-2'>{p.name}</td>
                    <td className='border-r'>{p.matchStats.g + p.matchStats.a}</td>
                    <td className='border-r'>{p.matchStats.g}</td>
                    <td className='border-r'>{p.matchStats.a}</td>
                    <td>{p.matchStats.pim}</td>
                  </tr>
                  )
                })}
                <tr>
                  <td className='bg-[#d5d6d5]' colSpan={7}>PORTEROS</td>
                </tr>
                {localPlayers !== undefined && localPlayers.map((p, _i) => {
                  if (p.position === undefined || p.position.indexOf('P') === -1) return (<tr key={'extra' + _i}></tr>)
                  return (
                  <tr key={'localPLayer' + _i} className='border-b'>
                    <td className='border-r'>{p.dorsal}</td>
                    <td className='border-r'>{p.position || ''}</td>
                    <td className='border-r text-left pl-2' colSpan={5}>{p.name}</td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
            <table className='w-full text-center mt-4'>
              <thead className='border-white bg-[#d5d6d5]'>
                <tr>
                  <td colSpan={7} className='border-b font-bold'>{match.visitor.name}</td>
                </tr>
                <tr>
                  <td className='border-r w-[35px]'>#</td>
                  <td className='border-r w-[35px]'>Pos</td>
                  <td className='border-r text-left pl-2'>Jugador</td>
                  <td className='border-r w-[40px]'>PT</td>
                  <td className='border-r w-[40px]'>Gol</td>
                  <td className='border-r w-[40px]'>Ast</td>
                  <td>Pim</td>
                </tr>
              </thead>
              <tbody>
                {visitorPlayers !== undefined && visitorPlayers.map((p, _i) => {
                  if (p.position !== undefined && p.position.indexOf('P') !== -1) return (<tr key={'extra' + _i}></tr>)
                  return (
                  <tr key={'localPLayer' + _i} className='border-b'>
                    <td className='border-r'>{p.dorsal}</td>
                    <td className='border-r'>{p.position || ''}</td>
                    <td className='border-r text-left pl-2'>{p.name}</td>
                    <td className='border-r'>{p.matchStats.g + p.matchStats.a}</td>
                    <td className='border-r'>{p.matchStats.g}</td>
                    <td className='border-r'>{p.matchStats.a}</td>
                    <td>{p.matchStats.pim}</td>
                  </tr>
                  )
                })}
                <tr>
                  <td className='bg-[#d5d6d5]' colSpan={7}>PORTEROS</td>
                </tr>
                {visitorPlayers !== undefined && visitorPlayers.map((p, _i) => {
                  if (p.position === undefined || p.position.indexOf('P') === -1) return (<tr key={'extra' + _i}></tr>)
                  return (
                  <tr key={'localPLayer' + _i} className='border-b'>
                    <td className='border-r'>{p.dorsal}</td>
                    <td className='border-r'>{p.position || ''}</td>
                    <td className='border-r text-left pl-2' colSpan={5}>{p.name}</td>
                  </tr>
                  )
                })}
              </tbody>
            </table>
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

export default Casters
