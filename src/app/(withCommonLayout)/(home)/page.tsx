import { Lekton } from '@next/font/google'

const lektonFont = Lekton({
    subsets: ['latin'],
    weight: '400',
})
const page = () => {
    return (
        <div className={`${lektonFont.className} px-5`}>
            <div className='relative'>
                <p className='first-letter:text-[#ff6a00] text-xl font-semibold'>About Me</p>
                <div className=' absolute left-[-10px] top-0 rounded-full bg-gradient-to-r from-[#ffd58c] h-[30px] w-[30px] '></div>
            </div>
            <div>
                <h1 className='text-lg font-semibold mt-3 mb-2'>Hello! I’m Bulbul Ahammed.</h1>
                <p className='font-medium text-lg'>I’m a passionate <span className='font-bold'>MERN stack developer</span> with a mission to create <span className='font-bold'> high-performance, scalable, and user-friendly web applications.</span> With a strong command over <span className='font-bold'> React, Next.js, TypeScript, and MongoDB, </span> I help businesses and startups build their digital presence with cutting-edge solutions. Let’s build something amazing together!</p>
            </div>
        </div>
    );
};

export default page;