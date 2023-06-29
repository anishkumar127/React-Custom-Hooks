import React, { useReducer, useRef } from 'react'
import { formReducer1, INITIAL_STATE } from '../hook/formReducer1';

const Form2 = () => {
    const [state, dispatch] = useReducer(formReducer1, INITIAL_STATE);
    const tagRef = useRef();
    const handleChange = (e) => {
        dispatch({
            type: "CHANGE_INPUT",
            payload: { name: e.target.name, value: e.target.value }
        })
    }

    const handleTags = () => {
        const tags = tagRef.current.value.split(",");
        tags.forEach((tag) => {
            dispatch({ type: "ADD_TAG", payload: tag })
        });
    }

    return (
        <div>

            <hr />
            <h1> FORM</h1>
            <hr />
            <form>
                <input type='text' placeholder='Title' name='title' onChange={handleChange} />
                <input type='text' placeholder='Desc' name='desc' onChange={handleChange} />
                <input type='text' placeholder='Price' name='price' onChange={handleChange} />

                <p>Category:</p>

                <select onChange={handleChange} name="category">
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                </select>

                <p>Tags:</p>

                <textarea ref={tagRef} placeholder='Seperate tags with commas...'></textarea>

                <button onClick={handleTags} type='button'>Add Tags</button>

                <div>
                    {
                        state.tags.map((tag) => (
                            <small onClick={() => dispatch({ type: "REMOVE_TAG", payload: tag })} key={tag}>
                                {tag}
                            </small>
                        ))
                    }
                </div>

                <div>
                    <button onClick={() => dispatch({ type: "DECREASE" })} type='button'>-</button>
                    <span>Quantity {state.quantity}</span>
                    <button onClick={() => dispatch({ type: "INCREASE" })} type='button'>+</button>
                </div>
            </form>
        </div>
    )
}

export default Form2