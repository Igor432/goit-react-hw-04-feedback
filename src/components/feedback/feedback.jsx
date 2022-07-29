import { Component } from "react";
import '../feedback/feedback.css'


class Feedback extends Component {

   

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

     
totalCount = 0
PositiveFeedbackPercentage = 0;

    

      addGood = () => {
       
        this.setState(prevState => {
            return {good: prevState.good + 1}
      }, this.countTotalFeedback)
      this.countPositiveFeedbackPercentage()

      };

      addNeutral = () => {
       
        this.setState(prevState => {
            return {neutral: prevState.neutral + 1}
      }, this.countTotalFeedback)
      this.countPositiveFeedbackPercentage()

      };

      addBad = () => {
        this.setState(prevState => {
            return {bad: prevState.bad + 1}
         
      }, this.countTotalFeedback)
      this.countPositiveFeedbackPercentage()

      };

    
      countTotalFeedback() {
     this.totalCount = this.state.good + this.state.neutral + this.state.bad

      }      

      countPositiveFeedbackPercentage() {
        this.PositiveFeedbackPercentage = 100 / this.totalCount * this.state.good
   
      }
      
 
      render() {

const {good} = this.state
const {neutral} = this.state
const {bad} = this.state
const total = this.totalCount
const percentage = this.PositiveFeedbackPercentage


    return <div>

<p>Please, leave feedback</p>

<button type='button' class='feedback-button' onClick={this.addGood}>Good</button>
<button type='button' class='feedback-button' onClick={this.addNeutral}>Neutral</button>
<button type='button' class='feedback-button' onClick={this.addBad}>Bad</button>


<p>Statistics</p>

<li class="statistics-item">Good: {good}</li>
<li class="statistics-item">Neutral: {neutral}</li>
<li class="statistics-item">Bad: {bad}</li>
<li class="statistics-item" >Total: {total}</li>
<li class="statistics-item">Positive Feedback: {Math.floor(percentage)}%</li>


    </div>;
  }


}

export default Feedback;