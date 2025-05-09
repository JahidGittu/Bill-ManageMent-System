import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Loading from '../Components/Loading';

const Login = () => {


    const [showPassword, setShowPassword] = useState("")
    const [error, setError] = useState("")

    const { loading, setLoading, loginUser, createUserwithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


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

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location.state || "/");
            })
            .catch(error => {
                console.log(error.message, error.code);
            });
    }

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            await createUserwithGoogle();
            navigate(location.state || "/");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl text-center font-bold pt-4'>Login Now!</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

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
                        {/* forgot Password */}
                        <div><a className="link link-hover">Forgot password?</a></div>


                        {
                            error && <p className='text-secondary'>{error}</p>
                        }

                        {/* login */}
                        <button className="btn btn-primary mt-4">Login</button>

                        <p className='text-md text-center pt-4'>
                            Don't Have Account? <Link to="/auth/register" className='text-secondary'>Register!</Link>
                        </p>

                    </form>

                    <div className='divider'>OR</div>

                    <p className='text-primary text-center text-xl font-bold'>Try Social Login</p>
                    {loading && <Loading />}
                    <button onClick={signInWithGoogle} className="btn bg-white text-black border-[#e5e5e5] w-full">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        <span className='ml-2'>Login with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;