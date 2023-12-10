"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const user = useUser()?.user;

  console.log(useUser().user);

  return (
    user && (
      <div className="container h-screen flex overflow-auto">
        <Sidebar nickname={user.nickname} picture={user.picture} />
        <div id="content" className="container w-7-12">
          <h1 className="mb-5 text-5xl font-bold text-primary-content">
            Dashboard
          </h1>
        </div>
        {/* <input type="file" className="file-input w-full max-w-xs" /> */}
        {/* <button onClick={() => createProduct()}>TEST</button> */}
      </div>
    )
  );
};

export default Dashboard;
