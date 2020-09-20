import { FETCH_COURSE_FAIL, FETCH_COURSE_SUCCESS, FETCH_SUBJECT_SUCCESS, FETCH_SUBJECT_FAIL, FETCH_YEAR_SUCCESS, FETCH_YEAR_FAIL, FETCH_QUESTION_SUCCESS, FETCH_QUESTION_FAIL } from "./Type";
import Axios from "axios";

export const fetchCourse = (stream) => (dispatch) => {
    try{
        Axios.get(`http://syllbusapi.ml/api/get/courses/${stream}`).then((response) => {
            if(response.status === 200){
                console.log(response.data);
                dispatch({
                    type:FETCH_COURSE_SUCCESS,
                    payload:response.data
                })
            }
        }).catch((e) => {
            console.log(e);
            dispatch({
                type:FETCH_COURSE_FAIL,
            })
        })
    }catch(e){
        console.log('error',e);
    }
};

export const fetchSubject = (course) => (dispatch) => {
    try{
        Axios.get(`http://syllbusapi.ml/api/get/subject/${course}`).then((response) => {
            if(response.status === 200){
                console.log(response.data);

                dispatch({
                    type:FETCH_SUBJECT_SUCCESS,
                    payload:response.data
                })
            }
        }).catch((e) => {
            dispatch({
                type:FETCH_SUBJECT_FAIL
            })
        })
    }catch(e){
        console.log(e);
        dispatch({
            type:FETCH_COURSE_FAIL
        })
    }
}


export const fetchYear = (subject) => (dispatch) => {
    try{
        Axios.get(`http://syllbusapi.ml/api/get/year/${subject}`).then((response) => {
            if(response.status === 200){
                console.log(response.data);

                dispatch({
                    type:FETCH_YEAR_SUCCESS,
                    payload:response.data
                })
            }
        }).catch((e) => {
            dispatch({
                type:FETCH_YEAR_FAIL
            })
        })
    }catch(e){
        dispatch({
            type:FETCH_YEAR_FAIL
        })
        console.log(e)
    }
}


export const fetchQuestion = (subjectName,yearName) => (dispatch) => {
    try{
        Axios.get(`http://syllbusapi.ml/api/get/${subjectName}/${yearName}`).then((response) => {
            if(response.status === 200){
                console.log(response.data);
                dispatch({
                    type:FETCH_QUESTION_SUCCESS,
                    payload:response.data
                })
            }
        }).catch((e) => {
            console.log(e);
            dispatch({
                type:FETCH_QUESTION_FAIL
            })
        })
    }catch(e){
        console.log(e);
        dispatch({
            type:FETCH_QUESTION_FAIL
        })
    }
}