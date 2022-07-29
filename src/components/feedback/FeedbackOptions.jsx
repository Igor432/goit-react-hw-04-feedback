

const FeedbackOptions = ({options, onLeaveFeedback}) => {

const optika = Object.keys(options)




return (    
    
        <div>
        <p>Please, leave feedback</p>

{optika.map(optio => (
        <button class="feedback-button" type="button" key={optio}  onClick={() => onLeaveFeedback(optio)}>{optio}</button>
      

        ))}

        
            </div>


    
)
}



export default FeedbackOptions;