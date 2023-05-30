import React, { useState } from 'react';
import './ratingbtns.css';

const RatingSelection = () => {

    const [selected, setSelected] = useState(10);

    const changeRating = (e) => {
        setSelected(+e.target.value);
    }

    return(
        <>
            <div className='rating-div'>
                <ul className='rating'>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="1" onChange={changeRating} id='radio1' checked={selected === 1} name='radioBtn'/>
                            <label htmlFor='radio1'>1</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="2" onChange={changeRating} id='radio2' checked={selected === 2} name='radioBtn'/>
                            <label htmlFor='radio2'>2</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="3" onChange={changeRating} id='radio3' checked={selected === 3} name='radioBtn'/>
                            <label htmlFor='radio3'>3</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="4" onChange={changeRating} id='radio4' checked={selected === 4} name='radioBtn'/>
                            <label htmlFor='radio4'>4</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="5" onChange={changeRating} id='radio5' checked={selected === 5} name='radioBtn'/>
                            <label htmlFor='radio5'>5</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="6" onChange={changeRating} id='radio6' checked={selected === 6} name='radioBtn'/>
                            <label htmlFor='radio6'>6</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="7" onChange={changeRating} id='radio7' checked={selected === 7} name='radioBtn'/>
                            <label htmlFor='radio7'>7</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="8" onChange={changeRating} id='radio8' checked={selected === 8} name='radioBtn'/>
                            <label htmlFor='radio8'>8</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="9" onChange={changeRating} id='radio9' checked={selected === 9} name='radioBtn'/>
                            <label htmlFor='radio9'>9</label>
                        </div>
                    </li>
                    <li>
                        <div className='radio-btn-div'>
                            <input type='radio' value="10" onChange={changeRating} id='radio10' checked={selected === 10} name='radioBtn'/>
                            <label htmlFor='radio10'>10</label>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default RatingSelection;