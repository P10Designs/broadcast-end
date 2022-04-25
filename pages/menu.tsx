import Header from 'Components/Header'
import { Match } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote'
import MatchHeader from 'Components/MatchHeader'
import { getObjects } from 'Functions/Reusable'

interface MenuProps{
  match: Match,
}

const Menu: NextPage<MenuProps> = ({ match }) => {
  const buttonClass = 'min-w-[150px] p-5 hover:scale-110 transition-all m-5 bg-[#0078b2] rounded-xl text-white flex flex-col items-center justify-center font-bold'
  const router = useRouter()
  return (
    <div className='min-h-screen h-full bg-gray-300'>
      <Header />
      <MatchHeader match={match} />
      <div className='inline-flex flex-wrap w-full h-full items-center justify-center p-10'>
        <button
          className={buttonClass}
          onClick={() => {
            router.push('/casters')
          }}>
          <SupportAgentIcon className='text-7xl' />
          <span>CASTERS</span>
        </button>
        <button
          className={buttonClass}
          onClick={() => {
            router.push('/lineup')
          }}>
          <SupervisorAccountIcon className='text-7xl'/>
          <span>ALINEACIONES</span>
        </button>
        <button
          className={buttonClass}
          onClick={() => {
            router.push('/controller')
          }}>
          <SettingsRemoteIcon className='text-7xl' />
          <span>CONTROLLER</span>
        </button>
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
      match: match
    }
  }
}

export default Menu
