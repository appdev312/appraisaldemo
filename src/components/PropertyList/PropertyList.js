import React, { Component } from 'react';
import { Table } from 'antd';

import './PropertyList.css';



class PropertyList extends Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: 'Prop ID',
        dataIndex: 'propID',
        key: 'propID',
        render: propID => <button onClick={() => this.props.onClick(propID)}>{propID}</button>
      },
      {
        title: 'Owner Name',
        dataIndex: 'ownerName',
        key: 'ownerName',
      },
      {
        title: 'DBA Name',
        dataIndex: 'dbaName',
        key: 'dbaName',
      },
      {
        title: 'Description',
        dataIndex: 'legalDescription',
        key: 'legalDescription',
      },
      {
        title: 'Situs Street',
        dataIndex: 'situsStreet',
        key: 'situsStreet',
      },
    ];
  }

  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <Table dataSource={data} columns={this.columns} rowKey='propID' />
      </React.Fragment>
    );
  }
}

export default PropertyList;
