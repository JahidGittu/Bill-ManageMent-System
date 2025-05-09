import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Bounce, toast } from 'react-toastify';
import Loading from '../Components/Loading';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false);

    const { loading, setLoading, loginUser, createUserwithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Password Validation
        if (!/\d/.test(password)) {
            setError("Password must have at least 1 digit");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must have at least 1 uppercase letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must have at least 1 lowercase letter");
            return;
        }
        if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
            setError("Password must have at least 1 special character");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                navigate(location.state || "/");
            })
            .catch((error) => {
                setError("Login failed. Please try again.");
            });
    };

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            await createUserwithGoogle();
            navigate(location.state || "/");
        } catch (error) {
            setError("Google login failed");
        } finally {
            setLoading(false);
        }
    };

    const handleForgetPassword = async (e) => {
        e.preventDefault();

        if (!resetEmail) {
            toast.error("Email is required");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, resetEmail);
            toast('🦄 Password Reset email sent!', {
                position: "top-right",
                autoClose: 3000,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce
            });
            setResetSuccess(true);
        } catch (error) {
            toast.error("Something went wrong. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl text-center font-bold pt-4">Login Now!</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="fieldset">

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="input w-full pr-10"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-3 right-3 cursor-pointer text-gray-500"
                                title={showPassword ? "Hide Password" : "Show Password"}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {/* Forgot Password */}
                        <div className="mt-2">
                            <p
                                onClick={() => {
                                    setShowModal(true);
                                    setResetSuccess(false);
                                }}
                                className="link link-hover text-blue-600 cursor-pointer"
                            >
                                Forgot password?
                            </p>
                        </div>

                        {error && <p className="text-secondary mt-2">{error}</p>}

                        <button className="btn btn-primary mt-4">Login</button>

                        <p className="text-md text-center pt-4">
                            Don't Have Account? <Link to="/auth/register" className="text-secondary">Register!</Link>
                        </p>
                    </form>

                    <div className="divider">OR</div>

                    <p className="text-primary text-center text-xl font-bold">Try Social Login</p>
                    {loading && <Loading />}
                    <button onClick={signInWithGoogle} className="btn bg-white text-black border-[#e5e5e5] w-full mt-2">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                            <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                        </svg>
                        <span className="ml-2">Login with Google</span>
                    </button>
                </div>
            </div>

            {/* Forget Password Modal */}
            {showModal && (
                <dialog id="reset_modal" className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">
                            {resetSuccess ? "Email Sent!" : "Reset Your Password"}
                        </h3>

                        {resetSuccess ? (
                            <>
                                <p className="mb-4">A reset link has been sent to your email. Please check your inbox.</p>
                                <div className="modal-action flex justify-end">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            setShowModal(false);
                                            setResetEmail('');
                                            setResetSuccess(false);
                                        }}
                                    >
                                        OK
                                    </button>
                                </div>
                            </>
                        ) : (
                            <form onSubmit={handleForgetPassword}>
                                <input
                                    type="email"
                                    value={resetEmail}
                                    onChange={(e) => setResetEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full mb-4"
                                    required
                                />
                                <div className="modal-action flex justify-between">
                                    <button type="submit" className="btn btn-primary">Send Reset Link</button>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => {
                                            setShowModal(false);
                                            setResetEmail("");
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Login;
