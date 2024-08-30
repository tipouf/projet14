import { createContext, useState } from 'react'

export type Employee = {
    firstName: string
    lastName: string
    startDate: string
    dateOfBirth: string
    street: string
    city: string
    state: string
    zipCode: string
    department: string
}

export const EmployeeContext = createContext<{
    employeeList: Employee[]
    saveEmployee: (employee: Employee) => void
}>({
    employeeList: [],
    saveEmployee: () => {}
})

export const EmployeeProvider = ({ children }: { children: React.ReactNode }) => {
    const [employeeList, setEmployeeList] = useState<Employee[]>([])
    const saveEmployee = (employee: Employee) => {
        setEmployeeList([...employeeList, employee])
    }
    return (
        <EmployeeContext.Provider value={{ employeeList, saveEmployee }}>
            {children}
        </EmployeeContext.Provider>
    )
}

