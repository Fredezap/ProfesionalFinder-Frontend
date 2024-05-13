import PropTypes from 'prop-types';

const BlackButton = (props) => {
    return (
        <button className='button button-black' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

BlackButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

export default BlackButton;
