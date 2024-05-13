import PropTypes from 'prop-types';

const RedButton = (props) => {
    return (
        <button className='button button-red' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

RedButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

export default RedButton;