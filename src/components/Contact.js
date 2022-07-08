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

    React.useEffect(() => {
        console.log(inputData);
    }, [inputData])

    return (
        <div className='contact--page'>
            <h1>Reach out to us for improvement suggestions!</h1>
            <form>
                <div className="form--inputs">
                    <input type='text'
                        placeholder="First Name"
                        onChange={handleChange}
                        name="firstName"
                        value={inputData.firstName}
                    >
                    </input>
                    <input type='text'
                        placeholder="Last Name"
                        onChange={handleChange}
                        name="lastName"
                        value={inputData.lastName}
                    ></input>
                    <input type='text'
                        placeholder="Phone"
                        onChange={handleChange}
                        name="phone"
                        value={inputData.phone}
                    ></input>
                    <input type='text'
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={inputData.email}
                    ></input>
                    <textarea
                        placeholder="Comments"
                        name="comments"
                        onChange={handleChange}
                        value={inputData.comments
                        }></textarea>
                </div>
            </form >
        </div >
    )
}

export default Contact