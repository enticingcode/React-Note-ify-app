import React from 'react'

const Contact = () => {

    const [inputData, setInputData] = React.useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comments: "",
    })

    const handleChange = (evt) => {
        const value = evt.target.value
        setInputData(prevState => {
            return {
                ...prevState,
                [evt.target.name]: value,
            }
        })

    }

    function handleSubmit(e) {
        // e.preventDefault();
        console.log('yes')
    }

    React.useEffect(() => {
        // console.log(inputData);
    }, [inputData])

    return (
        <div className='contact--page'>
            <h1>Reach out to us for improvement suggestions!</h1>
            <form>
                <div className="form--inputs">
                    <input type='text'
                        placeholder="First Name"
                        onChange={handleChange}
                        pattern="^[a-zA-Z]+$"
                        name="firstName"
                        value={inputData.firstName}
                        required
                    >
                    </input>
                    <input type='text'
                        placeholder="Last Name"
                        onChange={handleChange}
                        pattern="^[a-zA-Z]+$"
                        name="lastName"
                        value={inputData.lastName}
                        required
                    ></input>
                    <input type='tel'
                        placeholder="Phone"
                        onChange={handleChange}
                        name="phone"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        value={inputData.phone}
                        required
                    ></input>
                    <input type='email'
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={inputData.email}
                        required
                    ></input>
                    <textarea
                        placeholder="Comments"
                        name="comments"
                        onChange={handleChange}
                        value={inputData.comments
                        }></textarea>
                    <button onClick={handleSubmit} type='submit'>Submit</button>
                </div>
            </form >
        </div >
    )
}

export default Contact