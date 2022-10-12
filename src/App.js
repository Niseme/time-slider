import React, {useState} from "react";
import ReactDOM from "react-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import {Paper,TableContainer,Table,TableHead,TableRow,TableBody,styled,TableCell,tableCellClasses} from '@mui/material';

const marks = [
  {
    value: 0*4.16,
    label: '0',
  },
  {
    value: 6*4.16,
    label: '6',
  },
  {
    value: 12*4.16,
    label: '12',
  },
  {
    value: 18*4.16,
    label: '18',
  },
  {
    value: 24*4.16,
    label: '24',
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function App() {
  const [value, setValue] = useState([30,40]);
  const [timeline, setTimeline] = useState([]);
  
  const updateRange = (e, data) => {
    setValue([...data])
  }

  const handleClick = () => {
    const a = prompt("Tell us event!")
    if(a.length===0){
      return;
    }
    setTimeline([...timeline,{event:a,startingTime:Math.trunc(value[0]/4.16),endingTime:Math.trunc(value[1]/4.16)}])
  }
  console.log(timeline)


  return (
    <div className="App">
      <h1>React Time Line</h1>
      <Stack direction="row" spacing={4} sx={{width: '500px', margin:'30px'}}>
      <Slider
      marks={marks}
      value = {value}
      valueLabelDisplay="on"
      onChange={updateRange}
      />
      <Button variant="contained" onClick={handleClick} >+</Button>
      </Stack>
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Event</StyledTableCell>
            <StyledTableCell align="center">startingTime</StyledTableCell>
            <StyledTableCell align="center">endingTime</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeline.map((row) => (
            <StyledTableRow>
              <StyledTableCell align="center">{row.event}</StyledTableCell>
              <StyledTableCell align="center">{row.startingTime}</StyledTableCell>
              <StyledTableCell align="center">{row.endingTime}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </div>
  );
}

export default App;
