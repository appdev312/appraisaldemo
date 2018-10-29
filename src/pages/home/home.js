import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './home.css';
import { propertySearch } from '../../actions/property';

class HomePage extends Component {
  componentDidMount() {
    this.props.propertySearch();
  }
  
  render() {
    const { loading, properties } = this.props;

    return (
      <React.Fragment>
        { loading && <div>Loading ...</div> }
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.property.properties,
  loading: state.property.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  propertySearch,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage));
