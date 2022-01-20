import React from 'react';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total !== 0 ? (
        <ul>
          <li>
            <p>
              Good:<span>{good}</span>
            </p>
          </li>
          <li>
            <p>
              Neutral:<span>{neutral}</span>
            </p>
          </li>
          <li>
            <p>
              Bad:<span>{bad}</span>
            </p>
          </li>
          <li>
            <p>
              Total:<span>{total}</span>
            </p>
          </li>
          <li>
            <p>Positive feedback:{positivePercentage}%</p>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
export default Statistics;
