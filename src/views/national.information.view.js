import React from "react"
import { connect } from 'react-redux';

class NationalInformation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            ssn:"",
            passport:"",
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
       this.setState({...this.props.nationalInfo ,changeCallBack,backCallBack})
   }
   handleSubmit(e) {
     
    this.setState({ submitted: true });
    const { ssn, passport } = this.state;
    if(!this.isValid()) return;
    const {changeCallBack} = this.state
    changeCallBack({ ssn, passport })
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
    const { ssn, passport, submitted } = this.state;
    return( 
<div>
    <div className="row py-2">
<div className="col-12">
<input type="text"  name="ssn" placeholder="SSN" value={ssn} onChange={this.handleChange}/>
      {submitted && !ssn && <div className="text-danger">SSN is required</div>  }
</div>
    </div>

    <div className="row py-2">
<div className="col-12">
<input type="text"  name="passport" placeholder="Passport" value={passport} onChange={this.handleChange}/>
      {submitted && !passport && <div className="text-danger">Passport is required</div>  }
</div>
  
    </div>

    <input type="button" className="btn btn-dark" value="back" onClick={this.back.bind(this)}/>
    <input type="button" className="btn btn-primary" value="next" onClick={this.handleSubmit}/>

   
    </div>
      


    )
}

isValid(){
    const { ssn, passport } = this.state;
    if(ssn === "" || ssn ===null || ssn ===undefined ) return false
    if(passport === "" || passport ===null||passport ===undefined ) return false
    return true
}

}

function mapStateToProps(state) {
    const {nationalInfo} = state.teacher;

    return {
        nationalInfo
    };
  
  }
  
 
  const connectedNationalInformation = connect(mapStateToProps)(NationalInformation);
export {connectedNationalInformation as NationalInformation}