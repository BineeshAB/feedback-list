import { useState } from 'react';
import './feedbackcard.css';
import {FaTimes, FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

function FeedbackItems({item, handleDelete, likes}){

    const [counter, setCounter] = useState(item.likes);

    const increaseLike = () => {
        setCounter((currentStatus) => {
            return currentStatus + 1
        });
    }

    const decreaseLike = () => {
        setCounter((currentStatus) => {
            if(currentStatus === 0){
                return 0;
            }
            return currentStatus - 1
        });
    }

    return (
        <>
            <div className="card">
                <div className='feedback-rating'>{item.rating}</div>
                <button className='close' onClick={() => handleDelete(item.id)}><FaTimes color="#93a0e1"/></button>
                <div className="card-body">{item.text}</div>
                <div className='like-counter'>
                    <button className='like-btn' onClick={increaseLike}>
                        <FaThumbsUp color="#93a0e1" />
                    </button>
                    <span className='no-of-likes'>{counter}</span>
                    <button className='dislike-btn' onClick={decreaseLike}>
                        <FaThumbsDown color="#93a0e1" />
                    </button>
                </div>
                
            </div>
        </>
    );
}
export default FeedbackItems;