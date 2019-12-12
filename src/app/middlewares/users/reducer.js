export const actions = {
    GET_USERS: "GET_USERS",
    SHOW_TABLE_BODY: "SHOW_TABLE_BODY",
    SHOW_STAGE_MODAL: "SHOW_STAGE_MODAL",
    CHANGE_USER_DATA: "CHANGE_USER_DATA",
};

const initialState = {
    users: [],
    showTableBody: true,
    showTableRow: {index: -1, value: false},
    openStageModal: false,
}

const changeUserData = (data, state) => {
    console.log("remove from card ");

    let updatedUsers = [...state.users];


    for (let i = 0; i < updatedUsers.length; i++) {
        if (data.id === updatedUsers[i].id) {
            updatedUsers[i] = data;
        }
    }

    return {...state, users: updatedUsers}
    // setTimeout(() => {
    //     setCart(updatedCart)
    // }, 500)
}


const usersReducer = (state = initialState, data) => {
    switch (data.type) {
        case actions.GET_USERS:
            return {...state, users: data.payload};
        case actions.SHOW_TABLE_BODY:
            return {...state, showTableBody: data.payload};
        case actions.CHANGE_USER_DATA:
            return {...state, showTableBody: data.payload};
        default:
            return state;
    }
}
export default usersReducer