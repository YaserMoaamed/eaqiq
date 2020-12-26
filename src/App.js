import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as  Router } from 'react-router-dom'
import { Header } from './Components'
const App = () => {
  return (
    <Router>
            <GlobalStyle />
            <Header />  
     </Router>
  )
}

export default App
