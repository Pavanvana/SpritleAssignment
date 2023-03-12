import './App.css'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import StudentLoginPage from './components/StudentLoginPage'
import MasterLoginPage from './components/MasterLoginPage'
import StudentSignup from './components/StudentSignUp'
import MasterSignup from './components/MasterSignUp'
import StudentQuestionPaper from './components/StudentQuestionPaper'
import MasterQuestionPaper from './components/MasterQuestionPaper'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/student/login" component={StudentLoginPage} />
    <Route exact path="/master/login" component={MasterLoginPage} />
    <Route exact path="/student/signup" component={StudentSignup} />
    <Route exact path="/master/signup" component={MasterSignup} />
    <Route exact path="/student/paper" component={StudentQuestionPaper} />
    <Route exact path="/master/paper" component={MasterQuestionPaper} />
  </Switch>
)

export default App
