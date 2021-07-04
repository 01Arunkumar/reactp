import React, { Component } from 'react';
import {empdata} from "./Staticdata";
class Table extends Component {
    constructor= ()=>{

    }
    render() {
        return (
            <div>
               <table class="table table-hover">
     <thead>
      <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
    </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table> 
            </div>
        )
    }
}

export default Table;
