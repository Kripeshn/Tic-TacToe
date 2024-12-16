import { useState } from 'react';
import './index.css';

export default function App() {




  return (
    <div className="app">
    
   <Header />
   <Box />
   <Footer />
  
 
   

    </ div>
  );
}

function Header() {
  return (
    <div className="header">
    <h1>Tic-Tac-Toe</h1>
    </div>
  );
}

function Box() { 
  let sq = Array(9).fill(null);
   const [squares, setSquares] = useState(sq);
  const [isX, setIsX] = useState(true);
  let defaultPlayer = "X";
  isX ? defaultPlayer = "X" : defaultPlayer = "O";

  function handlePlayer(i){

    if (calculateWinners(squares) || squares[i]) {
      
      return
    }

   isX ?  squares[i] = 'X' : squares[i] =  'O';
  
     setSquares(squares);
      setIsX(!isX)

     
  }
  

  function calculateWinners(squares){
    const winningPatterns = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i=0; i<winningPatterns.length; i++){
      const [a,b,c] = winningPatterns[i];

       if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        // const winner = squares[a];
          return squares[a];
       }
    }
    return null;

  }
  function handleReset() {
    setSquares(Array(9).fill(null));
    setIsX(true);

    
  }
 
  const winner = calculateWinners(squares);
  const draw = squares.every(cell => cell !== null);
  console.log(draw);
  console.log(squares);

  // const newBoard = [...squares];
   

  return (
    <>
    <div className='board'>
      
      < Win winner={winner} player= {defaultPlayer} draw={draw}/>

    <div className='box'>
    <Square value={squares[0]} onclick = {() => handlePlayer(0)} />
    <Square value={squares[1]} onclick = {() => handlePlayer(1)}/>
    <Square value={squares[2]} onclick = {() => handlePlayer(2)}/>
    </div>
    <div className='box'>
    <Square value={squares[3]} onclick = {() => handlePlayer(3)}/>
    <Square value={squares[4]} onclick = {() => handlePlayer(4)}/>
    <Square value={squares[5]} onclick = {() => handlePlayer(5)}/>
    </div>
    <div className='box'>
    <Square value={squares[6]} onclick = {() => handlePlayer(6)}/>
    <Square value={squares[7]} onclick = {() => handlePlayer(7)}/>
    <Square value={squares[8]} onclick = {() => handlePlayer(8)}/>
    </div>
    {/* <div className='turn'><h1>{` turn!`}</h1></div> */}
    
    <Reset onClick={handleReset} />

    </div>
    
    </>
  );
 
}

function Square({value, onclick}){
  
  return(
    <div className='square' onClick= {onclick} >
      <p>{value}</p>
      
          </div>
  );
}

function Win({ winner, player, draw }) {
  return (
    <div className='turn'>
      {winner ? ( // If there is a winner
        <h1 className="winner">{winner} wins!</h1>
      ) :( draw ? (
        <h1 className='winner'>Its a draw!</h1>
      ) :  (
        <h1 className='winner'>{player}'s turn!</h1>
      ))}
    </div>
  );
}

function Reset({onClick}) {
  return (
  <button className='button' onClick={onClick} >
    Play Again
  </button>
  );
}

function Footer(){
  return(

    <p className='footer'>&copy;Kripesh Neupane-2024 . All rights reserved.</p>
  );

}
