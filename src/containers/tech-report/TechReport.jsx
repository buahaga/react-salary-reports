import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initFilters, changeFilter, filterData } from '../../actions/action';
import Filter from '../../components/filter/Filter';
import Table from '../../components/table/Table';

class TechReport extends Component {
  componentDidMount() {
    this.props.initFilters('qualification');
  }

  onChange = (key) => {
    this.props.changeFilter(key);
  };

  render() {
    const { filters, data } = this.props.data;
    return (
      <div id="tech-report" className="tech-report">
        <Filter filters={filters} onChange={key => this.onChange(key)} />
        <Table data={data} tab="tech" />
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
  initFilters: (key) => {
    dispatch(initFilters(key));
    dispatch(filterData());
  },
  changeFilter: (key) => {
    dispatch(changeFilter(key));
    dispatch(filterData());
  },
});

TechReport.propTypes = {
  data: PropTypes.shape({
    filters: PropTypes.object,
    data: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  changeFilter: PropTypes.func.isRequired,
  initFilters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TechReport);
