import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './row/Row';
import { agregateSalaryByKey } from '../../utils/salaryHelpers';
import './Table.css';

class Table extends Component {
  comparator = (a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] === b[0]) {
      return 0;
    }
    return -1;
  };

  renderTable() {
    const { data, tab } = this.props;
    const agregator = agregateSalaryByKey(data, tab);

    return Object
      .entries(agregator)
      .sort(this.comparator)
      .map(([key, salary]) => <Row type={key} key={key} >{salary}</Row>);
  }

  render() {
    return (
      <div className="tableBody">
        {this.renderTable()}
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  tab: PropTypes.string.isRequired,
};

export default Table;
