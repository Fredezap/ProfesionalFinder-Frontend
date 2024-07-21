import PropTypes from 'prop-types';

const LightblueButton = (props) => {
    return (
        <div>
            <button className='button button-light-blue '>{props.children}</button>
        </div>
    );
}

LightblueButton.propTypes = {
    children: PropTypes.node.isRequired
}

export default LightblueButton;