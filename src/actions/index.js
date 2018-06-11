import { combineReducers } from "redux";
import { users, requests } from "../reducers"

export function addUser(user){
    return {
      type:"ADD_USER",
      value:user
    }
  }
  
  export function removeUser(user){
    return {
      type:"REMOVE_USER",
      value:user
    }
  }

  export function addRequest(user){
    return {
      type:"ADD_REQUEST",
      value:user
    }
  }
  
  export function removeRequest(user){
    return {
      type:"REMOVE_REQUEST",
      value:user
    }
  }