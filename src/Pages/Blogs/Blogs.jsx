import BlogsCard from "./BlogsCard";
import image from "../../assets/big-ebent1.jpg";

const Blogs = () => {
  const events = [
    {
      id: 1,
      eventName: "Family marriage event",
      photo: image,
      title: "The biggest Marriage Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      eventName: "Family marriage event",
      photo: image,
      title: "The biggest Marriage Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      eventName: "Family marriage event",
      photo: image,
      title: "The biggest Marriage Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      eventName: "Family marriage event",
      photo: image,
      title: "The biggest Marriage Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      eventName: "Family marriage event",
      photo: image,
      title: "The biggest Marriage Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      eventName: "Family marriage event",
      photo: image,
      title: "The biggest Marriage Event",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className="my-8 lg:my-10">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">EVENT MANIA</h2>
        <h2 className="text-xl md:text-2xl font-semibold my-4 lg:my-6">
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
