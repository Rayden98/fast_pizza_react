import PropTypes from "prop-types"; // Import PropTypes
import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-900 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
};

export default LinkButton;
