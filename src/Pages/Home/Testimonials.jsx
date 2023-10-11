import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg";
import logo3 from "../../assets/logo3.jpg";
import logo4 from "../../assets/logo4.jpg";
import logo5 from "../../assets/logo5.jpg";
import logo6 from "../../assets/logo6.jpg";
import logo7 from "../../assets/logo7.jpg";
import logo8 from "../../assets/logo8.jpg";
import logo9 from "../../assets/logo9.jpg";

const Testimonials = () => {
  return (
    <div className="mt-32">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Our Partners
      </h2>
      <p className="text-center my-4">Know about our sponsors</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
        <img src={logo8} alt="" />
        <img src={logo9} alt="" />
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
      </div>
    </div>
  );
};

export default Testimonials;
