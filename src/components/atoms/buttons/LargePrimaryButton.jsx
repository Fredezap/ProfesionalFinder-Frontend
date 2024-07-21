import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const LargePrimaryButton = ({ children, to, type }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <div>
            <button className='button large-primary-button' onClick={handleClick} type={type || 'button'}>
                {children}
            </button>
        </div>
    );
}

LargePrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default LargePrimaryButton;
