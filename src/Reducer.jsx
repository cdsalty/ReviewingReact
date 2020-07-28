import React, {useReducer} from "react";

const reducer = (state, action) => {
	switch (action.type) {
	}
};

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
					dispatch("RESET_BASEBALLS");
				}}
				className='reset'
			>
				Reset
			</button>
			{/* {showEmoji && <h2>😀</h2>} */}
		</div>
	);
};

export default Reducer;
