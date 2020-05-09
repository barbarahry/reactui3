import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const ListMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-list-menu" */ './list')
);
const CalendarMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-calendar-menu" */ './calendar')
);
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "viwes-blank-page" */ './forms')
);
const FormMenu = React.lazy(() =>
  import(/* webpackChunkName: "viwes-form-menu" */ './form')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className='dashboard-wrapper'>
          <Suspense fallback={<div className='loading' />}>
            <Switch>
              <Redirect exact from={`${match.url}/`} to={`${match.url}/list`} />

              <Route
                path={`${match.url}/list`}
                render={(props) => <ListMenu {...props} />}
              />
              <Route
                path={`${match.url}/calendar`}
                render={(props) => <CalendarMenu {...props} />}
              />
              <Route
                path={`${match.url}/blank-page`}
                render={(props) => <BlankPage {...props} />}
              />
              <Route
                path={`${match.url}/form`}
                render={(props) => <FormMenu {...props} />}
              />
              <Redirect to='/error' />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(connect(mapStateToProps, {})(App));
