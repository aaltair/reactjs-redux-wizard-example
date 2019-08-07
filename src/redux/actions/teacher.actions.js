import { teacherStates } from "../states";



class teacherAction {

    saveInfo(personalInfo,step,nationalInfo,socialInfo) {
        return dispatch => {
            dispatch(saveinfo({...personalInfo},step,{...nationalInfo},{...socialInfo}));
         
        }
        
       
           
         
       }



    }

      
        
       
           
         
     
  
   

   function saveinfo(personalInfo,step,nationalInfo,socialInfo) { return { type: teacherStates.SAVE_INFORMATION,   personalInfo, step ,nationalInfo,socialInfo }}
   
   export const teacherActions =new teacherAction();