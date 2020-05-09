import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
// import Breadcrumb from '../../../containers/navs/Breadcrumb';
import MaterialTableDemo from '../MaterialTableDemo';

export default class Start extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs='12'>
            <h3>List</h3>

            <Separator className='mb-5' />
          </Colxx>
        </Row>
        <Row className='mb-4'></Row>
        <MaterialTableDemo />
      </Fragment>
    );
  }
}
