import { combineReducers } from "redux";

function users(state =[], action){
    if(action.type === "ADD_USER"){
      return [...state,action.value];
    }
    if(action.type === "REMOVE_USER"){
      return state.slice(state.length-1);
    }
    return state;
  }

  function requests(state =[], action){
    if(action.type === "ADD_REQUEST"){
      return [...state,action.value];
    }
    if(action.type === "REMOVE_REQUEST"){
      return state.slice(state.length-1);
    }
    return state;
  }

  const rootReducer = combineReducers({
      users, requests 
  })