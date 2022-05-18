import { Box } from '@material-ui/core';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const pages = [
  ["Voting Booth", "/vote"],
  ["Delegation Dashboard", "/delegate"],
  ["Voting results", "/results"],
];
export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
      {pages.map((page, i) => (
        <Button
          key={page[0] ?? `${i}`}
          onClick={() => {
            if(page[1]) {
              navigate(page[1]);
            }
          }}
          sx={{ my: 2, display: "block" }}
        >
          {page[0]}
        </Button>
      ))}
    </Box>
  );
};