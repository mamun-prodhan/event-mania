import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  return (
    <div>
      <h2>This is Service details page</h2>
      <h2 className="text-5xl font-bold">Id of............ {id}</h2>
    </div>
  );
};

export default ServiceDetails;
