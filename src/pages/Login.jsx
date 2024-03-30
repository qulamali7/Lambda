import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'

const Login = () => {
    return (
        <>
            <section className=" h-screen py-[50px]">
                <div className=" h-full  flex flex-col justify-between items-center">
                    <h1 className="text-[#00B278] text-5xl font-[bold] uppercase">Lambda</h1>
                    <div className="max-w-[384px] w-full m-auto p-[12px] flex flex-col gap-[16px]">
                        <p className="font-work text-[24px] font-semibold text-center font-['Work Sans, sans-serif']">Welcome back</p>
                        <form className="flex flex-col gap-[12px]">
                            <button className='font-inter flex items-center justify-center gap-[10px] w-full h-10 rounded-xl bg-white  text-[rgb(10,11,12)] leading-6 px-[24px] text-[16px] font-semibold shadow-[rgba(10,11,12,0.1)_0px_1px_2px,rgba(10,11,12,0.1)_0px_0px_0px_1px_inset] hover:bg-[rgba(10,11,11,0.05)] transition-[all] duration-[0.5s] ease '>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#F2F3F3"></circle>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6 10.1323C15.6 9.71863 15.5628 9.32091 15.4939 8.93909H9.99997V11.1955H13.1394C13.0041 11.9247 12.5932 12.5425 11.9753 12.9561V14.4198H13.8606C14.9636 13.4042 15.6 11.9088 15.6 10.1323Z" fill="#4285F4"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 15.8328C11.5751 15.8328 12.8955 15.3104 13.8607 14.4195L11.9755 12.9559C11.4531 13.3059 10.7849 13.5127 10.0001 13.5127C8.48076 13.5127 7.19478 12.4866 6.73607 11.1078H4.7872V12.6192C5.74705 14.5256 7.71978 15.8328 10.0001 15.8328Z" fill="#34A853"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.73594 11.1083C6.61928 10.7583 6.55299 10.3844 6.55299 9.99995C6.55299 9.61548 6.61928 9.24161 6.73594 8.89161V7.38025H4.78708C4.392 8.16775 4.16663 9.05866 4.16663 9.99995C4.16663 10.9412 4.392 11.8321 4.78708 12.6196L6.73594 11.1083Z" fill="#FBBC05"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 6.4867C10.8565 6.4867 11.6255 6.78102 12.23 7.35905L13.9031 5.68594C12.8929 4.74466 11.5724 4.16663 10.0001 4.16663C7.71978 4.16663 5.74705 5.47382 4.7872 7.38026L6.73606 8.89163C7.19478 7.51284 8.48076 6.4867 10.0001 6.4867Z" fill="#E03600"></path>
                                </svg>
                                Continue with Google
                            </button>
                            <div className="w-full flex items-center justify-center gap-[10px]">
                                <div className="h-[1px]  w-[43%] bg-[rgba(10,11,12,0.1)]"></div>
                                <span className="text-[rgba(10,11,11,0.3)] font-semibold text-xs leading-[150%">OR</span>
                                <div className="h-[1px]  w-[43%] bg-[rgba(10,11,12,0.1)]"></div>
                            </div>
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Email address" />
                            <input type="text" className="w-full py-[8px] px-[16px] leading-[150%] rounded-xl text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Password" />
                            <Btn />
                            <div className="flex items-center justify-between">
                                <p className="font-inter text-center font-normal text-xs text-[rgba(10,11,11,0.5)]">Don't have an account? <Link to={"/signup"} className="cursor-pointer text-[rgb(0,178,120)] text-xs font-semibold leading-[1.5em] p-0 hover:text-[rgb(0,108,73)]  transition-[all] duration-[0.5s] ease">Sign up</Link></p>
                                <Link to={"/"} className="cursor-pointer text-[rgb(0,178,120)] text-xs font-semibold leading-[1.5em] p-0 hover:text-[rgb(0,108,73)]  transition-[all] duration-[0.5s] ease font-inter">Forgot password?</Link>
                            </div>
                        </form>
                    </div>
                    <p className="font-inter w-full max-w-[400px] text-center text-[rgba(10,11,11,0.5)] text-xs leading-[150%]">By clicking “Continue with Email” or “Continue with Google” above, you acknowledge that you have read and understood, and agree to Workee’s <Link className='font-inter text-[rgb(10,11,12)] leading-[1.5em] text-[11px] font-normal'>Terms & Conditions</Link> and <Link className='font-inter text-[rgb(10,11,12)] leading-[1.5em] text-[11px] font-normal'>Privacy Policy</Link>.</p>
                </div>
            </section>
        </>
    )
}

export default Login