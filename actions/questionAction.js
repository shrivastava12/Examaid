import { FETCH_COURSE_FAIL, FETCH_COURSE_SUCCESS, FETCH_SUBJECT_SUCCESS, FETCH_SUBJECT_FAIL, FETCH_YEAR_SUCCESS, FETCH_YEAR_FAIL, FETCH_QUESTION_SUCCESS, FETCH_QUESTION_FAIL } from "./Type";
import Axios from "axios";

export const fetchCourse = (stream) => async(dispatch) => {
    try{
      await  Axios.get(`http://syllabusapi.ml/api/get/courses/${stream}`).then((response) => {
            if(response.status === 200){
                console.log('response ',response.data.data);
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
        console.log('error',e);
    }
};

export const fetchSubject = (course) => (dispatch) => {
    try{
        Axios.get(`http://syllabusapi.ml/api/get/subject/${course}`).then((response) => {
            if(response.status === 200){
                console.log(response.data);

                dispatch({
                    type:FETCH_SUBJECT_SUCCESS,
                    payload:response.data.data
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




export const fetchYear = (courseName) => (dispatch) => {
    try{
        Axios.get(`http://syllabusapi.ml/api/get/year/${courseName}`).then((response) => {
            if(response.status === 200){
                console.log('year',response.data);

                dispatch({
                    type:FETCH_YEAR_SUCCESS,
                    payload:response.data.data
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
        Axios.get(`http://syllabusapi.ml/api/get/question/${subjectName}/${yearName}`).then((response) => {
            console.log(subjectName,yearName);
            if(response.status === 200){
              
                console.log('question',response.data)
            
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

export const fetchVocationalQuestion = (courseName,year) => (dispatch) =>{
        console.log('test',courseName,year);
        try{

            Axios.get(`http://syllabusapi.ml/api/get/vocational/question/${courseName}/${year}`).then((response) => {
               if(response.status === 200){

                dispatch({
                    type:FETCH_QUESTION_SUCCESS,
                    payload:response.data
                })

               }

               
            }).catch((err)=> {
                console.log(err);
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

};

// Fetch Intermidate course

export const fetchIntermidiateCourse = (courseType) => (dispatch) => {

    console.log(courseType);

    try{
            Axios.get(`http://syllabusapi.ml/api/get/course/intermidate/${courseType}`).then((response) => {
                console.log('intermidiate',response.data.data);
                dispatch({
                    type:FETCH_COURSE_SUCCESS,
                    payload:response.data.data
                })

            }).catch((err) => {
                console.log(err);
                dispatch({
                    type:FETCH_COURSE_FAIL,
                })
            })
    }catch(err){
        console.log(err);
        dispatch({
            type:FETCH_COURSE_FAIL,
        })
    }
}

// Fetch Intermidiate Subject 

export const fetchIntermidiateSubject = (typeName,courseName) => (dispatch) => {
    console.log(typeName,courseName);

    try{
        Axios.get(`http://syllabusapi.ml/api/get/subject/intermidate/${typeName}/${courseName}`).then((response) => {
            console.log(response.data);
                dispatch({
                    type:FETCH_SUBJECT_SUCCESS,
                    payload:response.data
                })            
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

// Fetch intermidiate question

export const fetchIntermidiateQuestion = (typeName,courseName,subjectName) => (dispatch) => {
    console.log(typeName,courseName,subjectName);
    try{

        Axios.get(`http://syllabusapi.ml/api/get/question/inter/${typeName}/${courseName}/${subjectName}`).then((response) => {
            console.log(response.data);
            if(response.status === 200){
                dispatch({
                    type:FETCH_QUESTION_SUCCESS,
                    payload:response.data
                })
            }
         
        }).catch((err) => {
            dispatch({
                type:FETCH_QUESTION_FAIL,
            })
        })
    }catch(e){
        console.log(e);
        dispatch({
            type:FETCH_QUESTION_FAIL,
        })
    }

}

