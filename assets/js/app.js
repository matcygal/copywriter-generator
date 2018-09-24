import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import CookieConsent from "react-cookie-consent";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Nav from "./components/nav";
import Welcome from "./components/welcome";
import Generator from "./components/generator";
import Docs from "./components/docs";
import About from "./components/about";
import Fail from "./components/fail";

require('./../css/app.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipsum: '',
      int: 1,
      value: 2
    }
  }
  render() {
    return (
      <div style={{ maxWidth: '970px', marginLeft: 'auto', marginRight: 'auto' }}>
        <BrowserRouter>
          <Fragment>
            <Nav />
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="animation" timeout={450}>
                  <Switch location={location}>
                    <Route path='/' exact render={() => <Welcome />} />
                    <Route path='/app' exact render={() => <Generator />} />
                    <Route path='/documentation' exact render={() => <Docs />} />
                    <Route path='/about' exact render={() => <About />} />
                    <Route render={() => <Fail />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </Fragment>
        </BrowserRouter>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          style={{ background: "white", textAlign: "center", borderTop: "1px solid black" }}
          buttonStyle={{ color: "#3f51b5", background: "white", fontSize: "0.875rem", border: '1px solid rgba(63, 81, 181, 0.5)', borderRadius: '4px' }}
          expires={150}
        >
          <span style={{ color: 'black', fontSize: "0.75rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}>Korzystanie z tego serwisu jest jednoczesnym wyrażeniem zgody na używanie cookies, zgodnie z aktualnymi ustawieniami przeglądarki. Można zmienić ustawienia w przeglądarce tak aby nie pobierała ona cookies.</span>
        </CookieConsent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
