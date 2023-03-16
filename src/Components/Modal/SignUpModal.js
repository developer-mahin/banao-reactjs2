import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle, AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import { FiEyeOff } from "react-icons/fi"



const SignUpModal = ({ isOpen, modalIsOpen, customStyles, closeModal, afterOpenModal, setChangeModalForm }) => {

    const [password, setPassword] = useState("")

    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;

    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const { createUser, updateUserName, googleSignIn, facebookSignIn } = useContext(AUTH_CONTEXT)

    const handleSignUp = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const image = form.image.files[0]

        const formData = new FormData()
        formData.append("image", image)

        const fullName = firstName + " " + lastName

        if (!(password === confirmPassword)) {
            return toast.error("Password not matched")
        }

        const url = `https://api.imgbb.com/1/upload?key=b486f58b0681b7c344264f43dd69a0d8`;


        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const image = data.data.display_url
                createUser(email, password)
                    .then((result) => {
                        const user = result.user
                        console.log(user);
                        updateUserName(fullName, image)
                        toast.success("successfully user created")
                        form.reset()
                        closeModal(true)
                        setLoading(false)
                    })
                    .catch(error => {
                        toast.error(error.message)
                        setLoading(false)
                    })
            })
    }



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                toast.success("successfully user login")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                const user = result.user
                toast.success("Successfully user Login")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className='position-relative'>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <div className='position-absolute top-0 end-0'>
                    <AiOutlineCloseCircle className='fs-2 close_button' onClick={closeModal} />
                </div>
                <div className='bg-success bg-opacity-10 rounded mt-3 d-none d-md-block'>
                    <p className='p-3 text-success fw-semibold'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <>

                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='mb-3'>
                            <h2>Create Account</h2>
                        </div>
                        <div className='d-none d-md-block'>
                            <p className='fw-semibold'>Already have an account?
                                <span className='text-blue close_button ms-1'
                                    onClick={(e) => setChangeModalForm(e.target.innerText)}>Sign In</span></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <form
                                onSubmit={handleSignUp}
                            >
                                <div className='d-flex justify-content-between align-items-center pb-2'>
                                    <input
                                        type="text"
                                        name='firstName'
                                        required
                                        placeholder='First Name'
                                        className='form-control'
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        id=""
                                        placeholder='Last name'
                                        className='form-control'
                                        required
                                    />
                                </div>
                                <div className='pb-2'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        id=""
                                        required
                                        className='form-control'
                                    />
                                </div>

                                <div className='pb-2'>
                                    <input
                                        type="file"
                                        name="image"
                                        id=""
                                        required
                                        className='form-control'
                                    />
                                </div>

                                <div className='pb-2 position-relative'>
                                    <input
                                        type={changePassword ? "password" : "text"}
                                        name="password"
                                        id=""
                                        required
                                        className='form-control'
                                        placeholder='Password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {
                                        changePassword ?
                                            <FiEyeOff
                                                onClick={() => {
                                                    setChangePassword(changeIcon);
                                                }}
                                                className="position-absolute eye-button"
                                            />
                                            :
                                            <AiOutlineEye
                                                onClick={() => {
                                                    setChangePassword(changeIcon);
                                                }}
                                                className="position-absolute eye-button"
                                            />
                                    }

                                </div>
                                <div className='pb-2'>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id=""
                                        required
                                        className='form-control'
                                        placeholder='Confirm Password'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button
                                        type="submit"
                                        className='btn-blue btn rounded-pill w-50 w-md-100 fw-medium mt-3 py-2 border'
                                    >
                                        {loading ? "Loading..." : "Create Account"}
                                    </button>
                                    <div className='d-block d-md-none mt-4'
                                        onClick={(e) => setChangeModalForm(e.target.innerText)}>
                                        <p className='fw-medium text-decoration-underline'>or, Sign In</p>
                                    </div>
                                </div>
                            </form>
                            <div className='mt-4'>
                                <div className=''>
                                    <button
                                        onClick={handleFacebookSignIn}
                                        className='w-100 d-flex justify-content-center align-items-center gap-1 border btn py-2 px-4 my-2 fw-medium'>
                                        <img width={"25px"} src=" https://i.ibb.co/9Y0S2nP/facebook.png" alt="" />
                                        <span>Sign up with Facebook</span>
                                    </button>
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className='w-100 d-flex justify-content-center align-items-center gap-1 border btn py-2 px-4 my-2 fw-medium'>
                                        <img width={"25px"} src="https://i.ibb.co/LCqGCxS/google.png" alt="" />
                                        <span>Sign up with Google</span>
                                    </button>
                                    <div className='d-block d-md-none mt-5'>
                                        <p className='text-center w-75 mx-auto fw-medium'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col d-none d-md-block'>
                            <div>
                                <img src="https://i.ibb.co/W0sFNH3/atg-illustration.png" alt="" />
                            </div>
                            <div>
                                <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                            </div>
                        </div>
                    </div>





                </>

            </Modal>
        </div>
    );
};

export default SignUpModal;