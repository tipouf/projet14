
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import List from '../page/list/List'

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/list" exact component={List} />
    </Router>
  )
}

export default Routes

