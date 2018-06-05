import React from 'react';
import PropTypes from 'prop-types';
import Tab from './tab/Tab';

const Tabs = (props) => {
  const { year } = props;
  return (
    <div>
      <Tab path={`/${year}/tech`}>Tech</Tab>
      <Tab path={`/${year}/qualification`}>Skill</Tab>
      <Tab path={`/${year}/city`}>City</Tab>
    </div>
  );
};

Tabs.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Tabs;
