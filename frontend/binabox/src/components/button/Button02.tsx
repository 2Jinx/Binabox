import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Button02.propTypes = {
    title : PropTypes.string,
};

function Button02(props: { title: string; path: string; }) {
    const {title , path} = props;
    return (
        <Link to={path} className="tf-button style-2">{title}</Link>
    );
}

export default Button02;