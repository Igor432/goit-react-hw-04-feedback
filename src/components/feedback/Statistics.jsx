

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

    console.log(total)

/*
    const {good} = this.state
    const {neutral} = this.state
    const {bad} = this.state
    const total = this.totalCount
    const percentage = this.PositiveFeedbackPercentage

*/


return (

    <div>
   <p>Statistics</p>
        
    <li class="statistics-item">Good: {good}</li>
    <li class="statistics-item">Neutral: {neutral}</li>
    <li class="statistics-item">Bad: {bad}</li>
    <li class="statistics-item" >Total: {total}</li>
    <li class="statistics-item">Positive Feedback: {Math.floor(positivePercentage)}%</li>


    </div>
)


}


export default Statistics