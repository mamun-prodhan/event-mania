import images1 from "../../assets/birthday-party.jpg";
import images2 from "../../assets/anniversary.jpg";
import images3 from "../../assets/bachelor-party.jpg";
import images4 from "../../assets/big-ebent1.jpg";
import images5 from "../../assets/big-ebent2.jpg";
import images6 from "../../assets/confarence-event1.jpg";
import images7 from "../../assets/confarence-event2.jpg";
import images8 from "../../assets/engagement-party.jpg";
const Gallary = () => {
  return (
    <div className="my-10">
      <h2 className="text-center text-4xl font-bold mb-6">This is Gallary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src={images1} alt="" />
        <img src={images2} alt="" />
        <img src={images3} alt="" />
        <img src={images4} alt="" />
        <img src={images5} alt="" />
        <img src={images5} alt="" />
        <img src={images7} alt="" />
        <img src={images8} alt="" />
        <img src={images1} alt="" />
      </div>
    </div>
  );
};

export default Gallary;
