export interface Governor {
  id: number,
  delegates: Array<Governor['id']>,
  followers: Array<Governor['id']>,
}

export type DelegationGraph = Record<Governor["id"], Governor>;
