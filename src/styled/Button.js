import styled from "styled-components"

export const Button = styled.button`
 background: #000000;
 border-radius: 5px;
 color: white;
 min-width: 202px;
 padding: 10px;
 border: none;
 font-size: 16px;
 cursor: pointer;

 &:hover{
  background-color: #670fff;
  transition: 0.3s background ease-in;
 }
`

export const OutlineButton = styled(Button)`  
background-color: white;
border: 2px solid black;
color: black;
&:hover{
  background-color: black;
  border:  2px solid transparent;
  color: white;
 }
`;
