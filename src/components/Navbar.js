import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={props.myStyle}>
            <div className="container-fluid position-relative">
                <a className="navbar-brand m-auto" href="/" style={props.myStyle}>{props.title}</a>
                <button className='btn theme-toggle' style={props.myStyle} onClick={props.toggleStyle}>Enable {props.mode} mode</button>
            </div>
        </nav>
    )
}

// export {myStyle};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Set title',
    aboutText: 'About'
}
