import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const selectedService = services.filter((service) => service.id === id);
  console.log(selectedService);
  return (
    <div className="mt-12">
      <img
        className="rounded-t-lg mb-10"
        src={selectedService[0].image}
        alt=""
      />
      <h2 className="text-4xl font-semibold mb-8 ">
        {selectedService[0].title}
      </h2>
      <p className="text-justify">{selectedService[0].description}</p>
      <button className="btn btn-primary mt-8">Book Now</button>
    </div>
  );
};

export default ServiceDetails;
