import propTypes from 'prop-types'
// import css from './modal.module.css'


export const Modal = ({ onKeyDown, onClick, refModal, imageFunction }) => {
    const {largeImageURL}= imageFunction
    return (
        <div ref={refModal} onClick={onClick} onKeyDown={onKeyDown} class="overlay">
  <div class="modal">
    <img src={largeImageURL} alt="" />
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