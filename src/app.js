import React from "react";
import Home from './pages/home.js'
import Sender from './pages/senderSignUp.js'
import Receiver from './pages/receiverSignUp.js'
import NotFound from './pages/notFound.js'
import About from './pages/about.js'
import Nav from './components/nav'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider, MenuButton } from 'theme-ui'
import theme from './theme'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sender' component={Sender} />
          <Route exact path='/receiver' component={Receiver} />
          <Route exact path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default hot(App);
