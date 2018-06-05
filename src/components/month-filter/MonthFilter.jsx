import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterHandler from './filter-handler/FilterHanlder';
import FilterRange from './filter-range/FilterRange';
import './MonthFilter.css';

class MonthFilter extends Component {
  constructor(props) {
    super(props);
    const { left, range } = props;
    this.state = {
      left,
      right: range,
      range,
    };
  }

  componentWillUpdate(nextProps) {
    const { left, right } = nextProps;
    if (right !== this.props.right || left !== this.props.left) {
      this.setState({
        ...nextProps,
      });
    }
  }

  onLeftHandlerMove = (movement) => {
    this.movementHandler(movement, 'left');
  };

  onRightHandlerMove = (movement) => {
    this.movementHandler(movement, 'right');
  };

  onRangeHandlerMove = (movement) => {
    const step = 40;
    const offset = Math.round(movement / step);
    const left = this.props.left + offset;
    const right = this.props.right + offset;
    if (left === this.state.left || right === this.state.right) {
      return;
    }
    if (left >= 1 && right <= this.state.range) {
      this.setState({
        left,
        right,
      });
    }
  };

  onMouseUp = () => {
    const { left, right, range } = this.state;
    this.props.onFilterChange(left, right, range);
  };

  movementHandler = (movement, side) => {
    const step = 40;
    const offset = Math.round(movement / step);
    const tempState = { ...this.state };
    tempState[side] = this.props[side] + offset;
    if (tempState[side] === this.state[side]) {
      return;
    }
    const isHandlersCollision = tempState.left <= tempState.right;
    const isHandlersInRange = tempState.left > 0 && tempState.right <= this.state.range;
    if (isHandlersCollision && isHandlersInRange) {
      this.setState({
        ...tempState,
      });
    }
  };

  renderMonthDescription = () => {
    const months = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec',
    ];
    const lastMonth = this.state.range;
    return (

      months.slice(0, lastMonth).map(item => <span key={item} className="month">{item}</span>)
    );
  };

  render() {
    const left = (this.state.left - 1) * 40;
    const right = (this.state.right * 40) - 20;
    return (
      <React.Fragment>
        <div className="month-filter">
          <FilterHandler x={left} onDrag={this.onLeftHandlerMove} onMouseUp={this.onMouseUp} />
          <FilterRange
            x={left}
            width={right - left}
            onDrag={this.onRangeHandlerMove}
            onMouseUp={this.onMouseUp}
          />
          <FilterHandler x={right} onDrag={this.onRightHandlerMove} onMouseUp={this.onMouseUp} />
        </div>
        <div className="month-description">
          {this.renderMonthDescription()}
        </div>
      </React.Fragment>
    );
  }
}

MonthFilter.propTypes = {
  left: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  range: PropTypes.number.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default MonthFilter;
