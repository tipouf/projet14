import './App.scss'
import Layout from './template/Layout'
import { AllRoutes } from './routes/Route'
import { EmployeeProvider } from './context/useContext'

function App() {

  return (
    <EmployeeProvider>
      <Layout>
        <AllRoutes />
      </Layout>
    </EmployeeProvider>
  )
}

export default App

