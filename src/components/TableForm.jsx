import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import ModalForm from "../components/ModalForm"
import UsersContext from '../app/middlewares/useContext';

const uuidv4 = require('uuid/v4');


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

export default function TableForm(users) {
  const classes = useStyles();
  const [tbody, setTbody] = useState(false);
  const [showRow, setShowRow] = useState({});
  const [showModal, setShowModal] = useState({ index: 0, isShow: false });

  return (
    <UsersContext.Provider value={users.users.users && users.users.users[showModal.index]}>
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {
                  users.users.rows && users.users.rows.map((row) => {
                    return <TableCell key={uuidv4()} >{row.value}</TableCell>
                  })
                }
                <TableCell>
                  <span onClick={() => setTbody(!tbody)}>{tbody ? <ExpandLess /> : <ExpandMore />} </span> </TableCell>
              </TableRow>
            </TableHead>
            {tbody && <TableBody>
              {
                !!users.users.users && users.users.users.map((user, index) => {
                  return <TableRow key={uuidv4()} >
                      {
                        users.users.rows && users.users.rows.map((row, i) => {
                          if (row.label === "No") {
                            return <TableCell key={uuidv4()} >{index + 1}</TableCell>
                          }
                          if (row.label === "stageShape") {
                            return <TableCell key={uuidv4()}  ><div onClick={() => {
                              return setShowModal({ index: index, isShow: !showModal.isShow })
                            }} >{user["stageNumber"][2]} {user["stageShape"]}</div>
                            </TableCell>
                          }
                          return <TableCell key={uuidv4()} >{user[row.label]}</TableCell>
                        })
                      }
                      <TableCell>
                        <span onClick={() => { setShowRow({ ...showRow, [index]: !showRow[index] }) }}>
                          {showRow[index] ? <ExpandLess /> : <ExpandMore />}</span>
                      </TableCell>
                      {showRow[index] ? <TableRow>
                      any context
                  </TableRow> : null}
                    </TableRow>
                })
              }
            </TableBody>}
          </Table>
        </Paper>
        {showModal.isShow ? <ModalForm /> : null}
      </div>
    </UsersContext.Provider>
  );
}
