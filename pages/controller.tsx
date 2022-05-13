import { Match, Player } from 'constants/interfaces'
import type { GetServerSideProps, NextPage } from 'next'
import { TeamComponent, ShootCounter, Score, Time, Selector, Buttons } from 'components/Controller/Main'
import { useEffect, useState } from 'react'

import { getObjects } from 'functions/Reusable'
import { Data } from 'components/Controller/Data'
import { Fault } from 'components/Controller/Fault'
import { Menu } from 'components/Controller/Menu'
import { checkFaults, lineup } from 'functions/Controller'

const periods = ['PERIODO 1', 'DESCANSO', 'PERIODO 2', 'DESCANSO', 'OVERTIME', 'PENALTIES']
const perSmall = ['1st', 'DES', '2nd', 'DES', 'OT', 'PEN']

interface ControllerProps{
  match: Match,
  playerList: Player[]
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
    penalties: {
      first: '',
      second: '',
      third: '',
      total: 0
    },
    lineup: undefined,
    faults: {
      first: '',
      second: ''
    },
    string: '',
    playerSelected: '',
    players: 4,
    goal: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    },
    shoot: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    },
    fault: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    },
    saque: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    },
    pos: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    }
  },
  visitor: {
    lineup: undefined,
    penalties: {
      first: '',
      second: '',
      third: '',
      total: 0
    },
    faults: {
      first: '',
      second: ''
    },
    string: '',
    playerSelected: '',
    players: 4,
    goal: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    },
    shoot: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    },
    fault: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    },
    saque: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    },
    pos: {
      first: 0,
      second: 0,
      third: 0,
      total: 0
    }
  }
}

const Controller: NextPage<ControllerProps> = ({ match, playerList }) => {
  const [selected, setSelected] = useState('season')
  const [view, setView] = useState(false)
  const [modalType, setModalType] = useState('')
  const [playerSelected, setPlayerSeleted] = useState<{local:Player | string, visitor:Player | string}>({ local: '', visitor: '' })
  const [running, setTimeRunning] = useState(false)
  const [changed, setChanged] = useState({
    first: '',
    second: ''
  })
  const [team, setTeam] = useState('')
  const [posesion, setPosesion] = useState('')
  const [update, setUpdate] = useState('')
  let ms = 99

  useEffect(() => {
    const id = setInterval(() => {
      timer()
    }, 10)
    const id2 = setInterval(() => {
      exportData()
    }, 100)
    return () => {
      clearInterval(id)
      clearInterval(id2)
    }
  }, [running, posesion])

  const exportData = async () => {
    let req = await fetch('https://api.cplv-tv.tk/app/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const mixed:any[] = []
    for (let i = 0; i < players.local.length; i++) {
      mixed.push(players.local[i])
    }
    for (let i = 0; i < players.visitor.length; i++) {
      mixed.push(players.visitor[i])
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
        const localFaults = checkFaults(data.local.faults, data.local.players)
        data.local.faults = localFaults.faults
        data.local.players = localFaults.players
        const visitorFaults = checkFaults(data.visitor.faults, data.visitor.players)
        data.visitor.faults = visitorFaults.faults
        data.visitor.players = visitorFaults.players
        if (posesion !== '') {
          const passed = (25 * 60) - (Number(split[0]) * 60 + Number(split[1])) + 1
          console.log(passed, 'passed')
          if (data.period.big === 'PERIODO 1') {
            if (posesion === 'local') {
              data.local.pos.first += 1
            } else {
              data.visitor.pos.first += 1
            }
            console.log(data.local.pos.first, 'localPos')
            data.visitor.pos.total = Number(((data.visitor.pos.first * 100) / passed).toFixed(2))
            data.local.pos.total = Number(((data.local.pos.first * 100) / passed).toFixed(2))
          } else if (data.period.big === 'PERIODO 2') {
            if (posesion === 'local') {
              data.local.pos.second += 1
            } else {
              data.visitor.pos.second += 1
            }
            data.visitor.pos.total = Number((data.visitor.pos.second * 100 / passed).toFixed(2))
            data.local.pos.total = Number((data.local.pos.second * 100 / passed).toFixed(2))
          } else if (data.period.big === 'OVERTIME') {
            if (posesion === 'local') {
              data.local.pos.third += 1
            } else {
              data.visitor.pos.third += 1
            }
            data.visitor.pos.total = Number((data.visitor.pos.third * 100 / passed).toFixed(2))
            data.local.pos.total = Number((data.local.pos.third * 100 / passed).toFixed(2))
          }
        }
        setUpdate(String(Math.random()))
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
            ms = 99
          }
        } else {
          split[1] = String(Number(split[1]) - 1)
          ms = 99
        }
      }
      time.innerHTML = `${Number(split[0]) < 10 ? '0' + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}`
      const change = document.querySelector('#time')
      if (change !== null) {
        if (Number(split[0]) >= 1) {
          change.innerHTML = `${Number(split[0]) < 10 ? '0' + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}`
          data.time = `${Number(split[0]) < 10 ? '0' + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}`
        } else {
          change.innerHTML = `${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}.${ms < 10 ? '0' + Number(ms) : ms}`
          data.time = `${Number(split[1]) < 10 ? '0' + Number(split[1]) : Number(split[1])}.${ms < 10 ? '0' + Number(ms) : ms}`
        }
      }
    }
  }

  const openModal = () => {
    setChanged({ first: '', second: '' })
    setTimeRunning(false)
    setView(true)
  }

  const playerHandler = (row: Player, team:string) => {
    if (team === 'local') {
      setPlayerSeleted(data => ({
        ...data,
        local: row
      }))
    } else if (team === 'visitor') {
      setPlayerSeleted(data => ({
        ...data,
        visitor: row
      }))
    }
    data[team].playerSelected = row
  }

  const mainHandler = (team:string, type:string) => {
    if (type === 'goal' || type === 'fault') {
      setTeam(team)
      setModalType(type)
      openModal()
    } else {
      if (data.period.big === 'PERIODO 1') {
        data[team][type].first += 1
        data[team][type].total += 1
      } else if (data.period.big === 'PERIODO 2') {
        data[team][type].second += 1
        data[team][type].total += 1
      } else if (data.period.big === 'OVERTIME') {
        data[team][type].third += 1
        data[team][type].total += 1
      }
    }
    setUpdate(String(Math.random()))
  }

  const saveHandler = () => {
    if (modalType === 'clock') {
      const time = document.querySelector('#realtime')
      const change = document.querySelector('#time')
      setView(false)
      if (time === null || time === undefined || change === null || changed.first === '') return
      time.textContent = changed.first
      change.innerHTML = changed.first
    } else if (modalType === 'period') {
      if (changed.first === 'PERIODO 1' || changed.first === 'PERIODO 2') {
        const time = document.querySelector('#realtime')
        const change = document.querySelector('#time')
        if (time === null || time === undefined || change === null) return
        time.textContent = '25:00'
        change.innerHTML = '25:00'
        setView(false)
      } else if (changed.first === 'OVERTIME') {
        const time = document.querySelector('#realtime')
        const change = document.querySelector('#time')
        if (time === null || time === undefined || change === null) return
        time.textContent = '05:00'
        change.innerHTML = '05:00'
        setView(false)
      } else if (changed.first === 'PENALTIES') {
        setModalType('penalties')
        openModal()
      }
      data.period.big = changed.first
      data.period.small = perSmall[periods.indexOf(changed.first)]
    } else if (modalType === 'goal') {
      data.events.push({
        type: 'goal',
        team,
        goal: changed.first,
        assist: changed.second,
        time: data.time,
        period: data.period.small
      })
      if (data.period.big === 'PERIODO 1') {
        data[team].goal.first += 1
        data[team].shoot.first += 1
      } else if (data.period.big === 'PERIODO 2') {
        data[team].goal.second += 1
        data[team].shoot.second += 1
      } else if (data.period.big === 'OVERTIME') {
        data[team].goal.third += 1
        data[team].shoot.third += 1
      }
      setView(false)
      data[team].goal.total += 1
      data[team].shoot.total += 1
      let goal = ''
      let assist = ''
      if (changed.first !== '') {
        const split = getObjects(players[team], 'dorsal', changed.first)[0].name.split(',')
        goal = `${split[1].trim()} ${(split[0].split(' ')[0]).length <= 2 ? `${split[0].split(' ')[0]} ${split[0].split(' ')[1].trim()}` : split[0].split(' ')[0].trim()}`
        for (let i = 0; i < players[team].length; i++) {
          if (players[team][i].dorsal === changed.first) {
            players[team][i].matchStats.g += 1
          }
        }
      }
      if (changed.second !== '') {
        const split = getObjects(players[team], 'dorsal', changed.second)[0].name.split(',')
        assist = `${split[1].trim()} ${(split[0].split(' ')[0]).length <= 2 ? `${split[0].trim()}` : split[0].split(' ')[0].trim()}`
        for (let i = 0; i < players[team].length; i++) {
          if (players[team][i].dorsal === changed.second) {
            players[team][i].matchStats.a += 1
          }
        }
      }
      if (data[team].faults.first !== '') data[team].faults.second = '00:00'
      data[team].string = 'G: ' + goal + (changed.second !== '' ? `, A: ${assist}` : '')
    } else if (modalType === 'fault') {
      data.events.push({
        type: 'fault',
        team,
        goal: changed.first,
        assist: changed.second,
        time: data.time,
        period: data.period.small
      })
      setView(false)
      if (data.period.big === 'PERIODO 1') {
        data[team].fault.first += 1
      } else if (data.period.big === 'PERIODO 2') {
        data[team].fault.second += 1
      } else if (data.period.big === 'OVERTIME') {
        data[team].fault.third += 1
      }
      data[team].fault.total += 2
      if (data.local.faults.first === '') {
        data[team].faults.first = '02:00'
      } else if (data.local.faults.second === '') {
        data[team].faults.second = '02:00'
      }
      if (data[team].players >= 3) data[team].players -= 1
      if (data[team].players === 3 && data[team === 'local' ? 'visitor' : 'local'].players === 4) data.situation = 'POWERPLAY'
      else data.situation = data[team === 'local' ? 'visitor' : 'local'].players + ' vs ' + data[team].players
      for (let i = 0; i < players[team].length; i++) {
        if (players[team][i].dorsal === changed.first) {
          players[team][i].matchStats.pim += 2
        }
      }
      const split = getObjects(players[team], 'dorsal', changed.first)[0].name.split(',')
      const fault = `${split[1].trim()} ${(split[0].split(' ')[0]).length <= 2 ? `${split[0].split(' ')[0]} ${split[0].split(' ')[1].trim()}` : split[0].split(' ')[0].trim()}`
      data[team].string = `${fault}, F: ${changed.second}`
    }
  }

  const players:any = {
    local: {},
    visitor: {}
  }

  players.local = playerList.filter((a) => a.team.acronym === match.local.acronym)
  players.local = players.local.sort((a:Player, b:Player) => Number(a.dorsal) - Number(b.dorsal))
  players.visitor = playerList.filter((a) => a.team.acronym === match.visitor.acronym)
  players.visitor = players.visitor.sort((a:Player, b:Player) => Number(a.dorsal) - Number(b.dorsal))
  if (data.local.lineup === undefined && data.visitor.lienup === undefined) {
    data.local.lineup = lineup(players.local)
    data.visitor.lineup = lineup(players.visitor)
  }

  return (
    <div className='min-h-screen h-full bg-gray-300'>
      <div id="realtime" className='hidden'>25:00</div>
      <div className='hidden'>{update}</div>
      {view &&
        <Menu setView={setView} handleSave={saveHandler} modalType={modalType} changed={changed} players={players[team]} data={data} />
      }
      <div className='inline-flex flex-wrap w-full h-special-1 items-start justify-start'>
      <TeamComponent selected={selected} team='local' match={match.local} players={players.local} playerSelected={playerSelected.local} setPlayerSelected={playerHandler}/>
        <div className='w-1/5 h-full flex flex-col items-start justify-start'>
          <div className='w-full h-12 inline-flex items-center justify-center  bg-black'>
            <ShootCounter shoots={data.local.shoot.total}/>
            <Score local={data.local.goal.total} visitor={data.visitor.goal.total} />
            <ShootCounter shoots={data.visitor.shoot.total}/>
          </div>
          <Time period={data.period.big} time={data.time} openModal={openModal} setModalType={setModalType} />
          <Data name='SITUACION' local={data.local.players} visitor={data.visitor.players} />
          <Data name='SAQUES' local={data.local.saque.total} visitor={data.visitor.saque.total} />
          <Data name='POSESION' local={data.local.pos.total + '%'} visitor={data.visitor.pos.total + '%'} />
          <Fault local={data.local.faults} visitor={data.visitor.faults} />
          <Selector selected={selected} setSelected={setSelected} />
        </div>
        <TeamComponent selected={selected} team='visitor' match={match.visitor} players={players.visitor} playerSelected={playerSelected.visitor} setPlayerSelected={playerHandler}/>
      </div>
      <div className='h-[188px] absolute w-full bottom-0'>
        <Buttons timeHandler={setTimeRunning} timeRunning={running} mainHandler={mainHandler} posesion={setPosesion} />
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
      playerList: players
    }
  }
}

export default Controller
