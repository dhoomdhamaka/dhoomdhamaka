import React, { useEffect, useState } from "react";
import axios from "axios";

function Emergency(props) {
    var datas = props.users;
  return (
    <div className="row my-5">
      <h3 className="fs-4 mb-3">Emergency forms</h3>
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
              <th className=" fw-bold" scope="col">
                Order ID
              </th>
              <th className=" fw-bold" scope="col">
                Date
              </th>
              <th className=" fw-bold" scope="col">
                Service
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
                  <td>{user.previousorderId}</td>
                  <td>{user.date}</td>
                  <td>{user.nameoftheservice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Emergency;
