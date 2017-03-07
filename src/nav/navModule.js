import React from 'react';
import { Link } from 'react-router';
import '../css/materialize.css'
import '../css/style.css'

//add links for nav here
var Nav = React.createClass({
	render: function() {
		return (

			<div className="container">
			    <div className="col s12">
			        <Link to="Login">Login</Link>
							<Link to="Profile">Profile</Link>
			    </div>
			</div>

    );
	}
});

export default Nav;
