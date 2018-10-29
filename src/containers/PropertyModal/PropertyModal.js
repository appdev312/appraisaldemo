import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal } from 'antd';

import './PropertyModal.css';
import { singleProperty } from '../../actions/property';
import Loader from '../../components/Loader';

class PropertyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState({
      visible: false,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.propID !== prevProps.propID) {
      this.props.singleProperty(this.props.propID);
      this.setState({
        visible: true,
      });
    }
  }

  render() {
    const { loading, property } = this.props;
    const single = property.results && property.results.length > 0 ? property.results[0] : {};

    return (
      <React.Fragment>
        <Modal
          title='Property Detail'
          visible={this.state.visible}
          onCancel={this.hideModal}
          onOk={this.hideModal}
        >
          { loading && <Loader /> }
          { !loading && 
            <div>
              <p><strong>Prop ID:</strong> { single.propID }</p>
              <p><strong>Subdivision:</strong> { single.subdivisionCd }</p>
              <p><strong>Geo ID:</strong> { single.geoID }</p>
              <p><strong>Reconciled Market:</strong> { single.reconciledMarket }</p>
            </div>
          }
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  property: state.property.singleProperty,
  loading: state.property.singleProperty.loading,
  error: state.property.singleProperty.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  singleProperty,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PropertyModal));
