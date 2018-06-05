import React from 'react';
import PropTypes from 'prop-types';
import './Row.css';

const Row = props => (
  <li className="tableRow">
    <span className="tableCell">{props.type}</span>
    <span className="tableCell">{props.children}</span>
  </li>
);

Row.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired,
};

export default Row;
