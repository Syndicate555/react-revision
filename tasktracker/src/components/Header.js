import Button from './Button'
import PropTypes from 'prop-types'
const Header = (props) => {
    const onClick = () => {
        console.log("click")
    }
    return (
        <header className = "header">
            <h1>
                {props.title}
            </h1>
            <Button onClick = {onClick} color = 'steelblue' text = 'Add'/>
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
