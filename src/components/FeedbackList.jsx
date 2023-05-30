
import FeedbackItems from "./FeedbackItems";

function FeedbackList({feedback, handleDelete}){

    if(!feedback || feedback.length === 0){
        return (<h1 style={{color: "white"}}>No Feedback Yet!!!</h1>);
    }

    return (
        <div>
            {
                feedback.map((item) => (
                    <FeedbackItems key={item.id} item={item} handleDelete={handleDelete}/>
                ))
            }
        </div>
    );
}

export default FeedbackList;