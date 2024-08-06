const List = () => {
  const employeeList = JSON.parse(localStorage.getItem('employeeList') || '[]')
  return (
    <div>
      <h1>List</h1>
      <ul>
      {employeeList.map((employee, index) => (
        <li key={index}>
          {employee.firstName} {employee.lastName}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default List