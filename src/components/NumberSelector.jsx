import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelector = ({setError ,error,selectedNumber, setSelectedNumber}) => {

  const arrNumbers = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NUmberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {
          arrNumbers.map((value, i) => (
            <Box
              isselected={
                value === selectedNumber
              }
              key={i}
              onClick={()=> numberSelectorHandler(value)}
            >{value}</Box>
          ))
        }
      </div>
      <p>Select Number</p>
    </NUmberSelectorContainer>
  )
}

export default NumberSelector


const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 34px;
  font-weight: 700;
  border-radius: 10px;
  background-color: ${({ isselected }) => (isselected ? "black" : "white")};
  color: ${({ isselected }) => (isselected ? "white" : "black")};
`

const NUmberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;


  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
    align-items: end;
    
  }
  .error{
    font-size: 17px;
    color: white;
    font-weight: 300;
    background-color: #ff1919;
    padding: 2px 20px;
    margin-bottom: 10px;
    border-radius: 115px; 
  }
`