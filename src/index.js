import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


//import pages needed to route to here
import Login from './login/login'
import UserProfile from './profile/userProfile'
import OnBoardingForm from './quiz/onBoard'

//reroutes to correct page

ReactDOM.render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={Login}/>
			<Route path="/Login" component={Login}/>
			<Route path="/Profile" component={UserProfile}/>
			<Route path="/Quiz"component={OnBoardingForm}/>
		</Router>
	),
	document.getElementById('root')
);
