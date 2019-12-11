import React, { useReducer, useEffect } from 'react';
import TableForm from '../../components/TableForm'
import userReducer, { actions } from "../middlewares/useReducer";
import { USERS, ROWS } from '../../helpers/utils/constants';


const HomePage = () => {

    const [{ users }, dispatch] = useReducer(userReducer, { users: [] })

    useEffect(() => {
        dispatch({ type: actions.GET_USERS, paylod: { users: USERS, rows: ROWS } })
    }, []);
    return (
        <div>
            <TableForm users={users} />
        </div>

    );
}
export default HomePage