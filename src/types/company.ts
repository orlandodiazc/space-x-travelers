export interface Company {
  headquarters: Headquarters
  links: Links
  name: string
  founder: string
  founded: number
  employees: number
  vehicles: number
  launch_sites: number
  test_sites: number
  ceo: string
  cto: string
  coo: string
  cto_propulsion: string
  valuation: number
  summary: string
  id: string
}

export interface Headquarters {
  address: string
  city: string
  state: string
}

export interface Links {
  website: string
  flickr: string
  twitter: string
  elon_twitter: string
}
