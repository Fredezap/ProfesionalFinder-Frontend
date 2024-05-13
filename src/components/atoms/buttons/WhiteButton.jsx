import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const WhiteButton = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.to);
    };

    return (
        <div>
            <button className='button button-white' type={props.children} onClick={handleClick}>{props.children}</button>
        </div>  
    );
}

WhiteButton.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
}

export default WhiteButton;