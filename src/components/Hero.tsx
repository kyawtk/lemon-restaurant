import heroImg from "../assets/icons_assets/restauranfood.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" relative innerWidth flex-wrap flex flex-col md:flex-row gap-5 mt-10 justify-center px-5 ">
      <div className="gradient-01 top-0 left-0"></div>
      <div className="flex flex-col gap-6 md:ml-[100px] md:mt-10  justify-start py-6 px-8 w-full md:max-w-[600px] ">
        <h1 className="hero__heading">Little Lemon</h1>
        <h2 className="subtitle">Chicago</h2>
        <p className="">
          Have the once in a life time reservation at the finest resatura in the
          world the quick brown fo x jomps ofve the lazy dog Have the once in a
          life time reservation at the finest resatura in the world the quick
          brown fo x jomps ofve the lazy dog
        </p>
        <div className="flex gap-3">
          <Link to="/booking">
            <button className="btn bg-lemon text-white underline hover:text-lemon hover:bg-white ">
              Get a table now
            </button>
          </Link>

          <button className="btn underline ">See Menu</button>
        </div>
      </div>
      <div className="w-[300px] md:w-[350px] rounded-3xl overflow-hidden mx-auto">
        <img src={heroImg} alt="chef photo" className="image object-cover" />
      </div>
      <div className="gradient-01 -bottom-[100px]  right-0"></div>
    </section>
  );
};

export default Hero;
