// import Table from "../../component/table/Table";
import { Link } from 'react-router-dom';
import { EmployeeContext } from "../../context/useContext";
import { useContext } from "react";
import { Table }  from 'react-auto-table-ts';
const List = () => {

  const {employeeList} = useContext(EmployeeContext)


  return (
    <div className="form-container">
    <Link to="/">Home</Link>
      <h1>Current Employees</h1>
      <Table list={employeeList} extraProps={{displayPagination: true}}/>
    </div>
  )
}

export default List

