import React from 'react'

const Contact = () => {
    return (
        <div className='contact--page'>
            <h1>Reach out to us for improvement suggestions!</h1>
            <form>
                <div className="form--inputs">
                    <input type='text' placeholder="First Name"></input>
                    <input type='text' placeholder="Last Name"></input>
                    <input type='text' placeholder="Phone"></input>
                    <input type='text' placeholder="Email"></input>
                    <textarea placeholder="Comments"></textarea>
                </div>
            </form>
        </div>
    )
}

export default Contact