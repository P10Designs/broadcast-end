import { Player } from 'constants/interfaces'

export async function getAllPlayers (set:(x:Player[]) => void) {
  const request = await fetch('https://api.cplv-tv.tk/players')
  const allPlayers = await request.json()
  const returnPlayers = []
  const names:any = []
  for (let i = 0; i < allPlayers.length; i++) {
    if (!names.includes(allPlayers[i].name)) {
      returnPlayers.push(allPlayers[i])
      names.push(allPlayers[i].name)
    }
  }
  set(returnPlayers)
}

export const update = async (toEdit:Player[]) => {
  await fetch('https://api.cplv-tv.tk/app/players', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(toEdit)
  })
}

export const setPlayerStats = (players: Player[], setPlayersArray: (x:Player[]) => void) => {
  players = players.map((p:Player) => ({
    ...p,
    matchStats: { g: 0, a: 0, pim: 0 }
  }))
  setPlayersArray(players)
  update(players)
}
