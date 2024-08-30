import Table from "../../component/table/Table";
import { Link } from 'react-router-dom';
import { EmployeeContext } from "../../context/useContext";
import { useContext } from "react";


// type Employee = {
//   firstName: string;
//   lastName: string;
//   startDate: string;
//   dateOfBirth: string;
//   street: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   department: string;
// }


const List = () => {
  // const employeeList = JSON.parse(localStorage.getItem('employeeList') || '[]') as Employee[]

  const {employeeList} = useContext(EmployeeContext)

  console.log("employeeList",employeeList)

  return (
    <>
    <Link to="/">Home</Link>
      <h1>Current Employees</h1>
      <Table list={employeeList} />
    </>
  )
}

export default List

