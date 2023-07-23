import propTypes from 'prop-types'
import css from './button.module.css'



export const Loaderbtn = ({ onClick }) => {
    return (
        <button className={css.button} type="button" onClick={onClick}>Load more</button>
    )
}
Loaderbtn.propTypes = {
    onClick: propTypes.func.isRequired
}