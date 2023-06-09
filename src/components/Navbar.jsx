import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
    </div>
    <Link href="/">
      <Image className="ml-10" height={50} width={110} src="/cuffy-logo.png" alt="Cuffy logo" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="mx-3" ><Link href={"/acerca-de-nosotros"} >Acerca de nosotros</Link></li>
      <li className="mx-3" tabIndex={0}>
        <Link href={"/productos"} >
          Productos
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-base-100">
          <li><Link href={"/mas-vendidos"} >Los más vendidos</Link></li>
          <li><Link href={"/productos"} >Todos</Link></li>
        </ul>
      </li>
      <li className="mx-3"><a className="btn btn-outline" >Contáctanos</a></li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;
