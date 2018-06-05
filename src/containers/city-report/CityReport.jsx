import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../../components/table/Table';
import { initFilters, filterData } from '../../actions/action';

class CityReport extends Component {
  constructor(props) {
    super(props);
    props.initFilters();

  }

  render() {
    const { data } = this.props;
    return (
      <div id="city-report" className="city-report">
        <Table data={data} tab="city" />
      </div>);
  }
}

const mapStateToProps = state => ({ data: state.data.data });

const mapDispatchToProps = dispatch => ({
  initFilters: (key) => {
    dispatch(initFilters(key));
    dispatch(filterData());
  },
});

CityReport.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  initFilters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CityReport);
