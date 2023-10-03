import createDataContext from "./createDataContext";

const memoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "edit-memo":  
            return state.map((memo)=>memo.id === action.payload.id?action.payload:memo);
        case "del-memo":
            return state.filter((memo)=>memo.id!=action.payload);
        case "add-memo":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    day: action.payload.day,
                    timeS: action.payload.timeS,
                    timeE: action.payload.timeE,
                    subjectCode: action.payload.subjectCode,
                    subjectM: action.payload.subjectM,
                    subject: action.payload.subject,
                    room: action.payload.room,
                    teacher: action.payload.teacher,
                    title: action.payload.title,
                    description: action.payload.description,
                },
            ];
        default:
            return state;
    }
};

const addMemo = (dispatch) => {
    return (day, timeS, timeE, subjectCode, subjectM, subject, room, teacher, title, description, ) => {
        dispatch({ type: "add-memo", payload: { 
            day,
            timeS,
            timeE,
            subjectCode,
            subjectM,
            subject, 
            room,
            teacher, 
            title, 
            description, 
        } });
    };
};
const delMemo = dispatch => {
    return (id) => dispatch({ type: 'del-memo', payload: id });
};
const editMemo = dispatch =>{
    return (
        id,
        day,
        timeS,
        timeE,
        subjectCode,
        subjectM,
        subject, 
        room,
        teacher, 
        title, 
        description, 
        ) => dispatch({
        type:'edit-memo',
        payload:{
            id,
            day,
            timeS,
            timeE,
            subjectCode,
            subjectM,
            subject, 
            room,
            teacher, 
            title, 
            description, 
        }});
};

export const { Context, Provider } = createDataContext(
    memoReducer,
    { addMemo ,delMemo,editMemo},
    [
        // {id: 0 ,day:'Wed Sep 27 2023 10:13:04',money:'+400',title:'income',description:'income from my mom'},
        // {id: 1 ,day:'Wed Sep 27 2023 11:20:04',money:'-60',title:'food',description:'dinner at restaurant'},
        {   
            id: 0,
            day:'WED',
            timeS:'15:00',
            timeE:'17:00',
            subjectCode:'01418344-60',
            subjectM:'700',
            subject:'Mobile Application Design and Development', 
            room:'SC9-330',
            teacher:'วรัทภพ ธภัทรสุวรรณ ', 
            title:'null', 
            description:'null', 
        },
    ]
);