import images1 from "../../assets/birthday-party.jpg";
import images2 from "../../assets/anniversary.jpg";
import images3 from "../../assets/bachelor-party.jpg";
import images4 from "../../assets/big-ebent1.jpg";
import images5 from "../../assets/big-ebent2.jpg";
import images7 from "../../assets/confarence-event2.jpg";
import images8 from "../../assets/engagement-party.jpg";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
import blog7 from "../../assets/blog7.jpg";
import blog8 from "../../assets/blog8.jpg";
const Gallary = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="my-6 md:my-10 px-3 lg:px-0"
    >
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10">
        Event Mania Gallary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        <img src={images1} alt="" />
        <img src={images2} alt="" />
        <img src={images3} alt="" />
        <img src={images7} alt="" />
        <img src={images8} alt="" />
        <img src={blog1} alt="" />
        <img src={blog2} alt="" />
        <img src={blog3} alt="" />
        <img src={blog4} alt="" />
        <img src={blog5} alt="" />
        <img src={blog6} alt="" />
        <img src={blog7} alt="" />
        <img src={blog8} alt="" />
      </div>
    </div>
  );
};

export default Gallary;
