import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Header from 'Components/Header'
import { Match } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { useRouter } from 'next/router'
interface HomeProps{
  matches: Match[],
  leagues: string[],
  idp: number
}

const Home: NextPage<HomeProps> = (props) => {
  const [selected, setSelected] = useState(props.idp)

  const router = useRouter()

  const select = async (idp: number) => {
    const req = await fetch('https://api.cplv-tv.tk/app/select/' + idp, { method: 'POST' })
    const res = await req.text()
    setSelected(Number(res))
    router.push('/menu')
  }
  if (props.matches.length === 0) {
    return (
      <div className='flex flex-col h-full w-full bg-[#f1f1f1'>
        <Header />
        <h1 className='text-center w-full text-3xl font-bold mt-10'>NO MATCHES ARE SELECTABLE</h1>
      </div>
    )
  }
  return (
    <div className='flex flex-col h-full w-full bg-[#f1f1f1'>
      <Header />
      <div className='flex flex-col items-center justify-center'>
        {props.leagues?.map((league, _i) => {
          return (
            <div key={'league' + _i} className='flex flex-col w-5/6 my-5'>
              <span className='w-full px-10 py-1 text-center bg-[#08517a] text-white font-bold text-lg rounded-t'>{league}</span>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, borderRadius: 0 }} size="small" aria-label="a dense table">
                  <TableHead sx={{ borderRadius: 0 }}>
                    <TableRow className='bg-gray-400 text-white border-none' sx={{ borderRadius: 0 }}>
                      <TableCell className='font-bold uppercase text-center'></TableCell>
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
                    {props.matches.map((row, _o) => {
                      if (row.league !== league) return null
                      return (
                      <TableRow
                        key={'match' + _o + 'league' + _i}
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
                        <TableCell className='capitalize text-center'>{new Date(row.date).toLocaleString([], { weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</TableCell>
                        <TableCell className='text-center'>{row.period}</TableCell>
                        <TableCell className='text-center' align="right">
                          {row.score.local || 0} : {row.score.visitor || 0}
                        </TableCell>
                        <TableCell><button onClick={() => { select(row.idp) }}><SearchIcon className={row.period !== 'SIN COMENZAR' ? 'animate-pulse text-red-600 transition-all hover:text-red-500' : 'transition-all hover:text-blue-500'}/></button></TableCell>
                      </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let req = await fetch('https://api.cplv-tv.tk/match')
  let matches = await req.json()
  const leagues:any[] = []
  matches = matches.filter((m:any) => m.period !== ('FINAL' || 'APLAZADO'))
  matches = matches.sort((a:any, b:any) => new Date(a.date) < new Date(b.date))
  matches.forEach((match:any) => {
    const league = match.league.indexOf('-') !== -1 ? match.league.split('-')[0].trim() : match.league
    if (!leagues.includes(league)) leagues.push(league)
  })
  req = await fetch('https://api.cplv-tv.tk/app/select')
  const idp = await req.json()
  return {
    props: {
      idp: Number(idp),
      matches,
      leagues
    }
  }
}

export default Home
