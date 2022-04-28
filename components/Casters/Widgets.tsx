import { FC } from 'react'
import Image from 'next/image'
import { Match, Player } from 'constants/interfaces'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CloseIcon from '@mui/icons-material/Close'
import { getObjects } from 'functions/Reusable'
interface WidgetInterface{
  match: Match,
  data: any
}

export const Shoots: FC<WidgetInterface> = ({ match, data }) => (
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
          <div style={{ width: `${(data.local.goal.total * 325) / 50}px` }} className='absolute bg-[#0087bd] h-[20px]'></div>
          <div style={{ width: `${(data.local.shoot.total * 325) / 50}px` }} className='bg-[#d5d6d5] h-[20px]'></div>
          <div></div>
        </td>
        <td className='border-r'>{data.local.goal.total}</td>
        <td className='border-r'>{data.local.shoot.total}</td>
        <td>{isNaN((data.local.goal.total * 100) / data.local.shoot.total) ? '0.00' : ((data.local.goal.total * 100) / data.local.shoot.total).toFixed(2)}</td>
      </tr>
      <tr className='text-center border-[#d5d6d5]'>
        <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
          <Image src={match.visitor.logo} height={25} width={25} />
          <span className='mx-2'>{match.visitor.acronym}</span>
        </td>
        <td className='text-left relative border-r w-[325px]'>
          <div style={{ width: `${(data.visitor.goal.total * 325) / 50}px` }} className='absolute bg-[#0087bd] h-[20px]'></div>
          <div style={{ width: `${(data.visitor.goal.total * 325) / 50}px` }} className='bg-[#d5d6d5] h-[20px]'></div>
          <div></div>
        </td>
        <td className='border-r'>{data.visitor.goal.total}</td>
        <td className='border-r'>{data.visitor.shoot.total}</td>
        <td>{isNaN((data.visitor.goal.total * 100) / data.visitor.shoot.total) ? '0.00' : ((data.visitor.goalsTotal * 100) / data.visitor.shoot.total).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>
)

export const Possesion: FC<WidgetInterface> = ({ match, data }) => (
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
          <div className='mx-2'>{data.local.pos.total}%</div>
          <div style={{ width: `${(data.local.pos.total * 800) / 100}px` }} className='float-left bg-[#0087bd] h-[20px]'></div>
          <div style={{ width: `${((100 - (data.local.pos.total + data.visitor.pos.total)) * 800) / 100}px` }} className='float-left text-center bg-[#d5d6d5] h-[20px]'>{(100 - (data.local.pos.total + data.visitor.pos.total)).toFixed(2)}%</div>
          <div style={{ width: `${(data.visitor.pos.total * 800) / 100}px` }} className='float-right bg-[#ff0101] h-[20px]'></div>
          <div className='mx-2'>{data.visitor.pos.total}%</div>
        </td>
        <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
          <span className='mx-2'>{match.visitor.acronym}</span>
          <Image src={match.visitor.logo} height={25} width={25} />
        </td>
      </tr>
    </tbody>
  </table>
)

export const Sancion: FC<WidgetInterface> = ({ match, data }) => (
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
          <div style={{ width: `${(data.local.fault.total * 150) / 20}px` }} className='bg-[#0087bd] h-[20px]'></div>
          <div></div>
        </td>
        <td>{data.local.fault.total}</td>
      </tr>
      <tr className='border-b border-[#d5d6d5]'>
        <td className='text-left inline-flex items-center border-r justify-center w-[80px]'>
          <Image src={match.visitor.logo} height={25} width={25} />
          <span className='mx-2'>{match.visitor.acronym}</span>
        </td>
        <td className='text-left relative border-r w-[150px]'>
          <div style={{ width: `${(data.visitor.fault.total * 150) / 20}px` }} className='bg-[#0087bd] h-[20px]'></div>
        </td>
        <td>{data.visitor.fault.total}</td>
      </tr>
    </tbody>
  </table>
)

export const Marcador: FC<WidgetInterface> = ({ match, data }) => (
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
        <td className='border-r'>{data.local.goal.first}</td>
        <td className='border-r'>{data.local.goal.second}</td>
        <td className='border-r'>{data.local.goal.third}</td>
        <td className='bg-[#0087bd] text-white font-bold'>{data.local.goal.total}</td>
      </tr>
      <tr>
        <td></td>
        <td className='text-left border-r flex items-center'>
          <Image src={match.visitor.logo} height={25} width={25} />
          <span className='mx-2'>{match.visitor.acronym}</span>
        </td>
        <td className='border-r'>{data.visitor.goal.first}</td>
        <td className='border-r'>{data.visitor.goal.second}</td>
        <td className='border-r'>{data.visitor.goal.third}</td>
        <td className='bg-[#0087bd] text-white font-bold'>{data.visitor.goal.total}</td>
      </tr>
    </tbody>
  </table>
)

export const Penalties: FC<WidgetInterface> = ({ match, data }) => (
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
        <td className='text-white font-bold bg-[#0087bd]'>{data.local.faultTotal}</td>
      </tr>
      <tr>
        <td></td>
        <td className='text-left border-r'>{match.visitor.acronym}</td>
        <td className='border-r'>{data.visitor.faults.first}</td>
        <td className='border-r'>{data.visitor.faults.second}</td>
        <td className='border-r'>{data.visitor.faults.third}</td>
        <td className='text-white font-bold bg-[#0087bd]'>{data.visitor.faultTotal}</td>
      </tr>
    </tbody>
  </table>
)

interface EventsInterface{
  match: Match,
  events: any[],
  localPlayers?: Player[],
  visitorPlayers?: Player[]
}

export const Events: FC<EventsInterface> = ({ match, events, localPlayers, visitorPlayers }) => (
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
)
