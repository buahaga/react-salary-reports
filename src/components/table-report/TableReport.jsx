import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Tabs from '../tabs/Tabs';
import CityReport from '../../containers/city-report/CityReport';
import TechReport from '../../containers/tech-report/TechReport';
import SkillReport from '../../containers/skill-report/SkillReport';
import './TableReport.css';

const TableReport = (props) => {
  const { year } = props;
  return (
    <React.Fragment>
      <Tabs year={year} />
      <div className="table-report">
        <Switch>
            <Route path="/:year/city" component={CityReport} />
            <Route path="/:year/tech" component={TechReport} />
            <Route path="/:year/qualification" component={SkillReport} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

TableReport.propTypes = {
  year: PropTypes.number.isRequired,
};

export default TableReport;
