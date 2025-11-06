
import { useForm } from 'react-hook-form';
import logo from '../../../assets/New folder/logo.png'
import useAuth from '../../../Hook/useAuth';
import { NavLink, useNavigate } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    const [photo, setPhoto] = useState('');
    const { createUser, setLoading, googleSignIn, updateimge } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data) => {
        setLoading(true)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)

                // user send to the database
                const userInfo ={
                    email:data.email,
                    name:data.name,
                    role:'user',
                    create_at: new Date().toISOString(),
                    last_loggin_in: new Date().toISOString()
                }

                // update userProfile on Firebase
                const userUpdate = {
                    displayName: data.name,
                    photoURL: photo
                }
                updateimge(userUpdate)
                    .then(() => {
                        console.log('image updated')
                    })
                    .catch(error => {
                        console.log(error)
                    })
                navigate('/')
                reset()
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => setLoading(false))
    }

    const handleChange = async (e) => {
        const image = e.target.files[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image)

        const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`
        const res = await axios.post(imageUpload, formData)
        setPhoto(res.data.data.url)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 w-[350px] shrink-0 shadow-2xl">
                    <div className='flex'>
                        <img src={logo} alt="logo" />
                        <h1 className='text-2xl font-bold mt-4 -translate-x-3'>Profast</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" {...register('name')} className="input" placeholder="User Name" />

                            <label className="label">Upload Your Photo</label>
                            <input onChange={handleChange} type="file" className="input" placeholder="Upload Your Photo" />

                            <label className="label">Email</label>
                            <input type="email" {...register('email')} className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" {...register('password')} className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#ACC857] mt-4">SignUp</button>
                            <h1>Already Have An Account? <NavLink to={'/login'}><span className='text-sm font-semibold text-[#ACC857]'>SignIn</span></NavLink></h1>
                            <br />
                            {/* Google */}
                            <button onClick={googleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;