import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
// import Breadcrumb from '../../containers/navs/Breadcrumb';
import InputAdornments from '../../components/InputAdornments';
import ButtonSave from '../../components/buttons/ButtonSave';

export default class BlankPage extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs='12'>
            <h3>Forms</h3>
            <Separator className='mb-5' />
          </Colxx>
        </Row>
        <Row></Row>
        <InputAdornments className='mt-5' />

        <ButtonSave />
      </Fragment>
    );
  }
}
