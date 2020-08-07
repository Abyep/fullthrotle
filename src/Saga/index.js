import { put, call, takeLatest, take } from "redux-saga/effects";
// import api from "../Api/index.js";

export const GET_DATA = "GET_DATA";
export const SAVE_DATA = "SAVE_DATA";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR"


export const openSidebar = (payload) =>({
  type:'OPEN_SIDEBAR',
  payload
})

export default function* rootSaga() {
}


