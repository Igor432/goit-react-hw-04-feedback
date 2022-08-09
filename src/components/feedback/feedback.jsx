import '../feedback/feedback.css'
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import { useState } from "react";
import { useEffect } from "react";

function Feedback ()  {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
const [total, setTotal] = useState(0)
const [positive, setPositive] = useState(0)



const addGood = () => {
  setGood(state => state +1 )
  countPositiveFeedbackPercentage()
  };


const addNeutral = () => {
  setNeutral(state => state +1 )
  countPositiveFeedbackPercentage()
  };


const addBad = () => {
  setBad(state => state + 1 )
  countPositiveFeedbackPercentage()

  }

 
    const countTotalFeedback = () =>  {
     setTotal(state => good + neutral + bad)
   
      }     
      

     const countPositiveFeedbackPercentage = () => {
       setPositive(state => 100 / total * good)
      }

      

      useEffect(() =>{
        countTotalFeedback();
      }, [good, bad, neutral])



    return (  

        <div>


<FeedbackOptions addGood={addGood} addNeutral={addNeutral} addBad={addBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive}/>
      </div>


    )
}








export default Feedback;