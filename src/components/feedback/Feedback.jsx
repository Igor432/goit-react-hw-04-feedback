import '../feedback/feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { useState } from 'react';
import Notification from './Notification';
import Section from './Section';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
  const countTotalFeedback = () => {
    return good + neutral + bad

  };
  

  const countPositiveFeedbackPercentage = total => {
    const positive = (100 / total) * good;
return positive
  };

  const addGood = () => {
    setGood(state => state + 1);
  };

  const addNeutral = () => {
    setNeutral(state => state + 1);
  };

  const addBad = () => {
    setBad(state => state + 1);
  };

const total = countTotalFeedback()
const positive = countPositiveFeedbackPercentage(total)

  return (
    <div>
      <FeedbackOptions
        addGood={addGood}
        addNeutral={addNeutral}
        addBad={addBad}
      />
      {total === 0 ? (
        <Notification message="Please, leave feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        </Section>
      )}
    </div>
  );
}

export default Feedback;
