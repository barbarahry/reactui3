import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';
import InputAdornments from '../../components/InputAdornments';
import ButtonSave from '../../components/buttons/ButtonSave';

export default class InputForm extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs='12'>
            <Breadcrumb heading='menu.blank-page' match={this.props.match} />
            <Separator className='mb-5' />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs='12' className='mb-4'>
            <p>{/* <IntlMessages id='menu.blank-page' /> */}</p>
          </Colxx>
        </Row>
        <InputAdornments className='mt-5' />

        <ButtonSave />
      </Fragment>
    );
  }
}
