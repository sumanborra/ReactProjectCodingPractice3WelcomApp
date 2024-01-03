// Write your code here
import {Component} from 'react'
import './index.css'
class Welcome extends Component {
  state = {buttonStatus: 'Subscribe'}
  subcribe = () =>{
        this.setState({buttonStatus: "Subscribed"})
  };
  subcribed = () =>{
    this.setState({buttonStatus: "Subscribe"})
  }
  render() {
    const{buttonStatus} = this.state;
    let variable;
    
    if(buttonStatus === "Subscribe"){
      variable = (<button className="buttn" onClick={this.subcribe}>Subscribe</button>);
    }
    if(buttonStatus === "Subscribed"){
      variable = (<button className="buttn" onClick={this.subcribed}>Subscribed</button>)
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {variable}
        
      </div>
    )
  }
}
export default Welcome
