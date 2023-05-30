import React, { useState } from 'react';
import './feedbackform.css';
import RatingSelection from './RatingSelection';

const FeedbackForm = () => {

    const [text, setText] = useState("");
    const [btnDistabled, setBtnDistabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        if(text === ""){
            setMessage("The Test Must Contain more than 10 Charater");
            setBtnDistabled(true);
        }
        else if(text !== '' && text.trim().length < 10){
            setMessage("The Test Must Contain more than 10 Charater");
            setBtnDistabled(true);
        }
        else{
            setMessage("The Test Is Correct");
            setBtnDistabled(false);
        }
        setText(e.target.value);
    }
    const submitFeedback = (e) => {
        e.preventDefault();
    };

    return (
        <div className='form-card'>
            <div className="form-title">
                How Likely are you Satisfied with Our Work ?
            </div>
            <div className="form-content">
                <form onSubmit={submitFeedback}>
                    <div className="rating-group">
                    <RatingSelection />
                    </div>
                    <div className="form-group">
                        <div className='text-box-div'>
                            <input type="text" onChange={handleChange} id="name" name="name" placeholder='Give us your Feedback'value={text}/>
                        </div>
                        <div className='submit-btn-div'>
                            <button type="submit" className='submit-btn' disabled={btnDistabled}>Submit</button>
                        </div>
                    </div>
                    <div className="length-message">{message}</div>
                </form>
            </div>
        </div>
    );
}

export default FeedbackForm;