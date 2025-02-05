import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="fixed z-10 navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="text-xl btn btn-ghost">Book Vibe</a>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
      <NavLink className={({isActive})=>isActive?'border-2 border-[#23BE0A] rounded-lg text-[#23BE0A] font-bold':'font-bold' } to="/"><li><a href="">Home</a></li></NavLink>
      <NavLink className={({isActive})=>isActive?'border-2 border-[#23BE0A] rounded-lg text-[#23BE0A] font-bold':'font-bold' }  to="/listedbook"><li><a href="">Listed Books</a></li></NavLink>
      <NavLink className={({isActive})=>isActive?'border-2 border-[#23BE0A] rounded-lg text-[#23BE0A] font-bold':'font-bold' }  to="/pagestoread"><li><a href="">Pages to Read</a></li></NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mx-2 text-white bg-[#23BE0A]">Sign In</a>
    <a className="btn text-white bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
    );
};

export default Nav;