import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 'hidden',
    };
  }

  onMouseEnter = () => {
    this.setState({ visible: 'visible' });
  };

  onMouseLeave = () => {
    this.setState({ visible: 'hidden' });
  };

  render() {
    const width = 40;
    const offset = this.props.index * width;
    const chartHeight = 195;
    return (
      <g onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {this.props.children}
        <text
          className="tooltip-content"
          transform={`translate(${offset},${chartHeight - this.props.height})`}
          style={{
          visibility: this.state.visible,
        }}
        >
          {this.props.content}
        </text>
      </g>);
  }
}

Tooltip.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};


export default Tooltip;
