import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <>
            <div className='max-w-[1150px] m-auto'>
                <nav className='py-[20px] max-w-[1150px] flex m-auto justify-between '>
                    <Link to={"/"} className="font-work text-[#00B278] text-3xl font-semibold uppercase">Lambda</Link>
                    <ul className='flex items-center gap-[20px]'>
                        <li>
                            <Link className='text-[#222222] font-medium'>Solutions</Link>
                        </li>
                        <li>
                            <Link className='text-[#222222] font-medium'>Pricing</Link>
                        </li>
                        <li>
                            <Link className='text-[#222222] font-medium'>Blog</Link>
                        </li>
                        <li>
                            <Link to={"/login"} className='text-[#222222] font-medium'>Login</Link>
                        </li>
                    </ul>
                </nav>
                <div className='py-[50px] flex items-center gap-[15px]'>
                    <div className=' flex flex-col gap-[20px] items-start'>
                        <h1 className='text-[40px] font-[800]'>Co-pilot for a freelance business</h1>
                        <p className='font-normal text-[20px] font-inter'>Built-in bookings, payments, video calls, and invoicing to automate a freelance business in one place</p>
                        <button className='bg-[#00b278] text-white cursor-pointer border-none outline-none rounded-2xl py-[10px] px-[24px] font-semibold text-[20px] transition-[background-color] duration-[50ms] ease-[ease-in] hover:bg-[#008e60]'>Get started</button>
                        <span className='font-inter text-[13px] text-[rgba(10,11,11,0.5)] font-normal'>Start free - no credit card required</span>
                    </div>
                    <video width="650" height="500" autoPlay muted loop playsInline src="../../public/banner-video.mp4" >
                    </video>
                </div>
                <div className='my-[20px] flex items-center justify-between gap-8 bg-[#fef1ab]  text-center rounded-[32px] px-12 py-6'>
                    <p className='text-xl leading-[1.5em] font-semibold font-inter'>Our users love Workee!</p>
                    <img src="../../public/adv-rating.svg" className='w-full max-w-[200px]' />
                    <img src="../../public/capterra-logo-sepia.svg" />
                    <img src="../../public/trustpilot-logo-sepia.svg" />
                </div>
                <div className='my-[20px] flex items-center justify-between gap-6'>
                    <div className='w-[48%] flex flex-col h-[264px] items-center justify-between px-6 py-8 rounded-[32px] bg-[linear-gradient(180deg,_hsla(0,_0%,_98%,_0)_-66.67%,_#fff),_linear-gradient(270deg,_#beffea,_#a3eefd)] hover:translate-y-[-5px] shadow-[inset_0_0_0_1px_rgba(10,11,11,0.2),0_8px_16px_0_rgba(0,0,0,0.1)] transition-[all] duration-[0.5s] ease-[ease]'>
                        <p className='text-[32px] leading-[100%] font-normal font-inter'>🖤</p>
                        <h3 className='font-bold text-3xl text-center font-work'>Workee Perks</h3>
                        <span className='text-xl font-bold leading-[1.5em] text-[rgba(10,11,11,0.5)] '>Special offers for our users</span>
                    </div>
                    <div className='w-[48%] flex flex-col h-[264px] items-center justify-between px-[70px] py-8 rounded-[32px] bg-[linear-gradient(180deg,_#c9ebff,_#fff9c5)] hover:translate-y-[-5px] shadow-[inset_0_0_0_1px_rgba(10,11,11,0.2),0_8px_16px_0_rgba(0,0,0,0.1)] transition-[all] duration-[0.5s] ease-[ease]'>
                        <p className='text-[23px] leading-[100%] font-normal font-inter'>UA</p>
                        <h3 className='font-bold text-3xl text-center font-work'>We stand with Ukraine.
                            Join us!</h3>
                        <span className='text-xl font-bold leading-[1.5em] text-[rgba(10,11,11,0.5)] '>#StandWithUkraine</span>
                    </div>
                </div>
            </div>
            <div className='my-[20px] pt-40  flex flex-col justify-center items-center text-center bg-[linear-gradient(180deg,_#fafafa,_hsla(0,_0%,_98%,_0)_50%,_#fafafa),_linear-gradient(270deg,_#bcffda,_#eaffd9)]'>
                <p className='text-[40px]'>🤓</p>
                <h2 className='text-[64px] font-extrabold leading-[120%] font-work'>Freelance business</h2>
                <h2 className='text-[64px] font-extrabold leading-[120%] font-work text-[#00b278]'>is easy with Workee</h2>
            </div>
            <div className='max-w-[1150px] m-auto'>
                <div className='my-[160px] flex items-start justify-center'>
                    <div className='flex flex-col gap-4 w-full sticky pr-8 top-[40%]'>
                        <h2 className='text-[32px] leading-[1.3em] font-extrabold font-work'>No need to code</h2>
                        <p className='text-base leading-[1.5em] font-normal font-inter'>Best website builder for small businesses with seamless customization. Get your site up and running in less than 1 minute.</p>
                    </div>
                    <img className='w-[65%]' src="../../public/website.webp" alt="" />
                </div>
                <div className='my-[160px] flex items-start justify-center'>
                    <div className='flex flex-col gap-4 w-full sticky pr-8 top-[40%]'>
                        <h2 className='text-[32px] leading-[1.3em] font-extrabold font-work'>Easy Scheduling</h2>
                        <p className='text-base leading-[1.5em] font-normal font-inter'>Create your work schedule in seconds! Set days, hours or any configuration you want.</p>
                    </div>
                    <img className='w-[65%]' src="../../public/schedule.webp" alt="" />
                </div>
                <div className='my-[160px] flex items-start justify-center'>
                    <div className='flex flex-col gap-4 w-full sticky pr-8 top-[40%]'>
                        <h2 className='text-[32px] leading-[1.3em] font-extrabold font-work'>Time Slots</h2>
                        <p className='text-base leading-[1.5em] font-normal font-inter'>Flexible options for better time management and monetization. Any time slots available for engagements of your choice.</p>
                    </div>
                    <img className='w-[65%]' src="../../public/timeslots.webp" alt="" />
                </div>
                <div className='my-[160px] flex items-start justify-center'>
                    <div className='flex flex-col gap-4 w-full sticky pr-8 top-[40%]'>
                        <h2 className='text-[32px] leading-[1.3em] font-extrabold font-work'>Your online store</h2>
                        <p className='text-base leading-[1.5em] font-normal font-inter'>Selling your professional Services and Products on your Workee website has never been simpler.</p>
                    </div>
                    <img className='w-[65%]' src="../../public/jobs.webp" alt="" />
                </div>
                <div className='my-[160px] flex items-start justify-center'>
                    <div className='flex flex-col gap-4 w-full sticky pr-8 top-[40%]'>
                        <h2 className='text-[32px] leading-[1.3em] font-extrabold font-work'>Payments and Invoicing</h2>
                        <p className='text-base leading-[1.5em] font-normal font-inter'>Enjoy payments freedom with our integrated payment systems and 0% transaction fees. Send invoices and get paid hassle-free, all in one place.1</p>
                    </div>
                    <img className='w-[65%]' src="../../public/payments.webp" alt="" />
                </div>
                <div className='my-[160px] flex items-start justify-center'>
                    <div className='flex flex-col gap-4 w-full sticky pr-8 top-[40%]'>
                        <h2 className='text-[32px] leading-[1.3em] font-extrabold font-work'>Accounting and Work management</h2>
                        <p className='text-base leading-[1.5em] font-normal font-inter'>Manage your meetings, track time, send invoices and calculate taxes in one single place.</p>
                    </div>
                    <img className='w-[65%]' src="../../public/workspace.webp" alt="" />
                </div>
            </div>
            <div className='my-[80px] bg-[linear-gradient(180deg,_#fafafa,_hsla(0,_0%,_98%,_0)_50%,_#fafafa),_linear-gradient(270deg,_#ffe6e6,_#ffcfec)]'>
                <div className='max-w-[1150px] m-auto flex flex-col w-full relative overflow-hidden pt-10 pb-[632px] px-12 rounded-[32px] bg-[linear-gradient(320deg,_rgba(19,_96,_245,_.3),_rgba(237,_185,_238,_.3))]'>
                    <div className='flex flex-col gap-6 max-w-[752px] w-full  '>
                        <h2 className='text-[40px] leading-[1.3em] font-extrabold text-[#0a0b0b] font-work'>Getting ready for online lessons?</h2>
                        <h2 className='font-work text-[#7260e0] text-[40px] leading-[1.3em] font-extrabold '>Meet your time-saving ally.</h2>
                        <span className='text-xl leading-[1.5em] font-normal text-[#0a0b0b] font-inter'>Prepare for calls with your students efficiently using our cutting-edge AI solution. Save up to 10 hours a week and supercharge your online lessons with advanced AI technology. Tailored lesson plans are just a click away, making your teaching routine more efficient.</span>
                    </div>
                    <img className='absolute left-2 bottom-[180px]' src="../../public/ai-icons-01.svg" alt="" />
                    <img className='absolute left-[380px] bottom-[440px]' src="../../public/ai-icons-02.svg" alt="" />
                    <img className='absolute left-[890px] bottom-[540px]' src="../../public/ai-icons-03.svg" alt="" />
                    <img className='absolute left-32 bottom-[60px]  w-full max-w-[700px]' src="../../public/laptop-call.webp" alt="" />
                    <img className='w-full max-w-[462px] absolute shadow-[-10px_60px_64px_0_rgba(11,0,81,0.27)] right-12 bottom-0 translate-y-[100px] will-change-transform;' src="../../public/ai-gui-result.webp" alt="" />
                </div>
            </div>
            <div className='my-[160px] max-w-[1150px] m-auto flex flex-col items-center gap-20'>
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-[40px] leading-[1.3em]'>😍</p>
                    <h2 className=' text-[40px] font-work leading-[1.3em] font-extrabold'>Tools you use,<span className='text-[#00b278]'> already built-in!</span></h2>
                </div>
                <div className='flex items-center justify-center gap-6'>
                    <img src="../../public/big-gcal.svg" alt="" />
                    <img src="../../public/big-gcon.svg" alt="" />
                    <img src="../../public/big-gmeet.svg" alt="" />
                    <img src="../../public/big-zoom.svg" alt="" />
                    <img src="../../public/big-paypal.svg" alt="" />
                    <img src="../../public/big-stripe.svg" alt="" />
                </div>
            </div>
            <div className='my-[160px] max-w-[1150px] m-auto'>
                <h2 className='mb-[70px] leading-[1.3em] font-extrabold text-[40px] font-work text-center'>Workee is perfect for...</h2>
                <div className='flex flex-row flex-wrap justify-center gap-6 '>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Tutors and Teachers</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-tutors.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Stylists</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-stylists.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Nutritionists</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-nutritionists.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Coaches</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-coaches.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Freelancers</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-freelancers.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Consultants</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-consultants.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Psychologists</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-psychologists.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Therapists</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-therapists.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Health Experts</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-healthexperts.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Yoga Masters</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-yogamasters.webp" alt="" />
                    </div>
                    <div className='bg-[rgba(10,11,11,0.05)] flex flex-col w-[170px] h-[276px] items-center justify-items-start relative overflow-hidden transition-[0.5s] duration-[all] ease-[ease] p-6 rounded-3xl hover:shadow-[0_24px_40px_rgba(10,11,11,0.05)] hover:bg-[rgba(10,11,11,0.1)] hover:rounded-[72px] hover:scale-110'>
                        <p className='text-base leading-[1.5em] font-semibold text-center font-inter'>Legal experts</p>
                        <img className='w-[184px] absolute right-0 bottom-0 transition-[0.5s] duration-[all] ease-[ease] hover:-translate-x-4 hover:translate-y-4 hover:scale-[1.2]' src="../../public/audience-lawyers.webp" alt="" />
                    </div>
                    
                </div>
            </div>
            <div className='my-[160px]  m-auto flex flex-col items-center justify-center max-w-[752px] gap-10'>
                <p className='text-[40px] leading-[1.3em]'>💫️</p>
                <h2 className='text-[40px] leading-[1.3em] font-extrabold font-work'>Join thousands of professionals</h2>
                <p className='text-xl leading-[1.5em] font-semibold font-inter'>Workee is Free. Upgrade anytime.</p>
                <img className='w-full max-w-[582px]' src="../../public/cta-laptop (1).webp" alt="" />
                <button className='bg-[#00b278] text-white text-xl leading-[1.5em] font-semibold text-center px-6 py-2.5 rounded-2xl border-[none] transition-[0.5s] duration-[all] ease-[ease] font-inter hover:bg-[#008e60]'>Get started for free</button>
                <span className='text-xl leading-[1.5em] font-normal text-[rgba(10,11,11,0.3)] font-inter'>No credit card required</span>
            </div>
            <div className='my-[160px] max-w-[1150px] m-auto flex justify-between'>
                <div className='flex flex-col gap-[60px] bg-white border px-10 py-8 rounded-3xl border-solid border-[rgba(10,11,11,0.1)] w-[710px]'>
                    <div className='flex items-center justify-between' >
                        <h2 className='text-[32px] leading-[1.3em] font-extrabold font-work'>Whats New?</h2>
                        <p className='text-base leading-[1.5em] font-semibold text-[#00b278] font-inter'>All posts in Workee Blog</p>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <img className='max-w-[134px] rounded-2xl' src="../../public/2024-03-28_18.18.58-2.jpg" alt="" />
                        <div className=''>
                            <h3 className='text-xl leading-[1.5em] font-extrabold transition-[0.5s] duration-[all] ease-[ease] font-work hover:text-[#00b278]'>Efficient App for Booking: Streamline Your Appointment Scheduling Today</h3>
                            <span className='text-[13px] leading-[1.5em] font-normal text-[rgba(10,11,11,0.5)] font-inter'>Jeremy Miller, 28 March 2024</span>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <img className='max-w-[134px] rounded-2xl' src="../../public/DALL_E_2024-03-28_14.34.41_-_An_image_depicting_the_concept_of_tutoring_rates_in_2024._The_background_shows_a_modern__digita.jpg" alt="" />
                        <div className=''>
                            <h3 className='text-xl leading-[1.5em] font-extrabold transition-[0.5s] duration-[all] ease-[ease] font-work hover:text-[#00b278]'>Maximizing Earnings: A Strategic Guide to Tutor Pay in 2024</h3>
                            <span className='text-[13px] leading-[1.5em] font-normal text-[rgba(10,11,11,0.5)] font-inter'>May Suemo, 28 March 2024</span>
                        </div>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <img className='max-w-[134px] rounded-2xl' src="../../public/builder-2.jpg" alt="" />
                        <div className=''>
                            <h3 className='text-xl leading-[1.5em] font-extrabold transition-[0.5s] duration-[all] ease-[ease] font-work hover:text-[#00b278]'>Explore the Top Tutor Software of 2024: Enhancing Education Through Technology</h3>
                            <span className='text-[13px] leading-[1.5em] font-normal text-[rgba(10,11,11,0.5)] font-inter'>May Suemo, 23 March 2024</span>
                        </div>
                    </div>
                    <div className='flex item-center justify-center gap-8'>
                        <img src="../../public/linkedin.svg" alt="" />
                        <img src="../../public/facebook.svg" alt="" />
                        <img src="../../public/instagram.svg" alt="" />
                        <img src="../../public/twitter.svg" alt="" />
                        <img src="../../public/tiktok.svg" alt="" />
                    </div>
                </div>
                <img className='w-[400px] rounded-3xl' src="../../public/workeesite-main-page-webinar7.webp" alt="" />
            </div>
            <div className='my-[160px] max-w-[1150px] m-auto flex justify-between gap-6'>
                <div className='flex flex-col items-center gap-8 px-4 py-8 rounded-[32px] bg-[linear-gradient(180deg,_rgba(10,_11,_12,_.05),_rgba(10,_11,_12,_.015))]'>
                    <img className='w-full max-w-[200px]' src="../../public/card-swg.svg" alt="" />
                    <p className='text-base leading-[1.5em] font-semibold max-w-[235px] text-[rgba(10,11,11,0.5)] text-center font-inter'>Startup Wise Guys portfolio company</p>
                </div>
                <div className='flex flex-col items-center gap-8 px-4 py-8 rounded-[32px] bg-[linear-gradient(180deg,_rgba(10,_11,_12,_.05),_rgba(10,_11,_12,_.015))]'>
                    <img className='w-full max-w-[200px]' src="../../public/card-lighthouse.svg" alt="" />
                    <p className='text-base leading-[1.5em] font-semibold max-w-[235px] text-[rgba(10,11,11,0.5)] text-center font-inter'>Lighthouse Ventures portfolio company</p>
                </div>
                <div className='flex flex-col items-center gap-8 px-4 py-8 rounded-[32px] bg-[linear-gradient(180deg,_rgba(10,_11,_12,_.05),_rgba(10,_11,_12,_.015))]'>
                    <img className='w-full max-w-[200px]' src="../../public/card-usf.svg" alt="" />
                    <p className='text-base leading-[1.5em] font-semibold max-w-[235px] text-[rgba(10,11,11,0.5)] text-center font-inter'>Winner of the government startup competition</p>
                </div>
                <div className='flex flex-col items-center gap-8 px-4 py-8 rounded-[32px] bg-[linear-gradient(180deg,_rgba(10,_11,_12,_.05),_rgba(10,_11,_12,_.015))]'>
                    <img className='w-full max-w-[200px]' src="../../public/card-arena.png" alt="" />
                    <p className='text-base leading-[1.5em] font-semibold max-w-[235px] text-[rgba(10,11,11,0.5)] text-center font-inter'>Finalist Lviv IT Arena Startup Competition 2021</p>
                </div>
            </div>
            <div className='my-[160px] max-w-[1150px] m-auto'>
                <div className='m-auto flex flex-col gap-10 items-center w-full max-w-[752px] bg-white shadow-[0_24px_48px_0_rgba(0,0,0,0.07)] justify-between pt-10 pb-16 px-8 rounded-[32px]'>
                    <p className='leading-[1.5em] font-normal text-[40px]'>💌</p>
                    <h2 className='text-[40px] leading-[1.3em] font-extrabold font-work'>Subscribe to know first</h2>
                    <p className='text-xl leading-[1.5em] font-normal; font-inter'>Our digest of the latest Workee news, articles and resources</p>
                    <form className='w-full flex items-center justify-center gap-2'>
                        <input className='text-xl leading-[1.5em] font-normal w-full max-w-[400px] bg-[rgba(10,11,11,0.05)] box-border px-4 py-3 rounded-2xl border-[none] focus:outline-none' type="text" placeholder='Your Email' />
                        <button className='text-xl leading-[1.5em] font-semibold bg-[#0a0b0b] text-white px-6 py-3 rounded-2xl border-[none] transition-[0.5s] duration-[all] ease-[ease] font-work hover:bg-[#00b278]'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='bg-white w-full gap-20 justify-items-center px-10 py-[88px] border-t-[rgba(10,11,11,0.1)] border-t border-solid'>
                <div className='max-w-[1150px] m-auto'>
                    <div className=' w-full flex flex-col gap-2  bg-[rgba(10,11,11,0.05)] p-8 rounded-3xl'>
                        <p className='text-[rgba(10,11,11,0.5)] leading-[150%] font-inter text-xs'>1. Workee charges a 5% transaction fee for the Starter plan, while the Workee Pro plan comes with a 0% transaction fee. Note, additional transaction fees from payment providers (Stripe, PayPal) may apply to all payments.</p>
                    </div>
                </div>
                <footer>
                    
                </footer>
            </div>
        </>
    )
}

export default Landing