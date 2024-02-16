import { useState } from "react"
import styled from "styled-components"
const RollDice = ({rollDice, currentDice}) => {

    return (
        <DiceContainer>
            <div className="dice"
                onClick={rollDice}
            >
                <img src={`./images/dice_${currentDice}.png`} alt="dice" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;
    p{
        font-size: 24px;

    }
    .dice{
        cursor: pointer;
    }
   
`;