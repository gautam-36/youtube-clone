import React, { useState } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from 'react-bootstrap';
import HomeScreen from './screen/homeScreen/HomeScreen';
import "./_apps.scss"
import LoginScreen from './screen/loginScreen/LoginScreen';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className="app__main" >
          {children}
        </Container>
      </div>
    </>
  )
}







const App = () => {


  return <Router>
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/auth">
        <LoginScreen />
      </Route>
      <Route path="/search">
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>
      <Route>
        <Redirect to="/"/>
      </Route>
    </Switch>
  </Router>



}

export default App