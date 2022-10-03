import React,{useState} from 'react';
import './TicTacToe.css';

function TicTacToe(){
  
  const [turn,setTurn] = useState("x");
  const [cells,setCells] = useState(Array(9).fill(""));
  const [winner,setWinner] = useState(null);
  console.log(cells)
  const checkForWinners = (squares) =>{
    let combos = {
      across : [
        [0,1,2],
        [3,4,5],
        [6,7,8]
      ],
      down : [
        [0,3,6],
        [1,4,7],
        [2,5,8]
      ],
      diagonal : [
        [0,4,8],
        [2,4,6]
      ]
    };
    for(let combo in combos){
      combos[combo].forEach((pattern) =>{
        if(
          squares[pattern[0]] === "" ||
          squares[pattern[0]] === "" ||
          squares[pattern[0]] === ""  
        ){
          // Do Nothing
        }
        else if(
          squares[pattern[0]] === squares[pattern[1]] && 
          squares[pattern[1]] === squares[pattern[2]]
        )
        {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) =>{
    if(winner){
      return;
    }
    if(cells[num] !== ""){
      alert('already clicked')
      return;
    }
    let squares = [...cells]
    if(turn === 'x'){
      squares[num] = 'x';
      setTurn('o');
    }
    else{
      squares[num] = 'o';
      setTurn('x');
    }
    checkForWinners(squares);
    setCells(squares);
  };
  const handleRestart = () => {
    setWinner(null)
    setCells(Array(9).fill(""))

  }
  const Cell = ({num}) =>{
    return <td onClick={()=>handleClick(num)}>{cells[num]}</td>
  };

  return(
    <div>
      <table>
      <h1>Turn : {turn}</h1>
        <tbody>
          <tr>
         <Cell num ={0}/>
         <Cell num ={1}/>
         <Cell num ={2}/>
          </tr>
          <tr>
         <Cell num ={3}/>
         <Cell num ={4}/>
         <Cell num ={5}/>
          </tr>
          <tr>
         <Cell num ={6}/>
         <Cell num ={7}/>
         <Cell num ={8}/>
          </tr>
        </tbody>
        {winner && (
        <>
        <h4>{winner} is the winner</h4>
        <button onClick={() => handleRestart()}>Play Again</button>
        </>
      )} 
      </table>
       
    </div>
  )
}

export default TicTacToe;