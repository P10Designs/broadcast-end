import { Player } from 'constants/interfaces'
export const checkFaults = (faults:any, players:any) => {
  if (faults.first !== '' || faults.second !== '') {
    if (faults.first !== '') {
      const first = faults.first.split(':')
      let update = true
      if (Number(first[1]) === 0) {
        if (Number(first[0]) === 0) {
          if (faults.second !== '') {
            update = false
            faults.first = faults.second
            players += 1
            faults.second = ''
          } else {
            update = false
            faults.first = ''
          }
        } else {
          first[0] = String(Number(first[0]) - 1)
          first[1] = '59'
        }
      } else {
        first[1] = String(Number(first[1]) - 1)
      }
      if (update) faults.first = `${Number(first[0]) < 10 ? '0' + Number(first[0]) : Number(first[0])}:${Number(first[1]) < 10 ? '0' + Number(first[1]) : Number(first[1])}`
    }
    if (faults.second !== '') {
      const second = faults.second.split(':')
      if (Number(second[1]) === 0) {
        if (Number(second[0]) === 0) {
          faults.second = ''
        } else {
          second[0] = String(Number(second[0]) - 1)
          second[1] = '59'
        }
      } else {
        second[1] = String(Number(second[1]) - 1)
      }
      faults.second = `${Number(second[0]) < 10 ? '0' + Number(second[0]) : Number(second[0])}:${Number(second[1]) < 10 ? '0' + Number(second[1]) : Number(second[1])}`
    }
  }
  return { faults, players }
}

export const lineup = (players:any) => {
  const lineups = {
    first: '',
    second: ''
  }
  players.forEach((p:Player, i:number) => {
    const name = `${p.name.split(',')[1]} ${p.name.split(',')[0]}`.trim().toLowerCase().split(' ').map((e) => e[0].toUpperCase() + e.substr(1)).join(' ')
    if (i < 12) {
      lineups.first += `${p.dorsal}.- ${name}${p.position ? ` (${p.position})` : ''}\n`
    } else {
      lineups.second += `${p.dorsal}.- ${name}${p.position ? ` (${p.position})` : ''}\n`
    }
  })
  return lineups
}
