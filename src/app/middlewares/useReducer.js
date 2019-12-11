export const actions = {
    GET_USERS: "GET_USERS",
    SHOW_TABLE_BODY: "SHOW_TABLE_BODY",
    SHOW_STAGE_MODAL: "SHOW_STAGE_MODAL",
};

const initialState = {
    users: [],
    showTabelBody: true,
    showTabelRow: { index: -1, valuee: false },
    openStageModal: false,
}

 const userReducer = (state = initialState, data) => {
    switch (data.type) {
        case actions.GET_USERS:
            return { ...state, users: data.paylod };
        case actions.SHOW_TABLE_BODY:
            return { ...state, showTabelBody: data.paylod };
        default:
            return state;
    }
}
export default userReducer