import React, { Component, PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement,onIncrementAsync }) =>
      <div>
        <button onClick={onIncrementAsync}>
          点击后一秒数据发生变化 +1
        </button>
        <button onClick={onIncrement}>
          点击数据增加 1
        </button>
        {' '}
        <button onClick={onDecrement}>
          点击数据减少 1
        </button>
        <hr />
        <div>
          计数:当前合计有效次数为 {value} 次
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
