export const actions = {
    GET_USERS: "GET_USERS",
    SHOW_TABLE_BODY:"SHOW_TABLE_BODY",
};


export const REDUCER = (state, data) => {
    switch (data.type) {
        case actions.GET_USERS:
            return {...state,users:data.paylod};
        case actions.SHOW_TABLE_BODY:
            return {...state,toggleTable:data.paylod};
        default:
            return state;
    }
}