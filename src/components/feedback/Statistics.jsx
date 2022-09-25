import PropTypes from 'prop-types'; // ES6

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>

      <li class="statistics-item">Good: {good}</li>
      <li class="statistics-item">Neutral: {neutral}</li>
      <li class="statistics-item">Bad: {bad}</li>
      <li class="statistics-item">Total: {total}</li>
      <li class="statistics-item">
        Positive Feedback: {Math.floor(positivePercentage)}%
      </li>
    </div>
  );
};

Statistics.propTypes = {
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
