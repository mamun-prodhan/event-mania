import BlogsCard from "./BlogsCard";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
import blog7 from "../../assets/blog7.jpg";
import blog8 from "../../assets/blog8.jpg";

const Blogs = () => {
  const events = [
    {
      id: 1,
      eventName: "Grand Wedding Celebration",
      photo: blog1,
      title: "A Journey of Love and Togetherness",
      description:
        "Celebrate the union of two hearts in a grand wedding filled with love and joy.",
    },
    {
      id: 2,
      eventName: "Engagement Extravaganza",
      photo: blog2,
      title: "Unveiling a Lifetime of Love",
      description:
        "Join us as we announce our engagement and embark on a lifelong journey of love and commitment.",
    },
    {
      id: 3,
      eventName: "Birthday Bash Bonanza",
      photo: blog3,
      title: "Creating Cherished Memories",
      description:
        "Come celebrate a birthday filled with laughter, joy, and the creation of unforgettable memories.",
    },
    {
      id: 4,
      eventName: "Marriage Magic",
      photo: blog4,
      title: "Love Story Begins Here",
      description:
        "Witness the magic of love as two souls unite in marriage, the beginning of their love story.",
    },
    {
      id: 5,
      eventName: "Engagement Elegance",
      photo: blog5,
      title: "The Bond of Forever",
      description:
        "Experience the elegance of our engagement celebration, marking the bond that will last forever.",
    },
    {
      id: 6,
      eventName: "Birthday Spectacular",
      photo: blog6,
      title: "A Day Filled with Love and Laughter",
      description:
        "Join us for a birthday spectacular, a day of love, laughter, and joyful celebrations.",
    },
    {
      id: 7,
      eventName: "Eternal Love Celebration",
      photo: blog7,
      title: "Celebrating Love and Commitment",
      description:
        "A celebration of eternal love and unwavering commitment that will warm your hearts.",
    },
    {
      id: 8,
      eventName: "Engagement Bliss",
      photo: blog8,
      title: "A Night to Remember",
      description:
        "An engagement bliss awaits you, promising a night to remember filled with love and happiness.",
    },
    {
      id: 2,
      eventName: "Engagement Extravaganza",
      photo: blog2,
      title: "Unveiling a Lifetime of Love",
      description:
        "Join us as we announce our engagement and embark on a lifelong journey of love and commitment.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="my-8 lg:my-10 px-3 md:px-4 lg:px-0"
    >
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">EVENT MANIA</h2>
        <h2 className=" text-xl md:text-2xl font-semibold my-4 lg:my-6">
          LATEST BLOGS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <BlogsCard key={idx} event={event}></BlogsCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
