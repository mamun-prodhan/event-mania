import { FaBookmark } from "react-icons/fa";
const BlogsCard = ({ event }) => {
  const { eventName, photo, title, description } = event;
  return (
    <div className="border rounded-xl">
      <img className="rounded-t-xl" src={photo} alt="" />
      <div className="p-4">
        <p className="font-bold mt-3 flex items-center gap-3 text-yellow-500">
          <FaBookmark></FaBookmark> {eventName}
        </p>
        <h2 className="text-xl font-bold my-3">{title}</h2>
        <p>{description}</p>
        <button className="btn btn-primary mt-3">READ NOW</button>
      </div>
    </div>
  );
};

export default BlogsCard;
