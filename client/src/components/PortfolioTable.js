import React from 'react';
import PortfolioTableRow from './PortfolioTableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PortfolioTable = ({ sellShares, deleteShare, editShare, user }) => {
  //NOT NEEDED
  // const totalCalc = values.reduce(
  //   (runningTotal, shareValues) =>
  //     (runningTotal += shareValues.currentMarketValue * shareValues.numshares),
  //   0
  // );

  const row = user.portfolio.map((stock, i) => {
    return (
      <PortfolioTableRow
        editShare={editShare}
        deleteShare={deleteShare}
        sellShares={sellShares}
        key={i}
        stock={stock}
      />
    );
  });

  return (
    <>


        <h2>Current Portfolio</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Share</TableCell>
            <TableCell align="right">Shares Held</TableCell>
            <TableCell align="right">Average Price Paid (per share)</TableCell>
            <TableCell align="right">Current Value (per share)</TableCell>
            <TableCell align="right">%</TableCell>
            <TableCell align="right">View</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {row}
        <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>Total:</TableCell>
                    <TableCell>£{user.portfolioTotals.totalPortfolioValue}</TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    </>
  );
};

export default PortfolioTable;
