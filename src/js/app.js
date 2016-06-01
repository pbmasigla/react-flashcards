import ReactDOM from "react-dom";
import React from 'react';
import ReactFlashcards from "./components/react-flashcards";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(thunk)(createStore);
const store = finalCreateStore(reducer);

const Root = () => {
	return (
		<Provider store={ store }>
			<ReactFlashcards />
		</Provider>
	);
};

ReactDOM.render(
	<Root />, document.getElementById("app")
);
