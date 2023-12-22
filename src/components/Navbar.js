import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={props.myStyle}>
            <div className="container-fluid position-relative">
                <a className="navbar-brand m-md-auto" href="/" style={props.myStyle}>{props.title}</a>
                <div className="d-flex themes-container">
                    <button className='theme-toggle mx-1 rounded theme-maroon' onClick={() => props.toggleStyle('maroon')} style={props.myStyle}></button>
                    <button className='theme-toggle mx-1 rounded theme-orange' onClick={() => props.toggleStyle('orange')} style={props.myStyle}></button>
                    <button className='theme-toggle mx-1 rounded theme-yellow' onClick={() => props.toggleStyle('yellow')} style={props.myStyle}></button>
                    <button className='theme-toggle mx-1 rounded theme-blue' onClick={() => props.toggleStyle('blue')} style={props.myStyle}></button>
                    <button className='theme-toggle mx-1 rounded theme-black' onClick={() => props.toggleStyle('black')} style={props.myStyle}></button>
                    <button className='theme-toggle mx-1 rounded bg-white' onClick={() => props.toggleStyle('white')} style={props.myStyle}></button>
                </div>
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
