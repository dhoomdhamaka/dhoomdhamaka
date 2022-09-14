import React, { useEffect, useState } from "react";
import axios from "axios";

function Vendors(props) {
    var datas = props.vendordata;
  
  return (
    <div className="row my-5">
      <h3 className="fs-4 mb-3">Vendors forms</h3>
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width="50">
                #
              </th>
              <th className=" fw-bold" scope="col">
                Name
              </th>
              <th className=" fw-bold" scope="col">
                Email Id
              </th>
              <th className=" fw-bold" scope="col">
                Phone Number
              </th>
              <th className=" fw-bold" scope="col">
                Area
              </th>
              <th className=" fw-bold" scope="col">
                Vendor Type
              </th>
              <th className=" fw-bold" scope="col">
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((user, i) => {
              console.log(user.username);
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNo}</td>
                  <td>{user.area}</td>
                  <td>{user.vendorType}</td>
                  <td>{user.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vendors;
