import React, { useReducer, useEffect } from 'react';
import TableForm from '../../components/TableForm'
import { REDUCER, actions } from "../middlewares/useReducer";
import { USERS, ROWS } from '../../helpers/utils/constants';


const HomePage = () => {

    const [{ users }, dispatch] = useReducer(REDUCER, { users: [] })

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