import { createContext, useState, useEffect } from 'react'
import fakeData from '../../fakeData.json'

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
    switchFakeData: boolean
    setSwitchFakeData: React.Dispatch<React.SetStateAction<boolean>>
    saveEmployee: (employee: Employee) => void
}>({
    employeeList: [],
    switchFakeData: false,
    setSwitchFakeData: () => {},
    saveEmployee: () => {}
})

export const EmployeeProvider = ({ children }: { children: React.ReactNode }) => {
    const [employeeList, setEmployeeList] = useState<Employee[]>([])
    const [switchFakeData, setSwitchFakeData] = useState<boolean>(false)
    const saveEmployee = (employee: Employee) => {
        setEmployeeList([...employeeList, employee])
    }

    useEffect(() => {
        console.log(switchFakeData)
        if (switchFakeData) {
            setEmployeeList(fakeData)
        } else {
            setEmployeeList([])
        }
    }, [switchFakeData])
    return (
        <EmployeeContext.Provider value={{ employeeList, setSwitchFakeData, switchFakeData, saveEmployee }}>
            {children}
        </EmployeeContext.Provider>
    )
}


