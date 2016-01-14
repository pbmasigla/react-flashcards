import React, { PropTypes } from 'react';
import { Router, Route } from 'react-router';
import { Test } from "./components/containers";
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const finalCreateStore = applyMiddleware(thunk)(createStore);
const store = finalCreateStore(reducer);

export default class Root extends React.Component {
	render() {
		const { history } = this.props;
		return (
			<Provider store={ store }>
				<Router history={ history }>
					<Route path="/" component={ Test } />
				</Router>
			</Provider>
		);
	}
}

Root.propTypes = {
	history: PropTypes.object.isRequired
};
