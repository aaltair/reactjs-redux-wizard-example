import { teacherStates } from "../states";

const initialState = {
personalInfo:{},
nationalInfo:{},
socialInfo:{},
step:1
};

export function teacher(state = initialState, action) {

  switch (action.type) {
  
    case teacherStates.SAVE_INFORMATION:
         
      return {
        personalInfo:action.personalInfo?action.personalInfo:{},
        nationalInfo:action.nationalInfo?action.nationalInfo:{},
        socialInfo:action.nationalInfo?action.socialInfo:{},
        step:action.step
        };
 

    default:
      return state;
  }
}
