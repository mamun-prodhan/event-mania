import React from "react";

const WhoWeAre = () => {
  return (
    <div className="flex items-center gap-10 mt-32">
      <div className="flex-1">
        <h4 className="text-xl  tracking-[4px]">WE ARE Event Mania</h4>
        <h2 className="text-5xl my-6">
          <span className="font-extrabold">No.1 </span>
          <span className="font-medium">Events Management</span>
        </h2>
        <button className="btn btn-secondary">Get Started</button>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <hr className="h-1 my-3 bg-black" />
        <p className="my-6 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe enim
          maiores sint commodi ipsum necessitatibus voluptates dolore fugit
          repudiandae aut provident voluptatem, voluptate quaerat error ratione
          dolor reiciendis. Illum, neque.
        </p>
        <p className="italic font-bold text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          pariatur quos cupiditate aliquid odit magni libero fuga id possimus
          eveniet.
        </p>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Our Vission</h2>
        <hr className="h-1 my-3 bg-black" />
        <p className="my-6 text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe enim
          maiores sint commodi ipsum necessitatibus voluptates dolore fugit
          repudiandae aut provident voluptatem, voluptate quaerat error ratione
          dolor reiciendis. Illum, neque.
        </p>
        <p className="italic font-bold text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          pariatur quos cupiditate aliquid odit magni libero fuga id possimus
          eveniet.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
