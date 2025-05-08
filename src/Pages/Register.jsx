import React, { use } from 'react';

import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { setUser, createUser } = use(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message
                const errorCode = error.code
                console.log(errorMessage, errorCode);
            })
    }

    return (
        <div className='flex justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl text-center font-bold pt-4'>Register Now!</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" />

                        {/* Photo */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" />
                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />

                        {/* Submit */}
                        <button className="btn btn-primary mt-4">Register</button>
                        <p className='text-md text-center pt-4'>Already have Account? <Link to="/auth/login" className='text-secondary'>Login!</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;