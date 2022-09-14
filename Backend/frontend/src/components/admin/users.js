import React, { useEffect, useState } from "react";
import axios from "axios";

function Users(props) {
  var datas = props.users;
  async function funn() {
    // const datavalue = await axios.get("/api/adminuserlist");
    // const final = datavalue.data;
    // return final;
    // axios.get("/api/adminuserlist"))
  }

  //   useEffect(() => {
  //     axios.get("api/adminuserlist").then((res) => {
  //       console.log(res.data);
  //       setdatas(res.data);
  //     });
  //   }, [0]);
  // datas.map((item, index)=>(console.log(item)))
  //   console.log("summ", datas);

  return (
    <div className="row my-5">
      <h3 className="fs-4 mb-3">Users</h3>
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width="50">
                #
              </th>
              <th className=" fw-bold" scope="col">
                username
              </th>
              <th className=" fw-bold" scope="col">
                Email Id
              </th>
              <th className=" fw-bold" scope="col">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((user, i) => {
              console.log(user.username);
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
