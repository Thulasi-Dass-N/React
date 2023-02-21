import React, { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Table from "./components/Table";

function App() {
  const [editing, setEditing] = useState(null);

 
  const [isEdit, setIsEdit] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [formObject, setFormObject] = useState({
    name: "",
    email: "",
    address: "",
  });
  

  const onValChange = (event: { target: { name: any; value: any } }) => {
    const value = (res: any) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    console.log("value");

    setFormObject(value);
  };
  const onFormSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event);

    event.preventDefault();

    const idNumber = parseInt(Math.random() * 1000);
    console.log("form", formObject);
    const newdata = {
      id: idNumber,
      name: formObject?.name,
      email: formObject?.email,
      address: formObject?.address,
    };
    setTableData((previousValue) => {
      return [...previousValue, newdata];
    });
    const isEmpty = { name: "", email: "", address: "" };
    setFormObject(isEmpty);
  };
  const deleteTableRows = (index: any) => {
    console.log("index", index);
    console.log(tableData, "LOG");
    const rows = [...tableData];

    rows.splice(index, 1);

    setTableData(rows);
  };

  const editTableRows = (name: any, mail: any, pro: any, Id: any) => {
    console.log(name, mail, pro, Id, "id");

    const isEmpty = { name: name, email: mail, profile: pro, id: Id };
    setEditing({ ...isEmpty });
  };

  const onUpdate = (event: any) => {
    console.log("update", event);

    setTableData((previousValue) => {
      return previousValue.map((data) => {
        if (data.id === editing?.id) {
          return editing;
        } else {
          return data;
        }
      });
    });
    resetEditing();
  };

  const resetEditing = () => {
    setIsEdit(false);
    setEditing(null);
  };

 

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop:100
      }}
    >
    

      <div>
        {!isEdit ? (
          <div className="row mb-4 w-50">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={onValChange}
                value={formObject.name}
                name="name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={onValChange}
                value={formObject.email}
                name="email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Profile"
                onChange={onValChange}
                value={formObject.address}
                name="profile"
              />
            </div>
            <div className="d-grid">
              <input
                type="submit"
                onClick={onFormSubmit}
                className="btn btn-success"
              />
            </div>
          </div>
        ) : (
          <div className="row mb-4 w-50">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={editing?.name}
                onChange={(e) => {
                  setEditing((previousValue: any) => {
                    return { ...previousValue, name: e.target.value };
                  });
                }}
                name="name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={editing?.email}
                onChange={(e) => {
                  setEditing((previousValue: any) => {
                    return { ...previousValue, email: e.target.value };
                  });
                }}
                name="email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Profile"
                value={editing?.address}
                onChange={(e) => {
                  setEditing((previousValue: any) => {
                    return { ...previousValue, address: e.target.value };
                  });
                }}
                name="address"
              />
            </div>
            <div className="d-flex justify-content-around">
              <input
                type="submit"
                onClick={onUpdate}
                className="btn btn-danger"
              />
            </div>
          </div>
        )}
      </div>
      <Table
        tableData={tableData}
        deleteTableRows={deleteTableRows}
        editTableRows={editTableRows}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </div>
  );
}

export default App;
