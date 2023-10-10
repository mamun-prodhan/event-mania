import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import WhoWeAre from "./WhoWeAre";
import Testimonials from "./Testimonials";

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <WhoWeAre></WhoWeAre>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
