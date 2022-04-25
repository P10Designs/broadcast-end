import { FC } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Match } from 'constants/interfaces'
import MatchTable from 'components/Index/MatchTable'

interface LeagueTableInterface{
  matches: Match[],
  league: string,
  selected: number,
  setSelected: (res: number) => void
}

const LeagueTable: FC<LeagueTableInterface> = ({ league, matches, selected, setSelected }) => (
  <div key={'league'} className='flex flex-col w-5/6 my-5'>
    <span className='w-full px-10 py-1 text-center bg-[#08517a] text-white font-bold text-lg rounded-t'>
      {league}
    </span>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, borderRadius: 0 }} size="small" aria-label="a dense table">
        <TableHead sx={{ borderRadius: 0 }}>
          <TableRow className='bg-gray-400 text-white border-none' sx={{ borderRadius: 0 }}>
            <TableCell></TableCell>
            <TableCell className='font-bold uppercase text-center'>Local</TableCell>
            <TableCell></TableCell>
            <TableCell className='font-bold uppercase text-center'>Visitor</TableCell>
            <TableCell className='font-bold uppercase text-center'></TableCell>
            <TableCell className='font-bold uppercase text-center'>Time</TableCell>
            <TableCell className='font-bold uppercase text-center'>Period</TableCell>
            <TableCell className='font-bold uppercase text-center' align="right">Score</TableCell>
            <TableCell className='font-bold uppercase text-center'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map((row, _o) => {
            if (row.league !== league) return null
            return (
              <MatchTable selected={selected} row={row} _o={_o} setSelected={setSelected} key={league + '_match_' + _o} />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
)

export default LeagueTable
