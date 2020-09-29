import { FETCH_COURSE_SUCCESS, FETCH_COURSE_FAIL, FETCH_SUBJECT_SUCCESS, FETCH_SUBJECT_FAIL, FETCH_SYLLABUS_SUCCESS, FETCH_SYLLABUS_FAIL } from "../actions/Type";


const initialState = {
    course:[],
    subject:[],
    syllabus:[],
    isLoading:true,
    error:false
};

export default function(state = initialState,action){
   
    const {type,payload} = action;
    switch(type){
        case FETCH_COURSE_SUCCESS:
            return{
                ...state,course:payload,error:false,isLoading:false
            }
        case FETCH_COURSE_FAIL:
            return{
                ...state,course:null,error:true
            }
        case FETCH_SUBJECT_SUCCESS:
            return{
                ...state,subject:payload,error:false,isLoading:false
            }
        case FETCH_SUBJECT_FAIL:
            return{
                ...state,
                subject:null,
                error:true
            }
        case FETCH_SYLLABUS_SUCCESS:
            return{
                ...state,syllabus:payload,error:false,isLoading:false
            }
        case FETCH_SYLLABUS_FAIL:
            return{
                ...state,
                syllabus:null,
                error:true
            }

        default:
            return state;
    }

}