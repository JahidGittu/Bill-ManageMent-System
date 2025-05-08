import React, { use, useState } from 'react';

import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const { setUser, createUser, updateUser, createUserwithGoogle } = use(AuthContext)
    const [error, setError] = useState("")


    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        // Digit check
        if (!/\d/.test(password)) {
            setError("Password must have at least 1 digit");
            return;
        }

        // Uppercase letter check
        if (!/[A-Z]/.test(password)) {
            setError("Password must have at least 1 uppercase letter");
            return;
        }

        // Lowercase letter check
        if (!/[a-z]/.test(password)) {
            setError("Password must have at least 1 lowercase letter");
            return;
        }

        // Special character check
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError("Password must have at least 1 special character");
            return;
        }

        // Minimum length check
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUser({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        // Use `auth.currentUser` or re-fetch user if needed
                        setUser({ ...user, displayName: name, photoURL: photo });
                    })
                    .catch(error => {
                        console.error("Update profile error:", error.message);
                    });
            })
            .catch(error => {
                console.error("Create user error:", error.message);
            });

    }

    const signInWithGoogle = () => {
        createUserwithGoogle()
        navigate('/')
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
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
                        <div className="relative">
                            <input
                                name='password'
                                type={showPassword ? "text" : "password"}
                                className="input w-full pr-10"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-3 right-3 cursor-pointer text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>


                        {
                            error && <p className='text-secondary'>{error}</p>
                        }

                        {/* Submit */}
                        <button className="btn btn-primary mt-4">Register</button>
                        <p className='text-md text-center pt-4'>Already have Account? <Link to="/auth/login" className='text-secondary'>Login!</Link></p>


                    </form>

                        <p className='text-primary text-xl font-bold'>Try Social Login</p>
                    


                    {/* Google */}
                    <button onClick={signInWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;