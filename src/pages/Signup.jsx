import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const users = props.users
    const setusername = props.setusername
    const navigate = useNavigate()

    const [eusername, seteusername] = useState("")
    const [epassword, setepassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    function handleuinput(event) {
        seteusername(event.target.value)
    }

    function handlepinput(event) {
        setepassword(event.target.value)
    }

    function handleConfirmInput(event) {
        setConfirmPassword(event.target.value)
    }

    function adduser() {
        if (epassword !== confirmPassword) {
            setError("Please enter matching passwords.")
            return
        }
        setusername([...users, { username: eusername, password: epassword }])
        navigate("/")
    }

    return (
        <div className='bg-black p-10'>
            <div className='bg-[#EFEFEF] p-10 border rounded-md'>
                <h1 className='text-3xl font-medium'>Hey Hi 👋</h1>
                <p>Sign Up here :)</p>
                <div className='flex flex-col gap-2 my-2'>
                    <input
                        type="text"
                        className='w-52 border-black p-1 bg-transparent border rounded-md'
                        placeholder='Username'
                        onChange={handleuinput}
                        value={eusername}
                    />
                    <input
                        type="text"
                        className='w-52 border-black p-1 bg-transparent border rounded-md'
                        placeholder='Password'
                        onChange={handlepinput}
                        value={epassword}
                    />
                    <input
                        type="text"
                        className='w-52 border-black p-1 bg-transparent border rounded-md'
                        placeholder='Confirm Password'
                        onChange={handleConfirmInput}
                        value={confirmPassword}
                    />
                    {error && <p className='text-red-500 text-sm'>{error}</p>}
                    <button
                        className='bg-[#FCA201] w-24 p-1 rounded-md'
                        onClick={adduser}
                    >
                        SignUP
                    </button>
                    <p>
                        Already have an account? <Link to={"/"} className="underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
