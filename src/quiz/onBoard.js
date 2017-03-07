import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from '../profile/userProfile'

//get user name from login
//output form
//save questions back to user profile
class OnBoardingForm extends React.Component{
  constructor(props) {
    super(props);

    this.state={
      name : this.props.name,
      score: this.props.score
    };

      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleOptionChange1=this.handleOptionChange1.bind(this);
      this.handleOptionChange2=this.handleOptionChange2.bind(this);
      this.handleOptionChange3=this.handleOptionChange3.bind(this);
      this.handleOptionChange4=this.handleOptionChange4.bind(this);
      this.handleOptionChange5=this.handleOptionChange5.bind(this);
      this.handleOptionChange6=this.handleOptionChange6.bind(this);
      this.handleOptionChange7=this.handleOptionChange7.bind(this);
      this.handleOptionChange8=this.handleOptionChange8.bind(this);
      this.handleOptionChange9=this.handleOptionChange9.bind(this);
      this.handleOptionChange10=this.handleOptionChange10.bind(this);

    };


    handleOptionChange1(e){
      this.setState({selectedOption1: e.target.value});
    }
    handleOptionChange2(e){
      this.setState({selectedOption2: e.target.value});
    }
    handleOptionChange3(e){
      this.setState({selectedOption3: e.target.value});
    }
    handleOptionChange4(e){
      this.setState({selectedOption4: e.target.value});
    }
    handleOptionChange5(e){
      this.setState({selectedOption5: e.target.value});
    }
    handleOptionChange6(e){
      this.setState({selectedOption6: e.target.value});
    }
    handleOptionChange7(e){
      this.setState({selectedOption7: e.target.value});
    }
    handleOptionChange8(e){
      this.setState({selectedOption8: e.target.value});
    }
    handleOptionChange9(e){
      this.setState({selectedOption9: e.target.value});
    }
    handleOptionChange10(e){
      this.setState({selectedOption10: e.target.value});
    }



    handleSubmit (e){
    	e.preventDefault();

      var profile = {
        name: this.props.name,
        score: parseInt(this.state.selectedOption1) + parseInt(this.state.selectedOption2)
        + parseInt(this.state.selectedOption3) + parseInt(this.state.selectedOption4)
        + parseInt(this.state.selectedOption5) + parseInt(this.state.selectedOption6)
        + parseInt(this.state.selectedOption7) + parseInt(this.state.selectedOption8)
        + parseInt(this.state.selectedOption9) + parseInt(this.state.selectedOption10)
      };
      if(isNaN(parseInt(profile.score))){
        alert("You must answer all the questions.");
      }else{
        ReactDOM.render(<UserProfile profile={profile} />, document.getElementById("root"));
      }
    }

  render(){
    return (
      <div className="container-fluid" id="on-boarding">
        <div className="row">
          <h1 className="text-center on-boarding-title">How Good is Your Karma?</h1>
        </div>
        <div className="row">
          <div className="col s8 offset-s2 on-boarding-form">
          <form onSubmit={this.handleSubmit}>

          <div className="row">
              <h4 className="on-boarding-title">When an old lady crosses the street you...</h4>
          </div>
          <div className="row">
              <div className="col s12">
                  <span className="select-padding">
                  <input name="group1" type="radio" id="one" value="-2"
                  checked={this.state.selectedOption1 === '-2'}
                  onChange={this.handleOptionChange1}/>
                  <label htmlFor="one">Ignore her.</label>
                  </span>
                  <span className="select-padding">
                    <input name="group1" type="radio" id="two" value="10"
                     checked={this.state.selectedOption1 === '10'}
                     onChange={this.handleOptionChange1}/>
                    <label htmlFor="two">Help her.</label>
                  </span>
                  <span className="select-padding">
                <input name="group1" type="radio" id="three" value="-7"
                 checked={this.state.selectedOption1 === '-7'}
                onChange={this.handleOptionChange1}/>
                <label htmlFor="three">Hide from her.</label>
              </span>
                  <span className="select-padding">
                <input name="group1" type="radio" id="four" value="-10"
                 checked={this.state.selectedOption1 === '-10'}
                 onChange={this.handleOptionChange1}/>
                <label htmlFor="four">Run from her.</label>
              </span>
                  <span className="select-padding">
                <input name="group1" type="radio" id="five" value="7"
                checked={this.state.selectedOption1 === '7'}
                onChange={this.handleOptionChange1}/>
                <label htmlFor="five">Ask if she wants help.</label>
              </span>
              </div>
          </div>

          <div className="row">
              <h4 className="on-boarding-title">Karma is...</h4>
          </div>
          <div className="row">
              <div className="col s2">
          <span>
            <input name="group2" type="radio" id="2one" value="-5"
              checked={this.state.selectedOption2 === '-5'}
                onChange={this.handleOptionChange2}/>
            <label htmlFor="2one">A video game.</label>
          </span>
          </div>
          <div className="col s2">
          <span >
            <input name="group2" type="radio" id="2two" value="-7"
              checked={this.state.selectedOption2 === '-7'}
              onChange={this.handleOptionChange2}/>
            <label htmlFor="2two">A movie.</label>
          </span>
          </div>
          <div className="col s2">
          <span>
            <input name="group2" type="radio" id="2three" value="10"
              checked={this.state.selectedOption2 === '10'}
              onChange={this.handleOptionChange2}/>
            <label htmlFor="2three">A law of cause and effect.</label>
          </span>
          </div>
          <div className="col s2">
          <span>
            <input name="group2" type="radio" id="2four" value="5"
              checked={this.state.selectedOption2 === '5'}
              onChange={this.handleOptionChange2}/>
            <label htmlFor="2four">A religion.</label>
          </span>
          </div>
          </div>


          <div className="row">
              <h4 className="on-boarding-title">Would you create a list to mend all the bad things you have done?</h4>
          </div>
          <div className="row">
              <div className="col s2">
          <span >
            <input name="group3" type="radio" id="3one" value="10"
              checked={this.state.selectedOption3 ==='10'}
              onChange={this.handleOptionChange3}/>
            <label htmlFor="3one">Yes</label>
          </span>
          </div>
            <div className="col s2">
          <span >
            <input name="group3" type="radio" id="3two" value="-5"
              checked={this.state.selectedOption3 === '-5'}
              onChange={this.handleOptionChange3}/>
            <label htmlFor="3two">No</label>
          </span>
          </div>
            <div className="col s2">
            <span >
              <input name="group3" type="radio" id="3three" value="2"
                checked={this.state.selectedOption3 === '2'}
                onChange={this.handleOptionChange3}/>
              <label htmlFor="3three">Maybe</label>
            </span>
          </div>
          </div>



          <div className="row">
              <h4 className="on-boarding-title">If you are fighting with your best friend you...</h4>
          </div>
          <div className="row">
            <div className="col s12">
            <input name="group4" type="radio" id="4one" value="7"
              checked={this.state.selectedOption4 === '7'}
              onChange={this.handleOptionChange4}/>
            <label htmlFor="4one">write a card asking for forgiveness.</label>
            </div>
            <div className="col s12">
            <input name="group4" type="radio" id="4two" value="-7"
              checked={this.state.selectedOption4 === '-7'}
              onChange={this.handleOptionChange4}/>
            <label htmlFor="4two">fight until him/her surrenders.</label>
            </div>
            <div className="col s12">
            <input name="group4" type="radio" id="4three" value="-10"
              checked={this.state.selectedOption4 === '-10'}
              onChange={this.handleOptionChange4}/>
            <label htmlFor="4three">keep looking for even more reasons to fight for.</label>
            </div>
            <div className="col s12">
            <input name="group4" type="radio" id="4four" value="10"
              checked={this.state.selectedOption4 === '10'}
              onChange={this.handleOptionChange4}/>
            <label htmlFor="4four">ask him/her to have a talk and to try to solve things.</label>
            </div>
            <div className="col s12">
            <input name="group4" type="radio" id="4five" value="-15"
              checked={this.state.selectedOption4 === '-15'}
              onChange={this.handleOptionChange4}/>
            <label htmlFor="4five">Stop talking to him/her forever.</label>
            </div>
          </div>



          <div className="row">
              <h4 className="on-boarding-title">Karma is...</h4>
          </div>
          <div className="row">
          <div className="col s12">
          <input name="group5" type="radio" id="5one" value="2"
            checked={this.state.selectedOption5 === '2'}
            onChange={this.handleOptionChange5}/>
          <label htmlFor="5one">Affecting me.</label>
          </div>
          <div className="col s12">
          <input name="group5" type="radio" id="5two" value="-5"
            checked={this.state.selectedOption5 === '-5'}
            onChange={this.handleOptionChange5}/>
          <label htmlFor="5two">Nothing.</label>
          </div>
          <div className="col s12">
          <input name="group5" type="radio" id="5three" value="-10"
            checked={this.state.selectedOption5 === '-10'}
            onChange={this.handleOptionChange5}/>
          <label htmlFor="5three">A stupid belief.</label>
          </div>
          <div className="col s12">
          <input name="group5" type="radio" id="5four" value="-2"
            checked={this.state.selectedOption5 === '-2'}
            onChange={this.handleOptionChange5}/>
          <label htmlFor="5four">coming back at me.</label>
          </div>
          <div className="col s12">
          <input name="group5" type="radio" id="5five" value="5"
            checked={this.state.selectedOption5 === '5'}
            onChange={this.handleOptionChange5}/>
          <label htmlFor="5five">only based on your actions.</label>
          </div>
          <div className="col s12">
          <input name="group5" type="radio" id="5six" value="10"
            checked={this.state.selectedOption5 === '10'}
            onChange={this.handleOptionChange5}/>
          <label htmlFor="5six">based on your thoughts and actions.</label>
          </div>
          </div>



          <div className="row">
              <h4 className="on-boarding-title">When your brother or sister takes away your TV while you go for a glass of water you...</h4>
          </div>
          <div className="row">
            <div className="col s12">
              <input name="group6" type="radio" id="6-1" value="-2"
                checked={this.state.selectedOption6 === '-2'}
                onChange={this.handleOptionChange6}/>
                <label htmlFor="6-1">Ask her politely to stand up.</label>
            </div>
            <div className="col s12">
              <input name="group6" type="radio" id="6-2" value="-5"
                checked={this.state.selectedOption6 === '-5'}
                onChange={this.handleOptionChange6}/>
                <label htmlFor="6-2">Yell at him/her.</label>
            </div>
            <div className="col s12">
              <input name="group6" type="radio" id="6-3" value="-10"
                checked={this.state.selectedOption6 === '-10'}
                onChange={this.handleOptionChange6}/>
                <label htmlFor="6-3">Hit him/her until him/her moves</label>
            </div>
            <div className="col s12">
              <input name="group6" type="radio" id="6-4" value="-7"
                checked={this.state.selectedOption6 === '-7'}
                onChange={this.handleOptionChange6}/>
                <label htmlFor="6-4">Ask for help from your mother or father</label>
            </div>
            <div className="col s12">
              <input name="group6" type="radio" id="6-5" value="10"
                checked={this.state.selectedOption6 === '10'}
                onChange={this.handleOptionChange6}/>
                <label htmlFor="6-5">Watch TV with Him/Her</label>
            </div>
          </div>



          <div className="row">
              <h4 className="on-boarding-title">What goes around comes back around...</h4>
          </div>
          <div className="row">
          <div className="col s2">
            <input name="group7" type="radio" id="7-1" value="7"
              checked={this.state.selectedOption7 === '7'}
              onChange={this.handleOptionChange7}/>
              <label htmlFor="7-1">Yes</label>
          </div>
          <div className="col s2">
            <input name="group7" type="radio" id="7-2" value="2"
              checked={this.state.selectedOption7 === '2'}
              onChange={this.handleOptionChange7}/>
              <label htmlFor="7-2">Sometimes</label>
          </div>
          <div className="col s2">
            <input name="group7" type="radio" id="7-3" value="5"
              checked={this.state.selectedOption7 === '5'}
              onChange={this.handleOptionChange7}/>
              <label htmlFor="7-3">It depends.</label>
          </div>
          <div className="col s2">
            <input name="group7" type="radio" id="7-4" value="-2"
              checked={this.state.selectedOption7 === '-2'}
              onChange={this.handleOptionChange7}/>
              <label htmlFor="7-4">No.</label>
          </div>
          <div className="col s2">
            <input name="group7" type="radio" id="7-5" value="1"
              checked={this.state.selectedOption7 === '1'}
              onChange={this.handleOptionChange7}/>
              <label htmlFor="7-5">Maybe.</label>
          </div>
          </div>


          <div className="row">
              <h4 className="on-boarding-title">What percent of your decisions are reasonable and thought as something that can have later consequence?</h4>
          </div>
          <div className="row">
          <div className="col s2">
            <input name="group8" type="radio" id="8-1" value="10"
              checked={this.state.selectedOption8 === '10'}
              onChange={this.handleOptionChange8}/>
              <label htmlFor="8-1">100%</label>
          </div>
          <div className="col s2">
            <input name="group8" type="radio" id="8-2" value="7"
              checked={this.state.selectedOption8 === '7'}
              onChange={this.handleOptionChange8}/>
              <label htmlFor="8-2">80%</label>
          </div>
          <div className="col s2">
            <input name="group8" type="radio" id="8-3" value="4"
              checked={this.state.selectedOption8 === '4'}
              onChange={this.handleOptionChange8}/>
              <label htmlFor="8-3">50%</label>
          </div>
          <div className="col s2">
            <input name="group8" type="radio" id="8-4" value="2"
              checked={this.state.selectedOption8 === '2'}
              onChange={this.handleOptionChange8}/>
              <label htmlFor="8-4">30%</label>
          </div>
          <div className="col s2">
            <input name="group8" type="radio" id="8-5" value="-2"
              checked={this.state.selectedOption8 === '-2'}
              onChange={this.handleOptionChange8}/>
              <label htmlFor="8-5">10%</label>
          </div>
          <div className="col s2">
            <input name="group8" type="radio" id="8-6" value="-5"
              checked={this.state.selectedOption8 === '-5'}
              onChange={this.handleOptionChange8}/>
              <label htmlFor="8-6">0%</label>
          </div>
          </div>


          <div className="row">
              <h4 className="on-boarding-title">You see someone who is visibly upset and alone…</h4>
          </div>
          <div className="row">
          <div className="col s12">
            <input name="group9" type="radio" id="9-1" value="2"
              checked={this.state.selectedOption9 === '2'}
              onChange={this.handleOptionChange9}/>
              <label htmlFor="9-1">You ask them if you can call someone to help them</label>
          </div>
          <div className="col s12">
            <input name="group9" type="radio" id="9-2" value="-10"
              checked={this.state.selectedOption9 === '-10'}
              onChange={this.handleOptionChange9}/>
              <label htmlFor="9-2">You pretend you didn’t see them and walk away.</label>
          </div>
          <div className="col s12">
            <input name="group9" type="radio" id="9-3" value="-2"
              checked={this.state.selectedOption9 === '-2'}
              onChange={this.handleOptionChange9}/>
              <label htmlFor="9-3">You begrudgingly stop and ask if you can help them.</label>
          </div>
          <div className="col s12">
            <input name="group9" type="radio" id="9-4" value="10"
              checked={this.state.selectedOption9 === '10'}
              onChange={this.handleOptionChange9}/>
              <label htmlFor="9-4">You stop and comfort them and ask how you can help.</label>
          </div>
          <div className="col s12">
            <input name="group9" type="radio" id="9-5" value="-3"
              checked={this.state.selectedOption9 === '-3'}
              onChange={this.handleOptionChange9}/>
              <label htmlFor="9-5">You are short on time and think someone else will surely help them.</label>
          </div>
          </div>


          <div className="row">
              <h4 className="on-boarding-title">It’s important to do good for others because…</h4>
          </div>
          <div className="row">
          <div className="col s12">
            <input name="group10" type="radio" id="10-1" value="-10"
              checked={this.state.selectedOption10 === '-10'}
              onChange={this.handleOptionChange10}/>
              <label htmlFor="10-1">It will make them like you more.</label>
          </div>
          <div className="col s12">
            <input name="group10" type="radio" id="10-2" value="8"
              checked={this.state.selectedOption10 === '8'}
              onChange={this.handleOptionChange10}/>
              <label htmlFor="10-2">Kindness and charity make the world a better place.</label>
          </div>
          <div className="col s12">
            <input name="group10" type="radio" id="10-3" value="2"
              checked={this.state.selectedOption10 === '2'}
              onChange={this.handleOptionChange10}/>
              <label htmlFor="10-3">people need help.</label>
          </div>
          <div className="col s12">
            <input name="group10" type="radio" id="10-4" value="-5"
              checked={this.state.selectedOption10 === '-5'}
              onChange={this.handleOptionChange10}/>
              <label htmlFor="10-4">it makes you feel good.</label>
          </div>
          </div>

              <div className="row">
                <div className="col s4 offset-s4">
                  <button className="submitBtn btn "type="submit" name="action" >Get Karma Score</button>
                </div>
              </div>
          </form>

          </div>
        </div>
      </div>
    );
  }
}

export default OnBoardingForm;
