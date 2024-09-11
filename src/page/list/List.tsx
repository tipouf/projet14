// import Table from "../../component/table/Table";
import { Link } from 'react-router-dom';
import { EmployeeContext } from "../../context/useContext";
import { useContext } from "react";
import { Table }  from 'react-auto-table-ts-alpha';

import fakeData from "../../../fakeData.json"

const List = () => {

  const {employeeList} = useContext(EmployeeContext)

  const list = employeeList.length > 0 ? employeeList : fakeData

  return (
    <div className="form-container">
    <Link to="/">Home</Link>
      <h1>Current Employees</h1>
      <Table list={list} />
    </div>
  )
}

export default List

