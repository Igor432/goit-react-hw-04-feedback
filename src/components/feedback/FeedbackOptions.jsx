var PropTypes = require('prop-types'); // ES5 with npm

const FeedbackOptions = ({ addBad, addGood, addNeutral }) => {
  return (
    <div>
      <p>Please, leave feedback</p>

      <button class="feedback-button" type="button" onClick={addGood}>
        Good
      </button>
      <button class="feedback-button" type="button" onClick={addNeutral}>
        Neutral
      </button>
      <button class="feedback-button" type="button" onClick={addBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
