import oo from "../Image/oo.png";

const Test = () => {
  return (
    <div className="container mx-auto">
      {/* This image will be hidden on screens smaller than tablet */}
      <img className="hidden md:block mx-auto" src={oo} alt="Your Image" />
    </div>
  );
};

export default Test;
