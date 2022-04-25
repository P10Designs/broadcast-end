import { FC } from 'react'
import Image from 'next/image'
import { Match } from 'constants/interfaces'

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
)
