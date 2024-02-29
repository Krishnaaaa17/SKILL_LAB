import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import Logo_new from '@/app/Logo_new.png';

const Navbar = () => {
  return (
    <nav className="bg-purple-500 p-4 flex items-center justify-end">
        {/* <div>
            <Link href='/'>
            <Image src={Logo_new} alt='Logo' width={40} height={40} className='rounded-full border' />
            </Link>
        </div> */}
        <div className='flex gap-10 pr-8'>
            <Link href="/signup" className='text-black'>
                SignUp
            </Link>
            <Link href="/signin" className='text-black'>
            SignIn
            </Link>
        </div>
    </nav>
  );
};

export default Navbar;