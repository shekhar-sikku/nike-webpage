import { useState } from "react";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/#home'>
                    <img src={headerLogo} alt='logo' width={129} height={29} className='m-0 w-[129px] h-[29px]' />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-12 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal font-medium text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-8'>
                    <a href='#'>Sign in</a>
                    <span>/</span>
                    <a href='#'>Explore now</a>
                </div>

                <div className='hidden max-lg:block'>
                    {open ? <RiCloseLine size={30} onClick={() => setOpen((prev) => !prev)} />
                        : <RiMenu3Line size={30} onClick={() => setOpen((prev) => !prev)} />}

                    {open && (
                        <div className={`${open ? 'flex' : 'hidden'} z-10 flex-col p-10 absolute top-20 md:right-10 right-2 mx-6 my-2 
                        min-w-[160px] rounded-[10px] shadow-3xl shadow-coral-red sidebar bg-white`}>

                            <ul className='flex-1 flex flex-col justify-center items-center gap-6 max-lg:flex'>
                                {navLinks.map((item) => (
                                    <li key={item.label} onClick={() => setOpen((prev) => !prev)}>
                                        <a href={item.href} className='font-montserrat leading-normal font-medium cursor-pointer text-lg'>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header >
    );
};

export default Navbar;