import React from "react"
import { connect } from 'react-redux';

class PersionalInformation extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            name:"",
            nameEn:"",
            submitted:false,
            changeCallBack:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
         const {changeCallBack} = this.props
         console.log(this.props)
        this.setState({...this.props.personalInfo ,changeCallBack})
    }
    handleSubmit(e) {
     
        this.setState({ submitted: true });
        const { name, nameEn } = this.state;
        if(!this.isValid()) return;
        const {changeCallBack} = this.state
        changeCallBack({ name, nameEn })
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      }

render(){
    const { name, nameEn, submitted } = this.state;
    return( 
<div>
    <div className="row">
<div className="col-12">
<input type="text"  name="name" placeholder="name" value={name} onChange={this.handleChange}/>
      {submitted && !name && <div className="text-danger">name is required</div>  }
</div>
    </div>

    <div className="row">
<div className="col-12">
<input type="text"  name="nameEn" placeholder="nameEn" value={nameEn} onChange={this.handleChange}/>
      {submitted && !nameEn && <div className="text-danger">name is required</div>  }
</div>
  
    </div>
    <input type="button" className="btn btn-primary" value="next" onClick={this.handleSubmit}/>
    </div>
  

 

    )
}
isValid(){
    const { name, nameEn } = this.state;
    if(name === "" || name ===null || name ===undefined ) return false
    if(nameEn === "" || nameEn ===null||nameEn ===undefined ) return false
    return true
}

}

function mapStateToProps(state) {
    const {  personalInfo } = state.teacher;
    console.log(this.props);

    return {
        personalInfo
    
 
    };
  
  }
  
 
  const connectedPersionalInformation = connect(mapStateToProps)(PersionalInformation);
export {connectedPersionalInformation as PersionalInformation}