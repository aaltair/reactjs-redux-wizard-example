import React from "react"
import { connect } from 'react-redux';
import {  teacherActions } from '../redux';
import { PersionalInformation, NationalInformation, SocialInformation } from "../views";
class MainLayout extends React.Component{


    getPersonalInfo(personalInfo)
    {
        const {step, nationalInfo,socialInfo, dispatch} = this.props;
        dispatch( teacherActions.saveInfo(personalInfo,step+1,nationalInfo,socialInfo));
    }
    getNationalInfo(nationalInfo)
    {
        const {step, personalInfo,socialInfo, dispatch} = this.props;
      
        dispatch( teacherActions.saveInfo(personalInfo,step+1,nationalInfo,socialInfo));
  
    }
    getSocialInfo(socialInfo)
    {
        const {step, personalInfo,nationalInfo, dispatch} = this.props;
        dispatch( teacherActions.saveInfo(personalInfo,step+1,nationalInfo,socialInfo));
  
    }

    goback()
    {
        const {step, personalInfo,socialInfo,nationalInfo, dispatch} = this.props;
        dispatch( teacherActions.saveInfo(personalInfo,step-1,nationalInfo,socialInfo));
  
    }
render(){
    console.log(this.props)
const {step,personalInfo, nationalInfo,socialInfo} = this.props;
    return( <div>
            {step===1 && <PersionalInformation changeCallBack={this.getPersonalInfo.bind(this)} />}
            {step===2 && <NationalInformation changeCallBack={this.getNationalInfo.bind(this)} backCallBack={this.goback.bind(this)}/>}
            {step===3 && <SocialInformation changeCallBack={this.getSocialInfo.bind(this)} backCallBack={this.goback.bind(this)}/>}
            {step===4 && 
            <div>
                Name : {personalInfo.name} <br/>
                NameEn : {personalInfo.nameEn} <br/>
                ssn : {nationalInfo.ssn} <br/>
                passport : {nationalInfo.passport} <br/>
                facebook : {socialInfo.fb} <br/>
                snapchat : {socialInfo.snap} <br/>
                <input type="button" className="btn btn-dark" value="back" onClick={this.goback.bind(this)}/>
             </div>
            }
            </div>)
}

}

function mapStateToProps(state) {
    const { step,    personalInfo, nationalInfo,socialInfo} = state.teacher;

    return {
        step,
        personalInfo,
        nationalInfo,
        socialInfo
    };
  
  }
  
 
  const connectedMainLayout = connect(mapStateToProps)(MainLayout);
export {connectedMainLayout as MainLayout}