import React, {useState} from "react";
import Reducer from "./Reducer";
import "./App.css";

function App() {
	const [numOfBalls, setNumOfBalls] = useState(1);
	const [showEmoji, toggleShowEmoji] = useState(false);

	/*
  useState
	return (
		<div className='App mt-5'>
			<h1 className='title m-5'>useState and useReducer Logic</h1>
			<h3 className='balls'>{"⚾️".repeat(numOfBalls)}</h3>
			<button
				onClick={() => {
					toggleShowEmoji(true);
					setNumOfBalls(numOfBalls + 1);
				}}
				className='add'
			>
				Add Baseball
			</button>
			<button
				onClick={() => {
					toggleShowEmoji(false); // will remove happy face
					setNumOfBalls(numOfBalls - 1);
				}}
				className='remove'
			>
				Remove Baseball
			</button>
			<button
				onClick={() => {
					toggleShowEmoji(false);
					setNumOfBalls(1);
				}}
				className='reset'
			>
				Reset
			</button>
			{showEmoji && <h2>😀</h2>}
		</div>
  );
  */

	// useReducer
	return (
		<div className='App mt-5'>
			<Reducer />
		</div>
	);
}

export default App;

/*
Create buttons and when one is clicked, it will add additional balls
and if another button is clicked, it will remove a ball and then a third
to reset the ball count to one..

<h3>{"⚾️".repeat(2)}</h3> would display 2 baseballs

________________________________________________________________________________________________________

Each time you add a baseball, show happiness emoji;
{showEmoji && <h2>😀</h2>} ...showEmoji will start off with a false value; if it is true, it will be displayed
*/
