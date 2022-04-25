import Header from 'components/Header'
import LeagueTable from 'components/Index/LeagueTable'
import { Match } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'

interface HomeProps{
  matches: Match[],
  leagues: string[],
  idp: number
}

const Home: NextPage<HomeProps> = ({ matches, leagues, idp }) => {
  const [selected, setSelected] = useState(idp)
  if (matches.length === 0) {
    return (
      <div className='flex flex-col h-full w-full'>
        <Header />
        <h1 className='text-center w-full text-3xl font-bold mt-10'>NO MATCHES ARE SELECTABLE</h1>
      </div>
    )
  }
  return (
    <div className='flex flex-col h-full w-full'>
     <Header />
      <div className='flex flex-col items-center justify-center'>
        {leagues?.map((league, _i) =>
          <LeagueTable league={league} key={'league' + _i} matches={matches} setSelected={setSelected} selected={selected} />
        )}
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
