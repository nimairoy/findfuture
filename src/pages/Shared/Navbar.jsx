import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { useCallback, useState } from "react";
import {RxAvatar} from 'react-icons/rx'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const user = ''

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
      }, [])

    const navItem = <>
        <li><Link to='/' className="text-[16px] border-b-2 border-transparent hover:border-b-2 hover:border-slate-200 hover:bg-transparent hover:rounded-none">Home</Link></li>
        <li><Link to='/colleges' className="text-[16px] border-b-2 border-transparent hover:border-b-2 hover:border-slate-200 hover:bg-transparent hover:rounded-none">Colleges</Link></li>
        <li><Link to='/admission' className="text-[16px] border-b-2 border-transparent hover:border-b-2 hover:border-slate-200 hover:bg-transparent hover:rounded-none">Admission</Link></li>
        <li><Link to='/mycollege' className="text-[16px] border-b-2 border-transparent hover:border-b-2 hover:border-slate-200 hover:bg-transparent hover:rounded-none">My College</Link></li>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <div className='hidden md:block'>
            <RxAvatar size={'22'} />
          </div>
        </div>
        {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-1/4 bg-white overflow-hidden right-0 top-24 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>
            {user ? (
              <div
                // onClick={logOut}
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
              >
                Logout
              </div>
            ) : (
              <>
               <li>
                 <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Login
                </Link>
                </li>
               <li>
                 <Link
                  to='/signup'
                  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                >
                  Sign Up
                </Link>
                </li>
              </>
            )}
          </div>
        </div>
      )}
    </>

    return (
        <div className="bg-base-100 h-[90px] shadow-sm">
            <Container>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItem}
                            </ul>
                        </div>
                        <Link to='/' className="text-2xl font-semibold border-b-2 border-transparent hover:border-b-2 hover:border-slate-200">FindFuture</Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItem}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;