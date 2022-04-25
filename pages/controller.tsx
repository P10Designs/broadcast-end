import { Match, Player } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import { TeamComponent, ShootCounter, Score, Time, Selector, Buttons } from 'Components/Controller'
import { useEffect, useState } from 'react'
import StorageIcon from '@mui/icons-material/Storage'
import EditIcon from '@mui/icons-material/Edit'
import CancelIcon from '@mui/icons-material/Cancel'
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import { getObjects } from 'Functions/Reusable'

const periods = ['PERIODO 1', 'DESCANSO', 'PERIODO 2', 'DESCANSO', 'OVERTIME', 'PENALTIES']
const perSmall = ['1st', 'DES', '2nd', 'DES', 'OT', 'PEN']

const faults = ['CC', 'AG', 'BE', 'CA', 'CG', 'CE', 'CI', 'IF', 'CZ', 'SP', 'EG', 'MC', 'RZ', 'PP', 'SL', 'SA', 'ZC', 'VI']

interface MenuProps{
  match: Match,
  players: Player[]
}

const data:any = {
  time: '25:00',
  situation: 'normal',
  period: {
    small: '1st',
    big: 'PERIODO 1'
  },
  events: [],
  local: {
    lineup1: undefined,
    lineup2: undefined,
    fault1: '',
    fault2: '',
    string: '',
    playerSelected: '',
    players: 4,
    goals: {
      first: 0,
      second: 0,
      third: 0
    },
    shoots: {
      first: 0,
      second: 0,
      third: 0
    },
    faults: {
      first: 0,
      second: 0,
      third: 0
    },
    saques: {
      first: 0,
      second: 0,
      third: 0
    },
    pos: {
      first: 0,
      second: 0,
      third: 0
    },
    posTotal: 0,
    saquesTotal: 0,
    goalsTotal: 0,
    shootsTotal: 0,
    pimTotal: 0
  },
  visitor: {
    lineup1: undefined,
    lineup2: undefined,
    fault1: '',
    fault2: '',
    string: '',
    playerSelected: '',
    players: 4,
    goals: {
      first: 0,
      second: 0,
      third: 0
    },
    faults: {
      first: 0,
      second: 0,
      third: 0
    },
    shoots: {
      first: 0,
      second: 0,
      third: 0
    },
    saques: {
      first: 0,
      second: 0,
      third: 0
    },
    pos: {
      first: 0,
      second: 0,
      third: 0
    },
    posTotal: 0,
    saquesTotal: 0,
    goalsTotal: 0,
    shootsTotal: 0,
    pimTotal: 0
  }
}

const Menu: NextPage<MenuProps> = ({ match, players }) => {
  const [selected, setSelected] = useState('season')
  const [view, setView] = useState(false)
  const [modalType, setModalType] = useState('')
  const [localSelectedPlayer, setLocalSelectedPlayer] = useState<Player>()
  const [visitorSelectedPlayer, setVisitorSelectedPlayer] = useState<Player>()
  const [running, setTimeRunning] = useState(false)
  const [field1, setField1] = useState('')
  const [field2, setField2] = useState('')
  const [team, setTeam] = useState('')
  const [posesion, setPosesion] = useState('')
  const [update, setUpdate] = useState('')
  let ms = 99

  const localPlayerHandler = (row: Player) => {
    setLocalSelectedPlayer(row)
    data.local.playerSelected = row
  }

  const visitorPlayerHandler = (row: Player) => {
    setVisitorSelectedPlayer(row)
    data.visitor.playerSelected = row
  }

  const exportData = async () => {
    let req = await fetch('https://api.cplv-tv.tk/app/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const mixed:any[] = []
    for (let i = 0; i < localPlayers.length; i++) {
      mixed.push(localPlayers[i])
    }
    for (let i = 0; i < visitorPlayers.length; i++) {
      mixed.push(visitorPlayers[i])
    }
    req = await fetch('https://api.cplv-tv.tk/app/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mixed)
    })
    return req.json()
  }

  const timer = async () => {
    if (running) {
      const time = document.querySelector('#realtime')
      if (time === null || time === undefined || time.textContent === null) return
      const split = time.textContent.split(':')
      if (ms !== 0) {
        ms -= 1
      } else if (time !== undefined) {
        if (data.local.fault1 !== '' || data.local.fault2 !== '') {
          if (data.local.fault1 !== '') {
            const fault1 = data.local.fault1.split(':')
            let update = true
            if (Number(fault1[1]) === 0) {
              if (Number(fault1[0]) === 0) {
                if (data.local.fault2 !== '') {
                  update = false
                  data.local.fault1 = data.local.fault2
                  data.local.players += 1
                  data.local.fault2 = ''
                } else {
                  data.local.fault1 = ''
                }
              } else {
                fault1[0] = String(Number(fault1[0]) - 1)
                fault1[1] = '59'
              }
            } else {
              fault1[1] = String(Number(fault1[1]) - 1)
            }
            if (update) data.local.fault1 = `${Number(fault1[0]) < 10 ? '0' + Number(fault1[0]) : Number(fault1[0])}:${Number(fault1[1]) < 10 ? '0' + Number(fault1[1]) : Number(fault1[1])}`
            setUpdate(String(Math.random()))
          }
          if (data.local.fault2 !== '') {
            const fault2 = data.local.fault2.split(':')
            if (Number(fault2[1]) === 0) {
              if (Number(fault2[0]) === 0) {
                data.local.fault2 = ''
              } else {
                fault2[0] = String(Number(fault2[0]) - 1)
                fault2[1] = '59'
              }
            } else {
              fault2[1] = String(Number(fault2[1]) - 1)
            }
            data.local.fault2 = `${Number(fault2[0]) < 10 ? '0' + Number(fault2[0]) : Number(fault2[0])}:${Number(fault2[1]) < 10 ? '0' + Number(fault2[1]) : Number(fault2[1])}`
            setUpdate(String(Math.random()))
          }
        }
        if (data.visitor.fault1 !== '' || data.visitor.fault2 !== '') {
          if (data.visitor.fault1 !== '') {
            const fault1 = data.visitor.fault1.split(':')
            let update = true
            if (Number(fault1[1]) === 0) {
              if (Number(fault1[0]) === 0) {
                if (data.visitor.fault2 !== '') {
                  update = false
                  data.visitor.fault1 = data.visitor.fault2
                  data.visitor.players += 1
                  data.visitor.fault2 = ''
                } else {
                  data.visitor.fault1 = ''
                }
              } else {
                fault1[0] = String(Number(fault1[0]) - 1)
                fault1[1] = '59'
              }
            } else {
              fault1[1] = String(Number(fault1[1]) - 1)
            }
            if (update) data.visitor.fault1 = `${Number(fault1[0]) < 10 ? '0' + Number(fault1[0]) : Number(fault1[0])}:${Number(fault1[1]) < 10 ? '0' + Number(fault1[1]) : Number(fault1[1])}`
            setUpdate(String(Math.random()))
          }
          if (data.visitor.fault2 !== '') {
            const fault2 = data.visitor.fault2.split(':')
            if (Number(fault2[1]) === 0) {
              if (Number(fault2[0]) === 0) {
                data.visitor.fault2 = ''
              } else {
                fault2[0] = String(Number(fault2[0]) - 1)
                fault2[1] = '59'
              }
            } else {
              fault2[1] = String(Number(fault2[1]) - 1)
            }
            data.visitor.fault2 = `${Number(fault2[0]) < 10 ? '0' + Number(fault2[0]) : Number(fault2[0])}:${Number(fault2[1]) < 10 ? '0' + Number(fault2[1]) : Number(fault2[1])}`
            setUpdate(String(Math.random()))
          }
        }

        if (posesion !== '') {
          const passed = (25 * 60) - (Number(split[0]) * 60 + Number(split[1]))
          if (data.period.big === 'PERIODO 1') {
            if (posesion === 'local') {
              data.local.pos.first += 1
            } else {
              data.visitor.pos.first += 1
            }
            data.visitor.posTotal = Number((data.visitor.pos.first * 100 / passed).toFixed(2))
            data.local.posTotal = Number((data.local.pos.first * 100 / passed).toFixed(2))
          } else if (data.period.big === 'PERIODO 2') {
            if (posesion === 'local') {
              data.local.pos.second += 1
            } else {
              data.visitor.pos.second += 1
            }
            data.visitor.posTotal = Number((data.visitor.pos.first * 100 / passed).toFixed(2))
            data.local.posTotal = Number((data.local.pos.second * 100 / passed).toFixed(2))
          } else if (data.period.big === 'OVERTIME') {
            if (posesion === 'local') {
              data.local.pos.third += 1
            } else {
              data.visitor.pos.third += 1
            }
            data.visitor.posTotal = Number((data.visitor.pos.first * 100 / passed).toFixed(2))
            data.local.posTotal = Number((data.local.pos.third * 100 / passed).toFixed(2))
          }
          setUpdate(String(Math.random()))
        }
        if (Number(split[1]) === 0) {
          if (Number(split[0]) === 0) {
            split[0] = '0'
            split[1] = '0'
            setTimeRunning(false)
            data.period.big = periods[(periods.indexOf(data.period.big) + 1)]
            data.period.small = perSmall[periods.indexOf(data.period.big) + 1]
            data.visitor.posTotal = 0
            data.local.posTotal = 0
          } else {
            split[0] = String(Number(split[0]) - 1)
            split[1] = '59'
            ms = 60
          }
        } else {
          split[1] = String(Number(split[1]) - 1)
          ms = 60
        }
      }
      time.innerHTML = `${Number(split[0]) < 10 ? '0' + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}`
      data.time = `${Number(split[0]) < 10 ? '0' + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}`
      const change = document.querySelector('#time')
      if (change !== null) {
        if (Number(split[0]) >= 1) {
          change.innerHTML = `${Number(split[0]) < 10 ? '0' + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}`
        } else {
          change.innerHTML = `${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}.${ms < 10 ? '0' + Number(ms) : ms}`
        }
      }
    }
  }

  const shootHandler = (team:string) => {
    setTeam(team)
    if (team === 'local') {
      if (data.period.big === 'PERIODO 1') {
        data.local.shoots.first += 1
        data.local.shootsTotal += 1
      } else if (data.period.big === 'PERIODO 2') {
        data.local.shoots.second += 1
        data.local.shootsTotal += 1
      } else if (data.period.big === 'OVERTIME') {
        data.local.shoots.third += 1
        data.local.shootsTotal += 1
      }
      setUpdate(String(Math.random()))
    } else {
      if (data.period.big === 'PERIODO 1') {
        data.visitor.shoots.first += 1
        data.visitor.shootsTotal += 1
      } else if (data.period.big === 'PERIODO 2') {
        data.visitor.shoots.second += 1
        data.visitor.shootsTotal += 1
      } else if (data.period.big === 'OVERTIME') {
        data.visitor.shoots.third += 1
        data.visitor.shootsTotal += 1
      }
      setUpdate(String(Math.random()))
    }
  }

  const posesionHandler = (team:string) => {
    setPosesion(team)
    setUpdate(String(Math.random()))
  }

  const faultHandler = (team:string) => {
    setTeam(team)
    setModalType('fault')
    openModal()
  }

  const openModal = () => {
    setField1('')
    setField2('')
    setTimeRunning(false)
    setView(true)
  }

  const goalHandler = (team:string) => {
    setModalType('goal')
    setTeam(team)
    openModal()
  }

  useEffect(() => {
    const id = setInterval(() => {
      timer()
    }, 10)
    const id2 = setInterval(() => {
      exportData()
    }, 1000)
    return () => {
      clearInterval(id)
      clearInterval(id2)
    }
  }, [running, posesion])

  const saqueHandler = (team:string) => {
    if (team === 'local') {
      if (data.period.big === 'PERIODO 1') {
        data.local.saques.first += 1
        data.local.saquesTotal += 1
      } else if (data.period.big === 'PERIODO 2') {
        data.local.saques.second += 1
        data.local.saquesTotal += 1
      } else if (data.period.big === 'OVERTIME') {
        data.local.saques.third += 1
        data.local.saquesTotal += 1
      }
      setUpdate(String(Math.random()))
    } else {
      if (data.period.big === 'PERIODO 1') {
        data.visitor.saques.first += 1
        data.visitor.saquesTotal += 1
      } else if (data.period.big === 'PERIODO 2') {
        data.visitor.saques.second += 1
        data.visitor.saquesTotal += 1
      } else if (data.period.big === 'OVERTIME') {
        data.visitor.saques.third += 1
        data.visitor.saquesTotal += 1
      }
      setUpdate(String(Math.random()))
    }
  }

  const handleSave = () => {
    if (modalType === 'clock') {
      const time = document.querySelector('#realtime')
      const change = document.querySelector('#time')
      if (time === null || time === undefined || change === null) return
      time.textContent = field1
      change.innerHTML = field1
    } else if (modalType === 'period') {
      if (field1 === 'PERIODO 1' || field1 === 'PERIODO 2') {
        const time = document.querySelector('#realtime')
        const change = document.querySelector('#time')
        if (time === null || time === undefined || change === null) return
        time.textContent = '25:00'
        change.innerHTML = '25:00'
      } else if (field1 === 'OVERTIME') {
        const time = document.querySelector('#realtime')
        const change = document.querySelector('#time')
        if (time === null || time === undefined || change === null) return
        time.textContent = '05:00'
        change.innerHTML = '05:00'
      }
      data.period.big = field1
      data.period.small = perSmall[periods.indexOf(field1)]
    } else if (modalType === 'goal') {
      data.events.push({
        type: 'goal',
        team,
        goal: field1,
        assist: field2,
        time: data.time,
        period: data.period.small
      })
      if (team === 'local') {
        if (data.period.big === 'PERIODO 1') {
          data.local.goals.first += 1
          data.local.shoots.first += 1
        } else if (data.period.big === 'PERIODO 2') {
          data.local.goals.second += 1
          data.local.shoots.second += 1
        } else if (data.period.big === 'OVERTIME') {
          data.local.goals.third += 1
          data.local.shoots.third += 1
        }
        data.local.goalsTotal += 1
        data.local.shootsTotal += 1
        let goal = ''
        let assist = ''
        if (field1 !== '') {
          const split = getObjects(localPlayers, 'dorsal', field1)[0].name.split(',')
          goal = `${split[1]} ${split[0].split(' ')[0]}`
          for (let i = 0; i < localPlayers.length; i++) {
            if (localPlayers[i].dorsal === field1) {
              localPlayers[i].matchStats.g += 1
            }
          }
        }
        if (field2 !== '') {
          const split = getObjects(localPlayers, 'dorsal', field2)[0].name.split(',')
          assist = `${split[1]} ${split[0].split(' ')[0]}`
          for (let i = 0; i < localPlayers.length; i++) {
            if (localPlayers[i].dorsal === field2) {
              localPlayers[i].matchStats.a += 1
            }
          }
        }
        if (data.local.fault1 !== '') data.local.fault1 = '00:00'
        data.local.string = 'G: ' + goal + (field2 !== '' ? `, A: ${assist}` : '')
      } else {
        if (data.period.big === 'PERIODO 1') {
          data.visitor.goals.first += 1
          data.visitor.shoots.first += 1
        } else if (data.period.big === 'PERIODO 2') {
          data.visitor.goals.second += 1
          data.visitor.shoots.second += 1
        } else if (data.period.big === 'OVERTIME') {
          data.visitor.goals.third += 1
          data.visitor.shoots.third += 1
        }
        data.visitor.goalsTotal += 1
        data.visitor.shootsTotal += 1
        let goal = ''
        let assist = ''
        if (field1 !== '') {
          const split = getObjects(visitorPlayers, 'dorsal', field1)[0].name.split(',')
          goal = `${split[1]} ${split[0].split(' ')[0]}`
          for (let i = 0; i < visitorPlayers.length; i++) {
            if (visitorPlayers[i].dorsal === field1) {
              visitorPlayers[i].matchStats.g += 1
            }
          }
        }
        if (field2 !== '') {
          const split = getObjects(visitorPlayers, 'dorsal', field2)[0].name.split(',')
          assist = `${split[1]} ${split[0].split(' ')[0]}`
          for (let i = 0; i < visitorPlayers.length; i++) {
            if (visitorPlayers[i].dorsal === field2) {
              visitorPlayers[i].matchStats.a += 1
            }
          }
        }
        if (data.visitor.fault1 !== '') data.visitor.fault1 = '00:00'
        data.visitor.string = 'G: ' + goal + (field2 !== '' ? `, A: ${assist}` : '')
      }
    } else if (modalType === 'fault') {
      data.events.push({
        type: 'fault',
        team,
        goal: field1,
        assist: field2,
        time: data.time,
        period: data.period.small
      })
      if (team === 'local') {
        if (data.period.big === 'PERIODO 1') {
          data.local.faults.first += 1
        } else if (data.period.big === 'PERIODO 2') {
          data.local.faults.second += 1
        } else if (data.period.big === 'OVERTIME') {
          data.local.faults.third += 1
        }
        data.local.pimTotal += 2
        if (data.local.fault1 === '') {
          data.local.fault1 = '02:00'
        } else if (data.local.fault2 === '') {
          data.local.fault2 = '02:00'
        }
        if (data.local.players >= 3) data.local.players -= 1
        if (data.local.players === 4 && data.visitor.players === 4) data.situation = 'POWERPLAY'
        else data.situation = data.local.players + ' vs ' + data.visitor.players
        for (let i = 0; i < localPlayers.length; i++) {
          if (localPlayers[i].dorsal === field1) {
            localPlayers[i].matchStats.pim += 2
          }
        }
        const split = getObjects(localPlayers, 'dorsal', field1)[0].name.split(',')
        const fault = `${split[1]} ${split[0].split(' ')[0]}`
        data.local.string = `${fault}, F: ${field2}`
      } else if (team === 'visitor') {
        if (data.period.big === 'PERIODO 1') {
          data.visitor.faults.first += 1
        } else if (data.period.big === 'PERIODO 2') {
          data.visitor.faults.second += 1
        } else if (data.period.big === 'OVERTIME') {
          data.visitor.faults.third += 1
        }
        data.visitor.pimTotal += 2
        if (data.visitor.fault1 === '') {
          data.visitor.fault1 = '02:00'
        } else if (data.visitor.fault2 === '') {
          data.visitor.fault2 = '02:00'
        }
        for (let i = 0; i < visitorPlayers.length; i++) {
          if (visitorPlayers[i].dorsal === field1) {
            visitorPlayers[i].matchStats.pim += 2
          }
        }
        if (data.visitor.players >= 3) data.visitor.players -= 1
        if (data.local.players === 4 && data.visitor.players === 4) data.situation = 'POWERPLAY'
        else data.situation = data.local.players + ' vs ' + data.visitor.players
        const split = getObjects(visitorPlayers, 'dorsal', field1)[0].name.split(',')
        const fault = `${split[1]} ${split[0].split(' ')[0]}`
        data.visitor.string = `${fault}, F: ${field2}`
      }
    }
  }

  let localPlayers = players.filter((a) => a.team.acronym === match.local.acronym)
  localPlayers = localPlayers.sort((a, b) => Number(a.dorsal) - Number(b.dorsal))
  let visitorPlayers = players.filter((a) => a.team.acronym === match.visitor.acronym)
  visitorPlayers = visitorPlayers.sort((a, b) => Number(a.dorsal) - Number(b.dorsal))
  if (data.local.lineup1 === undefined) {
    data.local.lineup1 = ''
    data.local.lineup2 = ''
    localPlayers.forEach((p, i) => {
      p.name = `${p.name.split(',')[1]} ${p.name.split(',')[0]}`.trim().toLowerCase().split(' ').map((e) => e[0].toUpperCase() + e.substr(1)).join(' ')
      if (i < 13) {
        data.local.lineup1 += `${p.dorsal}.- ${p.name}${p.position ? ` (${p.position})` : ''}\n`
      } else {
        data.local.lineup2 += `${p.dorsal}.- ${p.name}${p.position ? ` (${p.position})` : ''}\n`
      }
    })
  }
  if (data.visitor.lineup1 === undefined) {
    data.visitor.lineup1 = ''
    data.visitor.lineup2 = ''
    visitorPlayers.forEach((p, i) => {
      p.name = `${p.name.split(',')[1]} ${p.name.split(',')[0]}`.trim().toLowerCase().split(' ').map((e) => e[0].toUpperCase() + e.substr(1)).join(' ')
      console.log(p.name)
      if (i < 13) {
        data.visitor.lineup1 += `${p.dorsal}.- ${p.name}${p.position ? ` (${p.position})` : ''}`
        if (i < 12) {
          data.visitor.lineup1 += ' \n'
        }
      } else {
        data.visitor.lineup2 += `${p.dorsal}.- ${p.name}${p.position ? ` (${p.position})` : ''}\n`
      }
    })
  }

  return (
    <div className='min-h-screen h-full bg-gray-300'>
      <div id="realtime" className='hidden'>25:00</div>
      <div className='hidden'>{update}</div>
      {view && <div className='w-full h-full absolute z-10 bg-black/60 flex items-center justify-center'>
          <div className={'flex flex-col items-center justify-start bg-white rounded ' + (modalType !== 'goal' && modalType !== 'fault' ? 'w-1/3' : 'w-1/2')}>
            <div className='text-left w-full bg-[#013a54] text-white font-semibold inline-flex items-center justify-start px-2'>
              <StorageIcon />
              <span className='ml-1'>EDICION DE {modalType.toUpperCase()}...</span>
            </div>
            <div>
              {modalType === 'clock' && <div className='mt-5'>
                <input onChange={(e) => { setField1(e.target.value) }} className='bg-gray-300 p-2 rounded font-bold w-28 text-center text-2xl' defaultValue={document.querySelector('#realtime')?.textContent || ''} />
              </div>}
              {modalType === 'period' && <div className='mt-5'>
                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel >Period</InputLabel>
                    <Select
                      value={field1}
                      label="Periodo"
                      onChange={(e) => { setField1(e.target.value) }}
                    >
                      {periods.map((m, i) => (
                        <MenuItem key={'menuy' + i} value={m}>{m}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>}
              {modalType === 'goal' &&
                <div className='flex flex-col my-5'>
                  <span className='font-bold py-2'>ANOTADOR</span>
                  <div className=''>
                    {team === 'local'
                      ? localPlayers.map((player, i) => (
                      <button onClick={() => { setField1(player.dorsal) }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (field1 === player.dorsal ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
                        {player.dorsal}
                      </button>
                      ))
                      : visitorPlayers.map((player, i) => (
                        <button onClick={() => { setField1(player.dorsal) }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (field1 === player.dorsal ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
                          {player.dorsal}
                        </button>
                      ))
                      }
                  </div>
                  <span className='font-bold py-2'>ASSISTENCIA</span>
                  <div className=''>
                    {team === 'local'
                      ? localPlayers.map((player, i) => (
                        <button onClick={() => { setField2(player.dorsal) }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (field2 === player.dorsal ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
                          {player.dorsal}
                        </button>
                      ))
                      : visitorPlayers.map((player, i) => (
                        <button onClick={() => { setField2(player.dorsal) }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (field2 === player.dorsal ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
                          {player.dorsal}
                        </button>
                      ))
                      }
                  </div>
                </div>
              }{modalType === 'fault' &&
              <div className='flex flex-col my-5'>
                <span className='font-bold py-2'>JUGADOR</span>
                <div className=''>
                  {team === 'local'
                    ? localPlayers.map((player, i) => (
                    <button onClick={() => { setField1(player.dorsal) }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (field1 === player.dorsal ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
                      {player.dorsal}
                    </button>
                    ))
                    : visitorPlayers.map((player, i) => (
                      <button onClick={() => { setField1(player.dorsal) }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (field1 === player.dorsal ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
                        {player.dorsal}
                      </button>
                    ))
                    }
                </div>
                <span className='font-bold py-2'>FALTA</span>
                <div className=''>
                  { faults.map((fault, i) => (
                      <button onClick={() => { setField2(fault) }} className={'mx-1 px-2 py-0.5 rounded-lg ' + (field2 === fault ? 'bg-yellow-300' : 'bg-gray-300') } key={'pg' + i}>
                        {fault}
                      </button>
                  ))
                  }
                </div>
              </div>
            }
            </div>
            <div className='inline-flex items-center justify-between w-5/6 p-5 text-white'>
              <button onClick={() => { setView(false) }} className='mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all'>
                <CancelIcon />
                <span className='ml-1'>Cancelar</span>
              </button>
              <button onClick={() => { handleSave(); setView(false) }} className='mx-1.5 bg-blue-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-blue-700 transition-all'>
                <EditIcon />
                <span className='ml-1'>Modificar</span>
              </button>
            </div>
          </div>
        </div>}
      <div className='inline-flex flex-wrap w-full h-special-1 items-start justify-start'>
        <TeamComponent selected={selected} team='local' match={match.local} players={localPlayers} playerSelected={localSelectedPlayer} setPlayerSelected={localPlayerHandler}/>
        <div className='w-1/5 h-full flex flex-col items-start justify-start'>
          <div className='w-full h-12 inline-flex items-center justify-center  bg-black'>
            <ShootCounter shoots={data.local.shootsTotal}/>
            <Score local={data.local.goalsTotal} visitor={data.visitor.goalsTotal} />
            <ShootCounter shoots={data.visitor.shootsTotal}/>
          </div>
          <Time period={data.period.big} time={data.time} openModal={openModal} setModalType={setModalType} />
          <div className='w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center'>
            <span className='text-xl py-1'>SITUACION</span>
            <div className='w-full inline-flex items-center justify-center border-t'>
              <span className='w-1/2 text-center text-2xl'>{data.local.players}</span>
              <span>VS</span>
              <span className='w-1/2 text-center text-2xl'>{data.visitor.players}</span>
            </div>
          </div>
          <div className='w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center'>
            <span className='text-xl py-1'>SAQUES</span>
            <div className='w-full inline-flex items-center justify-center border-t'>
              <span className='w-1/2 text-center text-2xl border-r'>{data.local.saquesTotal}</span>
              <span className='w-1/2 text-center text-2xl'>{data.visitor.saquesTotal}</span>
            </div>
          </div>
          <div className='w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center'>
            <span className='text-xl py-1'>POSESION</span>
            <div className='w-full inline-flex items-center justify-center border-t'>
              <span className='w-1/2 text-center text-2xl border-r'>{data.local.posTotal}%</span>
              <span className='w-1/2 text-center text-2xl'>{data.visitor.posTotal}%</span>
            </div>
          </div>
          <div className='w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center'>
            <span className='text-xl py-1'>FALTAS</span>
            <div className='w-full inline-flex items-center justify-center border-t'>
              <div className='w-1/2 flex flex-col items-center justify-start border-r'>
                <span className='w-full border-b text-center'>{data.local.fault1}</span>
                <span>{data.local.fault2}</span>
              </div>
              <div className='w-1/2 flex flex-col items-center justify-start'>
              <span className='w-full border-b text-center'>{data.visitor.fault1}</span>
                <span>{data.visitor.fault2}</span>
              </div>
            </div>
          </div>
          <Selector selected={selected} setSelected={setSelected} />
        </div>
        <TeamComponent selected={selected} team='visitor' match={match.visitor} players={visitorPlayers} playerSelected={visitorSelectedPlayer} setPlayerSelected={visitorPlayerHandler}/>
      </div>
      <div className='h-[188px] absolute w-full bottom-0'>
        <Buttons timeHandler={setTimeRunning} timeRunning={running} goalHandler={goalHandler} shootHandler={shootHandler} saqueHandler={saqueHandler} posesion={posesionHandler} faultHandler={faultHandler}/>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let request = await fetch('https://api.cplv-tv.tk/app/players')
  const players = await request.json()
  request = await fetch('https://api.cplv-tv.tk/app/select')
  const idp = Number(await request.json())
  if (idp === 0 || players.length === 0) {
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
      match,
      players
    }
  }
}

export default Menu
