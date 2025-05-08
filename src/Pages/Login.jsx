import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const { loginUser } = use(AuthContext);

    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(`${ location.state ? location.state : "/" }`)
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
                <h2 className='text-2xl text-center font-bold pt-4'>Login Now!</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        {/* forgot Password */}
                        <div><a className="link link-hover">Forgot password?</a></div>


                        {/* login */}
                        <button className="btn btn-primary mt-4">Login</button>


                        <p className='text-md text-center pt-4'>Don't Have Account? <Link to="/auth/register" className='text-secondary'>Register!</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;