import { FETCH_COURSE_SUCCESS, FETCH_COURSE_FAIL, FETCH_SUBJECT_SUCCESS, FETCH_SUBJECT_FAIL, FETCH_YEAR_SUCCESS, FETCH_YEAR_FAIL, FETCH_QUESTION_SUCCESS, FETCH_QUESTION_FAIL } from "../actions/Type";


const initialState = {
    course:[],
    subject:[],
    year:[],
    question:[],
    isLoading:true,
    error:false
};

export default function(state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case FETCH_COURSE_SUCCESS:
           
            return {
                ...state,course:payload,error:false,isLoading:false
            }
        case FETCH_COURSE_FAIL:
            return {
                ...state,
                course:null,
                error:true
            }
        case FETCH_SUBJECT_SUCCESS:
            return {
                ...state,
                subject:payload,error:false,isLoading:false
            }

        case FETCH_SUBJECT_FAIL:
            return {
                ...state,
                subject:null,
                error:true,
            }

        case FETCH_YEAR_SUCCESS:
            return{
                ...state,year:payload,error:false,isLoading:false
            }

        case FETCH_YEAR_FAIL:
            return {
                ...state,year:null,
                error:true,
            }
        case FETCH_QUESTION_SUCCESS:
            return {
                ...state,question:payload,error:false,isLoading:false
            }
        case FETCH_QUESTION_FAIL:
            return {
                ...state,question:null,error:true,
            }
        default:
            return state;
    }
}