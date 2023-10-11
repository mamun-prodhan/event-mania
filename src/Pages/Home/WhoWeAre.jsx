const WhoWeAre = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1500"
      className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 mt-16 md:mt-28 lg:mt-32 px-6"
    >
      <div className="flex-1">
        <h4 className="text-xl text-center lg:text-start tracking-[4px]">
          WE ARE Event Mania
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-start my-3 md:my-6">
          <span className="font-extrabold">No.1 </span>
          <span className="font-medium">Events Management</span>
        </h2>
        <button className="btn btn-primary hidden lg:block">Get Started</button>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center ">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Our Mission
          </h2>
          <hr className="h-0.5 my-3 bg-black" />
          <p className="my-6 text-base md:text-lg">
            Delivering unforgettable events, our mission in event management is
            to create seamless experiences. From concept to execution, we craft
            exceptional moments that captivate, connect, and leave.
          </p>
          <p className="italic font-bold text-base md:text-lg">
            With passion and precision, we specialize in curating extraordinary
            events. Our mission: transforming visions into reality, making every
            occasion unforgettable.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Our Vission
          </h2>
          <hr className="h-0.5 my-3 bg-black" />
          <p className="my-6 text-base md:text-lg">
            Our vision in event management is to be the industry leader, setting
            new standards of innovation, creativity, and excellence. We aspire
            to inspire memorable experiences and elevate event planning.
          </p>
          <p className="italic font-bold text-base md:text-lg">
            With a commitment to continuous growth, we envision a future where
            our event management expertise is globally recognized, setting
            trends and exceeding expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
