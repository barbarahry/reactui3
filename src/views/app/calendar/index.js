import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Calendar = React.lazy(() =>
  import(/* webpackChunkName: "second" */ './calendar')
);
const CalendarMenu = ({ match }) => (
  <Suspense fallback={<div className='loading' />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/calendar`} />
      <Route
        path={`${match.url}/calendar`}
        render={(props) => <Calendar {...props} />}
      />
      <Redirect to='/error' />
    </Switch>
  </Suspense>
);
export default CalendarMenu;
