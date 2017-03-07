import React from 'react';
import '../css/style.css'


class UserProfilePage extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      name : this.props.profile.name,
      score : this.props.profile.score
    };
    this.karmaRing=this.karmaRing.bind(this);
    this.handleClick=this.handleClick.bind(this);
};

componentDidMount(){
  this.karmaRing();
}

handleClick(e){
  e.preventDefault();
  var Bscore = this.state.score;
  var curScore = parseInt(e.target.value) + parseInt(Bscore);
  this.setState({score: curScore });
  this.karmaRing();
}

karmaRing(){

  var element = document.getElementById('ball');
  var score = document.getElementById('proScore');

  if(this.state.score < -100 ){
    element.style.background = '#000';
    score.style.color = '#000';
  }
  if(this.state.score < 0 ){
    element.style.background = '#FF0400';
    score.style.color = '#FF0400';
  }
  if(this.state.score >= 0 && this.state.score < 10 ){
    element.style.background = '#FF0000';
    score.style.color = '#FF0000';
  }
  if(this.state.score >= 10 && this.state.score < 20 ){
    element.style.background = '#FF6400';
    score.style.color = '#FF6400';
  }
  if(this.state.score >= 20 && this.state.score < 30 ){
    element.style.background = '#FFDC00';
    score.style.color = '#FFDC00';
  }
  if(this.state.score >= 30 && this.state.score < 40 ){
    element.style.background = '#00FFA8';
    score.style.color = '#00FFA8';
  }
  if(this.state.score >= 50 && this.state.score < 60 ){
    element.style.background = '#00FFF5';
    score.style.color = '#00FFF5';
  }
  if(this.state.score >= 50 && this.state.score < 60 ){
    element.style.background = '#AD48FF';
    score.style.color = '#AD48FF';
  }
  if(this.state.score >= 60 && this.state.score < 70 ){
    element.style.background = '#FF45F6';
    score.style.color = '#FF45F6';
  }
  if(this.state.score >= 70 && this.state.score < 80 ){
    element.style.background = '#45FFA9';
    score.style.color = '#45FFA9';
  }
  if(this.state.score >= 80 ){
    element.style.background = '#79FF45';
    score.style.color = '#79FF45';
  }
}


  render() {
    return (
      <div>
        <div className="container-fluid user-profile">
          <div className="row ">


            <div className="col s4">
            <div className="row">
              <div className="profile-photo"></div>
            </div>
            <div className="row">
              <div className="col s12">
              <h5>{this.state.name}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
              <h5>Current Karma Score:</h5>
              <div id="proScore">{this.state.score}</div>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
              <h5>Karma Goal: 50 </h5>
              </div>
            </div>
            </div>


            <div className="col s4">
              <div className="row">
              <h2>YOUR KARMA</h2>
                <div className="col s12 ball" id="ball">
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <h4>Leader Board</h4>
                </div>

                <div className="row">
                  <div className="col s1 hi-score"></div>
                  <div className="col s4 leaders"> Steve</div>
                  <div className=" col s4 scores"> Score: 5000 </div>
                </div>

                <div className="row">
                  <div className="col s1 hi-score"></div>
                  <div className="col s4 leaders"> Randy</div>
                  <div className=" col s4 scores"> Score: 4596 </div>
                </div>

                <div className="row">
                  <div className="col s1 hi-score"></div>
                  <div className="col s4 leaders"> Jessica</div>
                  <div className=" col s4 scores"> Score: 3629 </div>
                </div>

                <div className="row">
                  <div className="col s1 hi-score"></div>
                  <div className="col s4 leaders"> Joe</div>
                  <div className=" col s4 scores"> Score: 2530 </div>
                </div>

              </div>
            </div>



            <div className="col s4">
                <h3>My Good Karma </h3>

                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="one" onClick={this.handleClick} value="5" /></div>
                        <div className="col s10"><label htmlFor="1">Held A Door Open</label></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="2" onClick={this.handleClick} value="-15" /></div>
                        <div className="col s10"><label htmlFor="2">Punched Someone</label></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="3" onClick={this.handleClick} value="2" /></div>
                        <div className="col s10"><label htmlFor="3">Bought Someone Lunch</label></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="4" onClick={this.handleClick} value="7" /></div>
                        <div className="col s10"><label htmlFor="4">Donated Money or Time</label></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="5" onClick={this.handleClick} value="4" /></div>
                        <div className="col s10"><label htmlFor="5">Said Hello to a Stranger</label></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="6" onClick={this.handleClick} value="-2" /></div>
                        <div className="col s10"><label htmlFor="6">Ignored A Phone Call From Mom/Dad</label></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="7" onClick={this.handleClick} value="-3" /></div>
                        <div className="col s10"><label htmlFor="7">Did not leave the waiter a tip</label></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="8" onClick={this.handleClick} value="3" /></div>
                        <div className="col s10"><label htmlFor="8">Left the waiter a large tip</label></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="9" onClick={this.handleClick} value="12" /></div>
                        <div className="col s10"><label htmlFor="9">Went the extra mile w/o expecting anything in return</label></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <div className="col s2"><input className="btn" type="button" id="10" onClick={this.handleClick} value="-100" /></div>
                        <div className="col s10"><label htmlFor="10">Cheated on you significant other</label></div>
                    </div>
                </div>

            </div>

            </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
