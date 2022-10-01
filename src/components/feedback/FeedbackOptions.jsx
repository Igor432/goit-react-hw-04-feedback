import style from '../feedback/feedback.module.css';
import PropTypes from 'prop-types'; // ES6


const FeedbackOptions = ({ addBad, addGood, addNeutral }) => {
  return (
    <div>
  

      <button className={style.feedback_button}  type="button" onClick={addGood}>
        Good
      </button>
      <button className={style.feedback_button} type="button" onClick={addNeutral}>
        Neutral
      </button>
      <button className={style.feedback_button}  type="button" onClick={addBad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  addGood: PropTypes.func.isRequired,
  addNeutral: PropTypes.func.isRequired,
  addBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
