import React from 'react';
import UserProfilePage from "./userProfile"
import App from '../App';
//this is only for outputting into App

class UserProfile extends Component{
  render() {
    return (
      <App>
        <UserProfilePage name={this.props.name} score={this.props.score}/>
      </App>
    );
  }
}
export default UserProfile;
