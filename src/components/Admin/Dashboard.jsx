"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
const Dashboard = () => {
  const user = useUser()?.user;

  console.log(useUser().user);

  return (
    user && (
      <div className="container h-screen flex overflow-auto">
        <div id="sidebar" className="container w-3/12	bg-white">
          <ul className="p-4 flex flex-col gap-y-4">
            <li>
              <a className="flex items-center" href="/admin/dashboard">
                <img
                  className="mask mask-squircle w-10"
                  src={user.picture}
                  alt="pfp picture"
                />
                <p className="pl-5 font-semibold ">{user.nickname}</p>
              </a>
            </li>
            <li className="pt-10">
              <button className="btn btn-ghost">Create a product</button>
            </li>
            <li>
              <button className="btn btn-ghost">Delete a product</button>
            </li>
            <li>
              <button className="btn btn-ghost">Edit a product</button>
            </li>
          </ul>
        </div>
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
