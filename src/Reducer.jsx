import React, {useReducer} from "react";

const reducer = (state, action) => {
	// state is coming from the useReducer function, numOfBalls, showEmoji
	// the object being dispatched is the action.type and it listens for what's dispatched to update state too
	switch (action.type) {
		case "ADD_BASEBALL":
			return {numOfBalls: state.numOfBalls + 1, showEmoji: true}; // get numOfBalls from state passed in
		case "REMOVE_BASEBALL":
			return {numOfBalls: state.numOfBalls - 1};
		case "RESET_BALLS":
			return {numOfBalls: 1};
		default:
			return state;
	}
};

// I COULD MAKE A SEPARATE FILE AND COPY THE REDUCER IN A REDUCER.JS FILE and IMPORT IT INSIDE

const Reducer = () => {
	// useReducer Hook
	const [state, dispatch] = useReducer(reducer, {numOfBalls: 1, showEmoji: false});
	// numOfBalls is now a property on the state object and it must be referred to as stat.numOfBalls

	return (
		<div className='App mt-5'>
			<h1 className='title m-5'>useReducer</h1>
			<h2 className='balls'>{"⚾️".repeat(state.numOfBalls)}</h2>
			<button
				onClick={() => {
					dispatch({type: "ADD_BASEBALL"});
				}}
				className='add'
			>
				Add Baseball
			</button>
			<button
				onClick={() => {
					dispatch({type: "REMOVE_BASEBALL"});
				}}
				className='remove'
			>
				Remove Baseball
			</button>
			<button
				onClick={() => {
					dispatch({type: "RESET_BALLS"});
				}}
			>
				Reset Balls
			</button>
			{/* Can't use just showEmoji; recall that showEmoji is apart of state... state.showEmoji is required */}
			{/* {showEmoji && <h2>😀</h2>} */}
			{state.showEmoji && <h2>😀</h2>}
		</div>
	);
};

export default Reducer;

/*
1. Create Reducer function by calling useReducer()
    - takes to arguements:
        1) A function known as a reducer function, normally referred to as "reducer"
        2) An object that will represent the state. (It could be an array or primitive value as well)
            - the object will carry the same two pieces of state as useState, numOfBalls and showEmoji
              -> numOfBalls: 1, showEmoji: false
        ** so far: useReducer(reducer, {numOfBalls: 1, showEmoji: false});
2. destructure and assign state and dispatch to useReducer
  - const [state, dispatch] = useReducer... 
  
3. Bring over the {"⚾️".repeat(numOfBalls)} for the title
  - since the way it is setup, the numOfBalls is is set as a proptery on the state object;
    - it MUST BE REFERRED TO AS 'STATE.NUMOFBALLS'
4. copied over the buttons from the App component 
5. Define the reducer function that's being called at the beginning
    - const reducer = () => {}
      - the reducer function takes in 2 parameters.


6. create the reducer function at the very top, outside of the actual function:
  - the job of the reducer is to take the state that it's given, and it's dependent on one of the 
    actions that is dispatched from one of the function calls from the onClick handlers. It will
    get a NEW STATE returned from the 'reducer'
    
  - it takes two parameters, the state and the action
    - inside the function, we write a switch statement;
      - this switch statement will listen for actions that are dispatched when any button is 
        clicked on; specifically, the 'action.type'
            - action.type: comes from what is passed into dispatched; an object with a type property
          --> EXAMPLE: dispatch({type: 'ADD_BASEBALL'})>Add Baseball<button>
7. After creating the boilerplate:
const reducer = (state, action) => {
	switch (action.type) {
	}
};
  ----> I then went and created each dispatch call; example: dispatch({type:"ADD_BASEBALL"})
  - once each dispatch is created, I am ready to implement my actions. 
*/
