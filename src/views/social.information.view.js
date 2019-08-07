import React from "react"
import { connect } from 'react-redux';

class SocialInformation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            fb:"",
            sanp:"",
            submitted:false,
            changeCallBack :null,
            backCallBack:null
            
        }
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const {changeCallBack ,backCallBack} = this.props
        console.log(this.props)
       this.setState({...this.props.socialInfo ,changeCallBack,backCallBack})
   }
   handleSubmit(e) {
     
    this.setState({ submitted: true });
    const {  fb, snap } = this.state;
    if(!this.isValid()) return;
    const {changeCallBack} = this.state
    changeCallBack({  fb, snap, })
}

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }

      back(){
        const {backCallBack} = this.state
        backCallBack();
      }

render(){
    const { fb, snap, submitted } = this.state;
    return( 
<div>
    <div className="row py-2">
<div className="col-12">
<input type="text"  name="fb" placeholder="facebook" value={fb} onChange={this.handleChange}/>
      {submitted && !fb && <div className="text-danger">facebook is required</div>  }
</div>
    </div>

    <div className="row py-2">
<div className="col-12">
<input type="text"  name="snap" placeholder="snapchat" value={snap} onChange={this.handleChange}/>
      {submitted && !snap && <div className="text-danger">snapchat is required</div>  }
</div>
  
    </div>

    <input type="button" className="btn btn-dark" value="back" onClick={this.back.bind(this)}/>
    <input type="button" className="btn btn-primary" value="finish" onClick={this.handleSubmit}/>

   
    </div>
      


    )
}

isValid(){
    const { fb, snap } = this.state;
    if(fb === "" || fb ===null || fb ===undefined ) return false
    if(snap === "" || snap ===null||snap ===undefined ) return false
    return true
}

}

function mapStateToProps(state) {
    const {socialInfo} = state.teacher;

    return {
        socialInfo
    };
  
  }
  
 
  const connectedSocialInformation = connect(mapStateToProps)(SocialInformation);
export {connectedSocialInformation as SocialInformation}