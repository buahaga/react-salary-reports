import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import './SelectYear.css';

class SelectYear extends Component {
    renderPrevLink = (year, tab) => {
      if (year < 2016) {
        return (
          <span className="select-year-btn-disabled">&#x21e6;</span>);
      }
      return (
        <NavLink className="select-year-btn" to={`/${year}/${tab}`} style={{ textDecoration: 'none' }}>&#x21e6;</NavLink>);
    };

    renderNextLink = (year, tab) => {
      if (year > new Date().getFullYear()) {
        return (
          <span className="select-year-btn-disabled">&#x21e8;</span>);
      }

      return (
        <NavLink className="select-year-btn" to={`/${year}/${tab}`} style={{ textDecoration: 'none' }}>&#x21e8;</NavLink>);
    };

    render() {
      const currentYear = this.props.year || 2018;
      const currentTab = this.props.location.pathname.split('/')[2];
      const prevYear = currentYear - 1;
      const nextYear = currentYear + 1;
      return (
        <div className="year-select">
          {this.renderPrevLink(prevYear, currentTab)}
          {currentYear}
          {this.renderNextLink(nextYear, currentTab)}
        </div>
      );
    }
}

SelectYear.propTypes = {
  year: PropTypes.number.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(SelectYear);
