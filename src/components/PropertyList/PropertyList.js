import React, { Component } from 'react';
import { Table } from 'antd';

import './PropertyList.css';

const columns = [
  {
    title: 'Prop ID',
    dataIndex: 'propID',
    key: 'propID',
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

class PropertyList extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <Table dataSource={data} columns={columns} />
      </React.Fragment>
    );
  }
}

export default PropertyList;
