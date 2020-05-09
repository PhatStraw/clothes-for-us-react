import React from "react";
import Home from './pages/home.js'
import Sender from './pages/senderSignUp.js'
import Receiver from './pages/receiverSignUp.js'
import NotFound from './pages/notFound.js'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sender' component={Sender} />
          <Route exact path='/receiver' component={Receiver} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default hot(App);
