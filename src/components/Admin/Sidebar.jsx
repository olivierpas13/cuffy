import { useState } from "react";
import ProductModal from "./modals/ProductModal";
import Link from "next/link";

const Sidebar = ({ nickname, picture, setOpen, setOpenDelete }) => {
  return (
    <div id="sidebar" className=" col-span-1 drawer-side bg-white">
      <ul className="p-4 flex flex-col gap-y-4">
        <li>
          <Link className="flex items-center" href="/admin/dashboard">
            <img
              className="mask mask-squircle w-10"
              src={picture}
              alt="pfp picture"
            />
            <p className="pl-5 font-semibold ">{nickname}</p>
          </Link>
        </li>
        <li className="mt-10 w-100%" htmlFor="">
          <p className="p-2  font-semibold rounded-lg text-center bg-primary text-white bg-clip-border">
            Products operations
          </p>
        </li>
        <li>
          <button className="btn btn-ghost" onClick={() => setOpen(true)}>
            Create a product
          </button>
        </li>

        <li>
          <button className="btn btn-ghost" onClick={() => setOpenDelete(true)}>
            Delete a product
          </button>
        </li>
        <li>
          <button className="btn btn-ghost">Edit a product</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
