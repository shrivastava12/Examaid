import { FETCH_SUBJECT_SUCCESS, FETCH_SUBJECT_FAIL, FETCH_COURSE_SUCCESS, FETCH_COURSE_FAIL, FETCH_SYLLABUS_SUCCESS, FETCH_SYLLABUS_FAIL } from "./Type";
import Axios from 'axios';

export const fetchSyllabusCourse = (courseType) => (dispatch) => {
    console.log(courseType);

    try{
    
        Axios.get(`http://syllabusapi.ml/api/get/syllabus/course/${courseType}`).then((response) => {
            console.log(response.data);
            if(response.status === 200){
                dispatch({
                    type:FETCH_COURSE_SUCCESS,
                    payload:response.data.data
                })
            }
        }).catch((e) => {
            console.log(e);
            dispatch({
                type:FETCH_COURSE_FAIL,
            })
        })

    }catch(e){
        console.log(e);
        dispatch({
            type:FETCH_COURSE_FAIL,
        })
    }
};

export const fetchSyllabusSubject =  (courseType,courseName) => (dispatch) => {
    console.log(courseType,courseName);
    try{

        Axios.get(`http://syllabusapi.ml/api/get/syllabus/subject/${courseType}/${courseName}`).then((response) => {
            console.log(response.data);
            if(response.status === 200){
                dispatch({
                    type:FETCH_SUBJECT_SUCCESS,
                    payload:response.data.data
                })
            }
        }).catch((err) => {
            console.log(err);
            dispatch({
                type:FETCH_SUBJECT_FAIL,
            })
        })
    }catch(e){
        console.log(e);
        dispatch({
            type:FETCH_SUBJECT_FAIL,
        })
    }
};

export const fetchSyllabus = (courseType,courseName,subjectName) => (dispatch) => {
    console.log(courseType,courseName,subjectName);

    try{

        Axios.get(`http://syllabusapi.ml/api/get/syllabus/bank/${courseType}/${courseName}/${subjectName}`).then((response) => {
            console.log(response.data);

            dispatch({
                type:FETCH_SYLLABUS_SUCCESS,
                payload:response.data
            })

        }).catch((err) => {
            console.log(err);
            dispatch({
                type:FETCH_SYLLABUS_FAIL,
            })
        })

    }catch(e){
        console.log(e);
        dispatch({
            type:FETCH_SYLLABUS_FAIL
        })
    }
};

// Fetch Vocational Syllabus

export const fetchVocationalSyllabus = (courseType,courseName) => (dispatch) => {
    console.log(courseType,courseName);

    try{

        Axios.get(`http://syllabusapi.ml/api/get/vocational/syllabus/${courseType}/${courseName}`).then((response) => {
            console.log(response.data);

            dispatch({
                type:FETCH_SYLLABUS_SUCCESS,
                payload:response.data
            })

        }).catch((err) => {
            console.log(err);
            dispatch({
                type:FETCH_SYLLABUS_FAIL,
            })
        })

    }catch(e){
        console.log(e);
        dispatch({
            type:FETCH_SYLLABUS_FAIL
        })
    }
};