import PropTypes from 'prop-types';

const LargePrimaryButton = (props) => {
    return (
        <div>
            <button className='button largePrimaryButton' type={props.children}>{props.children}</button>
        </div>
    );
}

LargePrimaryButton.propTypes = {
    children: PropTypes.node.isRequired
}

export default LargePrimaryButton;
