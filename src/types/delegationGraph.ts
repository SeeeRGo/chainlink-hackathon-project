export interface Governor {
  id: string,
  name: string,
  delegates: Array<Governor['id']>,
  followers: Array<Governor['id']>,
}

export type DelegationGraph = Record<Governor["id"], Governor>;
