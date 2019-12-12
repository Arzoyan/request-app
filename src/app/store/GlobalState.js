import React, {useReducer} from "react";
import {USERS, ROWS, STAGE, STAGE_NAME} from "../../helpers/utils/constants";
// import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import {actions, usersReducer} from "../middlewares/users/reducer";

import UsersContext from "../middlewares/users-context";

const GlobalState = props => {
    const rows = ROWS;
    const stageName = STAGE;
    const stage = STAGE_NAME;


    const [state, dispatch] = useReducer(usersReducer, {cart: []})

    const showTableBody = isShow => {
        dispatch({type: actions.SHOW_TABLE_BODY, payload: isShow})

    }

    const showModal = isOpenModal => {
        console.log("remove from card ");
        dispatch({type: actions.SHOW_STAGE_MODAL, payload: isOpenModal})
         }

    const changeUserData = data => {
        dispatch({type: actions.CHANGE_USER_DATA, payload: data})
    }


    return <UsersContext.Provider value={{
        users: state.users,
        rows,
        stageName,
        stage,
        showTableBody: showTableBody,
        showModal: showModal,
        changeUserData: changeUserData,
    }}> {props.children} </UsersContext.Provider>
}

export default GlobalState