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

  const [search, setSearch] = useState<string>('');
  const [lastClickedKey, setLastClickedKey] = useState<keyof Employee | null>(null);
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setPageSize(Number(value));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredList = employeeList.filter((employee) => {
    return Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    );
  });

  const pageCount = Math.ceil(filteredList.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, filteredList.length - 1);
  const currentPageList = filteredList.slice(startIndex, endIndex + 1);

  const showNoResult = filteredList.length === 0;

  return (
    <>
      <h1>Current Employees</h1>
      <div className="top-container">
        <div className="page-size-container">
        <span>Page size:</span>
        <select value={pageSize} onChange={handlePageSizeChange} className="form-input">
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <input type="text" value={search} onChange={handleSearch} placeholder="Search" className="form-input search" />
      </div>
      {showNoResult ? (
        <p className="no-result">No result</p>
      ) : (
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
          {currentPageList.map((employee, index) => (
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
      )}
      {!showNoResult && (
        <div className="pagination-container">
          {/* <span>Page {currentPage} of {pageCount}</span> */}
          <div className="page-number-container">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index + 1}
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default List

