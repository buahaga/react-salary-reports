import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData, filterData, setMonthLimits } from '../../actions/action';
import ChartReport from '../../components/chart-report/ChartReport';
import TableReport from '../../components/table-report/TableReport';
import './MainReport.css';

class MainReport extends Component {
  componentWillMount() {
    this.props.fetchData(this.props.year);
  }

  componentDidUpdate(prev) {
    if (prev.year !== this.props.year) {
      this.props.fetchData(this.props.year);
    }
  }

  onFilterChange = (left, right) => {
    this.props.filterDataByMonth(left, right);
  };

  renderReports() {
    const {
      data, year, startMonth, endMonth,
    } = this.props;

    if (!data.length) {
      return <span>Loading...</span>;
    }

    return (
      <div className="main-report">
        <ChartReport
          data={data}
          year={year}
          left={startMonth}
          right={endMonth}
          onFilterChange={this.onFilterChange}
        />
        <TableReport year={year} />
      </div>);
  }

  render() {
    return this.renderReports();
  }
}

const mapStateToProps = (state, props) => ({
  data: state.data.fullData,
  startMonth: state.data.startMonth,
  endMonth: state.data.endMonth,
  year: Number(props.match.params.year),
});

const mapDispatchToProps = dispatch => ({
  fetchData: (year) => {
    dispatch(fetchData(year));
  },
  filterDataByMonth: (left, right) => {
    dispatch(setMonthLimits(left, right));
    dispatch(filterData());
  },
});

MainReport.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  endMonth: PropTypes.number.isRequired,
  fetchData: PropTypes.func.isRequired,
  filterDataByMonth: PropTypes.func.isRequired,
  startMonth: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainReport);
