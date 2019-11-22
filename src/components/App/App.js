/* import note-modules */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Reader from '../Reader/Reader';
import publications from '../../data/publications.json';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/reader"
            /* eslint-disable-next-line */
            render={props => <Reader {...props} items={publications} />}
          />
          <Redirect
            to={{
              pathname: '/reader',
              search: '?item=1',
            }}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
