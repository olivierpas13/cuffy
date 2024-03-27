import React from "react";

const Skeleton = () => {
  let elements = [];

  for (let i = 0; i < 8; i++) {
    elements.push(
      <div className="skeleton opacity-50 rounded-md overflow-hidden h-72 lg:h-96" />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="skeleton opacity-50 w-2/5 h-12 m-5 " />
      <div className="grid mx-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {elements}
      </div>
    </div>
  );
};

export default Skeleton;
