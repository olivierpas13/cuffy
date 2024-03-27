import { useUser } from "@auth0/nextjs-auth0/client";
import Sidebar from "./Sidebar";
import { useState } from "react";
import ProductModal from "./modals/ProductModal";
import DeleteProductModal from "./modals/DeleteProdModal";

const Dashboard = () => {
  const user = useUser()?.user;
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    user && (
      <div className="drawer lg:drawer-open grid-cols-8">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <ProductModal isOpen={open} onClose={() => setOpen(false)} />
        <DeleteProductModal
          isOpen={openDelete}
          onClose={() => setOpenDelete(false)}
        />
        <div id="sidebar" className="col-span-1 drawer-side ">
          <Sidebar
            setOpen={setOpen}
            setOpenDelete={setOpenDelete}
            nickname={user.nickname}
            picture={user.picture}
          />
        </div>
        <div id="content" className="col-span-7 drawer-content flex flex-col">
          <p className="font-semibold text-primary flex-none navbar sitcky top-0 bg-white">
            Dashboard
          </p>
          <div>Stats (WORK IN PROGRESS)</div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
