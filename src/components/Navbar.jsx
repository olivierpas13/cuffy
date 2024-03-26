import React from "react";
import Link from "next/link";
import Image from "next/image";
import wpLink from "@/utils/wpLInk";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="black"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Acerca de nosotros</a>
            </li>
            <li>
              <a>Productos</a>
              <ul className="p-2">
                <li>
                  <Link href={"/mas-vendidos"}>Los más vendidos</Link>
                </li>
                <li>
                  <Link href={"/productos"}>Todos</Link>
                </li>
                <li>
                  <Link href={"/productos/ramos"}>Ramos</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image
            className="ml-10"
            height={50}
            width={110}
            src="/cuffy-logo.png"
            alt="Cuffy logo"
          />
        </Link>{" "}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="btn btn-sm " >Acerca de nosotros</a>
          </li>
          <li>
            <details>
              <summary className="btn btn-sm mx-10">Productos</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li >
                  <Link href={"/mas-vendidos"}>Los más vendidos</Link>
                </li>
                <li >
                  <Link href={"/productos"}>Todos</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" href={wpLink}>
          CONTÁCTANOS
        </a>
      </div>
    </div>
  );
};

export default Navbar;