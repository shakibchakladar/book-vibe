import { Link } from "react-router-dom";
import heroimg from "./../assets/hero-img.png";
const Banner = () => {
  return (
    <div className="hero md:h-[554px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-80">
        <img
          src={heroimg}
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="my-4 text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
          <Link to="/listedbook"><button className="btn bg-[#23BE0A] text-[#FFFFFF]">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
