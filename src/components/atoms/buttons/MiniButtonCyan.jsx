import PropTypes from 'prop-types';

const MiniButtonCyan = (props) => {
    return (
        <button className='button mini-button-cyan' onClick={props.onClick}>
            {props.children}
        </button>
    );
}

MiniButtonCyan.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

export default MiniButtonCyan;