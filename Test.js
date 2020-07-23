/*This Component can be used as a testing component to try out things on lie server before making final changes in other fies/components.
It can also be used for conversion from class based components to fucntion based components OR vice versa.
To get started quickly on comparison between these two components which It can be used for testing purposes ; Two components are placed in testing folder which server the same purpose just in different ways. One uses Class & other uses functional-hooks based syntax to achieve the same goal.

*/

import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';


//Sample Model - Just replace it with a middleware such as Nodejs Api request
const data = [
  { id: 1, name: 'Spider-Man', superPower: 'cling to walls' },
  { id: 2, name: 'Ant-man', superPower: 'shrink size at will' },
  { id: 3, name: 'Batman', superPower: 'genius intellect' },
];

//Smart/Container/Controller Components

 function fetchFarAwayAPI() {
   return data;
 }

export default function SuperHeroListContainer(){
 
    const[superHeroData, setsuperHeroData]= useState([]);

   useEffect(() => {
     const data = fetchFarAwayAPI();
     setsuperHeroData(data);
   },
 );

    return <SuperHeroList superHeroData={superHeroData} />
}


//Presentational/Dumb/View Components

const SuperHeroList = ({ superHeroData }) => {
  return (
    <div className="text-center">
      <h2 className="py-4">Super Hero List 1</h2>
      <table className="table px-2 table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">super power</th>
          </tr>
        </thead>
        <tbody>
          {
            _(superHeroData).map(item => {
              return (
                <SuperHeroRow key={item.id} row={item} />
              )
            }).value()
          }
        </tbody>
      </table>
    </div>
  )
}

const SuperHeroRow = ({ row }) => {
  const { id, name, superPower } = row;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{superPower}</td>
    </tr>
  );
}