import { FC } from 'react'
import logo from 'public/logo.png'
import Image from 'next/image'
import SettingsIcon from '@mui/icons-material/Settings'
import { useRouter } from 'next/router'
import TouchAppIcon from '@mui/icons-material/TouchApp'

const Header: FC = () => {
  const router = useRouter()
  return (
    <div className='w-full h-12 text-white bg-gray-800  inline-flex items-center px-10'>
      <Image src={logo} width={'30%'} height={'30%'}/>
      <span className='ml-3 font-bold text-xl'>P10MediaGroup</span>
      <button onClick={() => { router.push('/menu') }} className='absolute right-10 hover:scale-125 transition-all'><SettingsIcon /></button>
      <button onClick={() => { router.push('/') }} className='absolute right-20 hover:scale-125 transition-all'><TouchAppIcon /></button>
    </div>
  )
}

export default Header
