import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const LargePrimaryButton = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.to);
    };


    return (
        <div>
            <button className='button large-primary-button' onClick={handleClick} type={props.children}>{props.children}</button>
        </div>
    );
}

LargePrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
}

export default LargePrimaryButton;