import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./userListdata";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => (
        <div className="usernamelist">
          <img src={params.row.avatar} className="userlistimg" alt="avatar" />
          {params.row.username}
        </div>
      ),
    },
    { field: "email", headerName: "Email", width: 250 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "transaction", headerName: "Transaction", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <>
          <div className="buttons">
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="userListdelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="userList">
        <Paper sx={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSizeOptions={[8]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                  page: 0,
                },
              },
            }}
            checkboxSelection
            sx={{ border: 0 }}
            disableRowSelectionOnClick
          />
        </Paper>
      </div>
    </>
  );
};

export default UserList;
