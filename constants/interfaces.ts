export interface Team{
  id?:number
  acronym: string,
  logo: string,
  name?: string
}

export interface Match {
  idp: number,
  local: Team,
  visitor: Team,
  league: string,
  period: string,
  sede: string,
  date: string,
  score: {
    local: number | null,
    visitor: number | null,
  }
}

export interface Player {
  name:string,
  id: number,
  img: string,
  position?: string,
  dorsal: string,
  team: Team,
  stats:{
    pj: number,
    g: number,
    a: number,
    pim: number
  },
  matchStats: {
    g: number,
    a: number,
    pim: number,
  }
}
