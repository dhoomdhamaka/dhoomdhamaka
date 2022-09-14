import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Orderslist(props) {
    const forms = props.formdata
    console.log("sss",forms);
  return (
    <div className="row my-12">
    <h3 className="fs-4 mb-3">Details</h3>
    <div className="col">
      <table className="table bg-white rounded shadow-sm  table-hover">
        <thead>
          <tr>
            <th scope="col">
              Name
            </th>
            <th className=" fw-bold" scope="col">
              Order Details
            </th>
            
          </tr>
        </thead>
        <tbody>
        <tr>
          <th>Birthday Person Name</th>
          <td>{forms[0].BirthdayPersonName}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{forms[0].City}</td>
        </tr>
        <tr>
          <th>Regular Decoration</th>
          <td>{forms[0].Decoration.RegularDecoration}</td>
        </tr>
        <tr>
          <th>Theme Decoration</th>
          <td>{forms[0].Decoration.ThemeDecoration}</td>
        </tr>
        <tr>
          <th>Food Type</th>
          <td>{forms[0].Food.Foodtype}</td>
        </tr>
        <tr>
          <th>Food Items</th>
          <td>{forms[0].Food.items}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{forms[0].Gender}</td>
        </tr>
        <tr>
          <th>Max Budget</th>
          <td>{forms[0].MaxBudget}</td>
        </tr>
        <tr>
          <th>Min Budget</th>
          <td>{forms[0].MinBudget}</td>
        </tr>
        <tr>
          <th>Number Of Guests</th>
          <td>{forms[0].NoOfGuests}</td>
        </tr>
        <tr>
          <th>Invitation</th>
          <td>{forms[0].OtherServiceValues.invitation}</td>
        </tr>
        <tr>
          <th>Venue One Name</th>
          <td>{forms[0].OtherServiceValues.venues.venue1.name}</td>
        </tr>
        <tr>
          <th>Venue One Place</th>
          <td>{forms[0].OtherServiceValues.venues.venue1.place}</td>
        </tr>
        <tr>
          <th>Venue two Name</th>
          <td>{forms[0].OtherServiceValues.venues.venue2.name}</td>
        </tr>
        <tr>
          <th>Venue two Place</th>
          <td>{forms[0].OtherServiceValues.venues.venue2.place}</td>
        </tr>
        <tr>
          <th>Venue three Name</th>
          <td>{forms[0].OtherServiceValues.venues.venue3.name}</td>
        </tr>
        <tr>
          <th>Venue three Place</th>
          <td>{forms[0].OtherServiceValues.venues.venue3.place}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[0]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[1]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[2]}</td>
        </tr>
        <tr>
          <th>Other Services</th>
          <td>{forms[0].OtherServices[3]}</td>
        </tr>
        <tr>
          <th>Dance</th>
          <td>{forms[0].Shows.dancevalues}</td>
        </tr>
        <tr>
          <th>Dj</th>
          <td>{forms[0].Shows.dj}</td>
        </tr>
        <tr>
          <th>music</th>
          <td>{forms[0].Shows.musicvalues}</td>
        </tr>
        <tr>
          <th>Shows</th>
          <td>{forms[0].Shows.show[0]}</td>
        </tr>
        <tr>
          <th>Shows</th>
          <td>{forms[0].Shows.show[1]}</td>
        </tr>
        <tr>
          <th>Shows</th>
          <td>{forms[0].Shows.show[2]}</td>
        </tr>
        <tr>
          <th>Shows</th>
          <td>{forms[0].Shows.show[3]}</td>
        </tr>
        <tr>
          <th>Special Service</th>
          <td>{forms[0].SpecialService}</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>{forms[0].date}</td>
        </tr>
        <tr>
          <th>From Time</th>
          <td>{forms[0].FromTime}</td>
        </tr>
        <tr>
          <th>To Time</th>
          <td>{forms[0].ToTime}</td>
        </tr>        
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Orderslist