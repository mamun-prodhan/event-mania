import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, title, image, price, description } = service;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card card-compact  bg-base-100 shadow-xl pb-4"
    >
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100 ? description.slice(0, 100) : description}..
        </p>
        <p className="text-lg font-semibold">Price: ${price}</p>
        <div className="card-actions mt-3">
          <Link to={`details/${id}`}>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-bold hover:bg-indigo-800">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
