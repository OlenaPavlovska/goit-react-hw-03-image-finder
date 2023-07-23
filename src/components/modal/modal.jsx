import propTypes from 'prop-types'
import css from './modal.module.css'


export const Modal = ({imageFunction, onKeyDown, onClick, refModal })=>{
    const {largeImageURL, tags}= imageFunction
    return (
      <div tabIndex={'-1'} ref={refModal} onClick={onClick} onKeyDown={onKeyDown} className={css.overlay}>
        <div className={css.modal}>
    <img src={largeImageURL} alt={tags} />
  </div>
</div>
    )
}

Modal.propTypes = {
    onKeyDown: propTypes.func.isRequired,
    onClick:propTypes.func.isRequired,
    refModal: propTypes.object.isRequired,
    imageFunction: propTypes.object.isRequired
}