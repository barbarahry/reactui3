import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Form = React.lazy(() => import(/* webpackChunkName: "form" */ './form'));
const FormMenu = ({ match }) => (
  <Suspense fallback={<div className='loading' />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/form`} />
      <Route
        path={`${match.url}/form`}
        render={(props) => <Form {...props} />}
      />
      <Redirect to='/error' />
    </Switch>
  </Suspense>
);
export default FormMenu;
