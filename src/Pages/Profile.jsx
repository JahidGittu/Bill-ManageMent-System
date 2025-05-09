import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Navbar from '../Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const originalName = user?.displayName || '';
    const originalPhoto = user?.photoURL || '';

    const [name, setName] = useState(originalName);
    const [photo, setPhoto] = useState(originalPhoto);

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const isNameChanged = name !== originalName;
    const isPhotoChanged = photo !== originalPhoto;

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
    }, [photo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                toast('🦄 Profile updated successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce
                });
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to update profile.");
            });
    };

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover
                draggable
                theme="light"
                transition={Bounce}
                style={{ marginTop: '80px' }}
            />

            <section>
                <Navbar />
            </section>

            <div className="min-h-screen flex items-center justify-center bg-primary -mt-16 px-4">
                <div className="max-w-lg w-full p-8 bg-base-100 shadow-xl rounded-2xl border border-gray-200">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Update Your Profile</h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label className="label">
                                <span className="label-text text-base font-medium">
                                    {isNameChanged ? "Your New Name" : "Your Current Name"}
                                </span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value.trimStart())}
                                placeholder="Enter your full name"
                                className="input input-bordered input-primary w-full"
                                required
                            />
                        </div>

                        {/* Photo URL Input */}
                        <div>
                            <label className="label">
                                <span className="label-text text-base font-medium">
                                    {isPhotoChanged ? "Your New Image URL" : "Your Current Image URL"}
                                </span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                value={photo}
                                onChange={(e) => setPhoto(e.target.value.trim())}
                                placeholder="Enter photo URL"
                                className="input input-bordered input-accent w-full"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!isNameChanged && !isPhotoChanged}
                            className={`btn w-full text-white text-lg transition duration-200 ${!isNameChanged && !isPhotoChanged
                                ? 'bg-gray-400 cursor-not-allowed disabled:text-gray-500'
                                : 'bg-primary hover:bg-primary/90'
                                }`}
                        >
                            Save Changes
                        </button>
                    </form>

                    {/* Profile Preview */}
                    <div className="mt-8 text-center">
                        <div className="avatar mb-3">
                            <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden flex items-center justify-center bg-gray-100">
                                {isLoading && !hasError && (
                                    <span className="loading loading-ring mt-8 loading-xl"></span>
                                )}

                                <img
                                    key={photo} // ensures re-render on URL change
                                    src={hasError ? "https://via.placeholder.com/100" : photo}
                                    alt="Profile"
                                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                    onLoad={() => setIsLoading(false)}
                                    onError={() => {
                                        setHasError(true);
                                        setIsLoading(false);
                                    }}
                                />

                            </div>
                        </div>

                        <p className="text-gray-800 text-md font-semibold">{name}</p>
                        <p className="text-gray-600 text-sm">{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
