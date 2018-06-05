import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Tab.css';

const Tab = props => (
  <NavLink
    activeStyle={{ backgroundColor: 'lightgreen' }}
    className="table-tab"
    id={props.children}
    to={props.path}
  >
    {props.children}
  </NavLink>
);

Tab.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Tab;
