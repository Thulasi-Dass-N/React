import { useState } from "react";
import { Button } from "react-bootstrap";

const Table = ({
  tableData,
  deleteTableRows,
  editTableRows,
  isEdit,
  setIsEdit,
}) => {
  const [rows, setRows] = useState(tableData);

  return (
    <table className="table w-75">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Profile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data: any, index: any) => {
          const name = data?.name;
          const mail = data?.email;
          const pro = data?.profile;
          const Id = data?.id;
          return (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>

              <td>
                <Button
                  className="btn btn-dark"
                  onClick={() => deleteTableRows(index)}
                >
                  Delete
                </Button>
              </td>

              <td>
                <Button
                  className="btn btn-dark"
                  onClick={() => {
                    editTableRows(name, mail, pro, Id);
                    setIsEdit(!isEdit);
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
