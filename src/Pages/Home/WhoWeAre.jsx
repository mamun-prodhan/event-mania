const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mt-32">
      <div className="flex-1">
        <h4 className="text-xl  tracking-[4px]">WE ARE Event Mania</h4>
        <h2 className="text-5xl my-6">
          <span className="font-extrabold">No.1 </span>
          <span className="font-medium">Events Management</span>
        </h2>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <hr className="h-1 my-3 bg-black" />
        <p className="my-6 text-lg">
          Delivering unforgettable events, our mission in event management is to
          create seamless experiences. From concept to execution, we craft
          exceptional moments that captivate, connect, and leave a lasting
          impression.
        </p>
        <p className="italic font-bold text-lg">
          With passion and precision, we specialize in curating extraordinary
          events. Our mission: transforming visions into reality, making every
          occasion unforgettable.
        </p>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Our Vission</h2>
        <hr className="h-1 my-3 bg-black" />
        <p className="my-6 text-lg">
          Our vision in event management is to be the industry leader, setting
          new standards of innovation, creativity, and excellence. We aspire to
          inspire memorable experiences and elevate event planning worldwide.
        </p>
        <p className="italic font-bold text-lg">
          With a commitment to continuous growth, we envision a future where our
          event management expertise is globally recognized, setting trends and
          exceeding expectations.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
