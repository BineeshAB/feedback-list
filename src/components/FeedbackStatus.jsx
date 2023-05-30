import './feedbackstatus.css';

function FeedbackStatus({feedback}){
    
    const ratingSum = feedback.reduce((acc, current) => {
        return acc + current.rating;
    }, 0);

    let averageRating = ratingSum / feedback.length;
    averageRating = averageRating.toFixed(1);
    return(
        <div className="feedback-data-list">
            <div className="no-of-feedback-div">No of Feedback: {feedback.length}</div>
            <div className="average-div">Average Rating: {
                isNaN(averageRating) ? 0 : averageRating
            }</div>
        </div>        
    );
}
export default FeedbackStatus;