import React from 'react';
import ReactDOM from 'react-dom';
import '../css/materialize.css'
import '../css/style.css'
import OnBoardingForm from '../quiz/onBoard'


class LoginForm extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      name:'',
      score:''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

    };

handleNameChange(e){
  this.setState({name: e.target.value});
}


handleSubmit (e){
	e.preventDefault();

  var profile = {
    name: this.state.name,
     score: 0
   };

  ReactDOM.render(<OnBoardingForm name={profile.name} score={profile.score}/>, document.getElementById("root"));

}


  render() {
    return (
      <div className="container-fluid" id="login">
          <div className="row">
            <div className="col s6 offset-s3 ">
              <h1 className="login-title text-center">Good Karma</h1>
            </div>
          </div>
          <div className="row">
              <div className="col s4 offset-s4 loginForm">
                  <form onSubmit={this.handleSubmit}>
                      <div className="row">
                          <div className="col s12">
                              <input type="text" id="username" placeholder='User Name' value={this.state.name} onChange={this.handleNameChange} />
                          </div>
                      </div>
                      <div className="row">
                          <div className="col s12">
                              <button className="submitBtn btn "type="submit" name="action" >Submit</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    );
  }

}

export default LoginForm;
