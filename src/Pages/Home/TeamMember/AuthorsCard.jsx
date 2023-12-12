import "./style.css";
import PropTypes from "prop-types";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";

const AuthorsCard = ({ author }) => {
  const { img, name, profession } = author;
  return (
    <div className="hover-card">
      <div className="image-container card  lg:card-side bg-base-100 shadow-xl">
        <figure className="p-5 relative">
          <img className="h-48 w-48" src={img} alt="Album" />
        </figure>

        <div className="author-name h-full    space-y-3">
          <div className="  space-y-2">
          <h2 className="text-2xl font-semibold pl-5">{name}</h2>
          <p className="text-lg pl-4">{profession}</p>
          </div>
          <div className="social-icons space-x-3 text-3xl items-center space-y-5">
            <BiLogoFacebook></BiLogoFacebook>
            <BiLogoTwitter></BiLogoTwitter>
            <AiOutlineInstagram></AiOutlineInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorsCard;

AuthorsCard.propTypes = {
  author: PropTypes.object,
};
