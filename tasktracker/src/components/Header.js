import Button from './Button'
import PropTypes from 'prop-types'
const Header = (props) => {
    return (
        <header className = "header">
            <h1>
                {props.title}
            </h1>
            <Button/>
        </header>
    )
}
Header.defultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}



export default Header
