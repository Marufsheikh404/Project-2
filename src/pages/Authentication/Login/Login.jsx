
import { useForm } from 'react-hook-form';
import logo from '../../../assets/New folder/logo.png'

const Login = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className='flex'>
                        <img src={logo} alt="logo" />
                        <h1 className='text-2xl font-bold mt-4 -translate-x-3'>Profast</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" {...register('email')} className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" {...register('password')} className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#ACC857] mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;