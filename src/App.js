import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom'
import   Header   from './Components/Header/Header'
import Home from './pages/Home/Home';
const App = () => {
  return (
    <Router>
            <GlobalStyle />
      <Header />  
      <Switch>
        <Route path="/" exact component={ Home }/>
      </Switch>
     </Router>
  )
}

export default App
