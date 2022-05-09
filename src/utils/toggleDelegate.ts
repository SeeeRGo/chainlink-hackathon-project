// TODO write class

import { DelegationGraph, Governor } from "../types/delegationGraph";

export const toggleDelegate = (state: DelegationGraph, userId: Governor['id'], delegateId: Governor['id']): DelegationGraph => {
  if (userId === delegateId) return state;
  
  const user = state[userId]
  const delegate = state[delegateId]
  if (user && delegate) {
    const delegateExists = user.delegates.includes(delegateId)
    let newDelegates = user.delegates;
    let newFollowers = delegate.followers;

    if(!delegateExists) {
      newDelegates = [...user.delegates, delegateId]
      newFollowers = [...delegate.followers, userId]
    } else {
      newDelegates = user.delegates.filter(id => id !== delegateId)
      newFollowers = delegate.followers.filter(id => id !== userId)
    }
    const newUser = {
      ...user,
      delegates: newDelegates,
    }
    const newDelegate = {
      ...delegate,
      followers: newFollowers,
    }
    return {
      ...state,
      [userId]: newUser,
      [delegateId]: newDelegate,
    };
  }
  return state;
}

export const toggleFollower = (state: DelegationGraph, userId: Governor['id'], followerId: Governor['id']): DelegationGraph => {
  return toggleDelegate(state, followerId, userId)
}
