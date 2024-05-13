import { GiPlagueDoctorProfile } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logo = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.to);
    };

    return (
        <div className='logo-box' onClick={handleClick}>
            <GiPlagueDoctorProfile />
        </div>
    );
}

Logo.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
}

export default Logo;
