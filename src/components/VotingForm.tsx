import React from 'react';

interface Props {
  onClick: () => void;
}
export const VotingForm = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>Casting Vote</button>
  )
}