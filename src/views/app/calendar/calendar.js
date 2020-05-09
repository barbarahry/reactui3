import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
// import Breadcrumb from '../../../containers/navs/Breadcrumb';
import DatePickerExamples from '../../../containers/forms/DatePickerExamples';

export default class Calendar extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs='12'>
            <h3>Calendar</h3>
            {/* <Breadcrumb heading='menu.second' match={this.props.match} /> */}
            <Separator className='mb-5' />
          </Colxx>
        </Row>
        <Row className='mb-4'></Row>
        <DatePickerExamples />
      </Fragment>
    );
  }
}
