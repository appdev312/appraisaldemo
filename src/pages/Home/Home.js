import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Home.css';
import { propertySearch } from '../../actions/property';
import PropertyList from '../../components/PropertyList';
import Loader from '../../components/Loader';
import PropertyModal from '../../containers/PropertyModal';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPropID: null,
    };
    this.onClickProperty = this.onClickProperty.bind(this);
  }

  componentDidMount() {
    this.props.propertySearch();
  }
  
  onClickProperty(propID) {
    this.setState({
      currentPropID: propID,
    });
  }

  render() {
    const { loading, properties } = this.props;

    return (
      <React.Fragment>
        { loading && <Loader /> }
        {
          !loading &&
          properties.results.length > 0 &&
          <PropertyList data={properties.results} onClick={this.onClickProperty} />
        }
        <PropertyModal propID={this.state.currentPropID} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.property.propertySearch,
  loading: state.property.propertySearch.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  propertySearch,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage));
