import { useState } from "react";
import './List.scss';

type Employee = {
  firstName: string;
  lastName: string;
  startDate: string;
  department: string;
  dateOfBirth: string;
  city: string;
  state: string;
  zipCode: string;
}

type Order = { [key in keyof Employee]: 'asc' | 'desc' | null };

const List = () => {
  const [employeeList, setEmployeeList] = useState(
    JSON.parse(localStorage.getItem('employeeList') || '[]') as Employee[]
  );
  const [order, setOrder] = useState<Order>({
    firstName: null,
    lastName: null,
    startDate: null,
    department: null,
    dateOfBirth: null,
    city: null,
    state: null,
    zipCode: null,
  });

  const [lastClickedKey, setLastClickedKey] = useState<keyof Employee | null>(null);

  const handleSort = (key: keyof Employee) => {
    const sortedList = [...employeeList].sort((a, b) => {
      if (order[key] === 'asc') {
        return a[key] < b[key] ? -1 : 1;
      }
      return a[key] > b[key] ? -1 : 1;
    });
    setEmployeeList(sortedList);
    setOrder((prevOrder) => ({
      ...prevOrder,
      [key]: prevOrder[key] === 'asc' ? 'desc' : 'asc',
    }));
    setLastClickedKey(key);
  };

  return (
    <div>
      <h1>Current Employees</h1>
      <table>
        <thead>
          <tr>
            {Object.keys(order).map((key) => (
              <th key={key} onClick={() => handleSort(key as keyof Employee)}>
                {key} {key === lastClickedKey && order[key] !== null && (order[key] === 'asc' ? <span>&#9660;</span> : <span>&#9650;</span>)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {employeeList.map((employee, index) => (
          <tr key={index}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zipCode}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default List

