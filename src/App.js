import React, { Component } from 'react';
import { responseJSON } from './data';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tableData: responseJSON,
      AMCount: responseJSON.length
    }
  }
  render() {
    const getTableData = responseJSON.map((item, idx) => {
      let gridRow = <tr key={idx}>
        <td className="font-weight-bold border-top-0 border-bottom">{item.appName}</td>
        <td className=" border-top-0 border-bottom ">{item.status}</td>
        <td className="text-warning border-warning font-weight-bold border-top-0 border-bottom ">{item.odc}</td>
        <td className={"font-weight-bold border-top-0 border-bottom "+ (item.tdc === "PASS" ? "text-success border-success": "text-danger border-danger")}>{item.tdc}</td>
        <td className={"font-weight-bold border-top-0 border-bottom  "+ (item.sdc === "PASS" ? "text-success border-success": "text-danger border-danger")}>{item.sdc}</td>
        <td className=" border-top-0 border-bottom ">{item.comments}</td>
      </tr>
      return (<React.Fragment>{gridRow}</React.Fragment>)
    })
    return (
      <div className="App container p-5">
        <div className="row text-light bg-dark p-2 ">
          <div className="col-6 text-left font-weight-bold">
            Wireless Digital Channel Dialy Health Checkup Summary
        </div>
          <div className="col-6 text-right font-weight-bold">
            {this.state.AMCount} Applcation/Monitiring
        </div>
        </div>
        <table className="table text-left">
          <thead>
            <tr className="text-muted">
              <th scope="col">Applcation/Monitiring</th>
              <th scope="col">Status</th>
              <th scope="col">ODC</th>
              <th scope="col">TDC</th>
              <th scope="col">SDC</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody>
            {getTableData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
