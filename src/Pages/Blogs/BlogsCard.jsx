const BlogsCard = ({ event }) => {
  const { eventName, photo, title, description } = event;
  return (
    <div className="border rounded-lg">
      <img src={photo} alt="" />
      <div className="p-4">
        <p className="font-bold mt-3">{eventName}</p>
        <h2 className="text-xl font-bold my-3">{title}</h2>
        <p>{description}</p>
        <button className="btn btn-primary mt-3">READ MORE</button>
      </div>
    </div>
  );
};

export default BlogsCard;
