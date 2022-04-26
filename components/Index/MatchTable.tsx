import { FC } from 'react'
import { TableCell, TableRow } from '@mui/material'
import { Match } from 'constants/interfaces'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search'

interface MatchTableInterface{
  selected: number,
  row: Match,
  _o: number,
  setSelected: (res:number) => void
}

const select = async (idp: number, setSelected: (res:number) => void) => {
  const req = await fetch('https://api.cplv-tv.tk/app/select/' + idp, { method: 'POST' })
  const res = await req.text()
  setSelected(Number(res))
}

const MatchTable: FC<MatchTableInterface> = ({ selected, row, _o, setSelected }) => (
  <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    className={Number(selected) !== Number(row.idp) ? _o % 2 === 0 ? 'bg-gray-200' : '' : 'bg-yellow-500'}
  >
    <TableCell className='text-center'>
      <Image src={row.local.logo} height={25} width={25} />
    </TableCell>
    <TableCell className='text-center'>
      {row.local.acronym}
    </TableCell>
    <TableCell className='text-center'>-</TableCell>
    <TableCell className='text-center'>
      {row.visitor.acronym}
    </TableCell>
    <TableCell className='text-center'>
      <Image src={row.visitor.logo} height={25} width={25} />
    </TableCell>
    <TableCell className='capitalize text-center'>{new Date(row.date).toLocaleString(['es-ES'], { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</TableCell>
    <TableCell className='text-center'>{row.period}</TableCell>
    <TableCell className='text-center' align="right">
      {row.score.local || 0} : {row.score.visitor || 0}
    </TableCell>
    <TableCell><button onClick={() => { select(row.idp, setSelected) }}><SearchIcon className={row.period !== 'SIN COMENZAR' ? 'animate-pulse text-red-600 transition-all hover:text-red-500' : 'transition-all hover:text-blue-500'}/></button></TableCell>
  </TableRow>
)

export default MatchTable
