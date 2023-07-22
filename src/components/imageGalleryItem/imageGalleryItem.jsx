import propTypes from 'prop-types'
// import css from './imageGalleryItem.module.css'

export const ImageGalleryItem = ({ dataItem }) => {
    const {webformatURL ,largeImageURL} = dataItem
    return (
        <li class="gallery-item">
            <img src={webformatURL} alt="" data-large={largeImageURL } />
    </li>
    )
   
}
ImageGalleryItem.propTypes = {
    dataItem:propTypes.object.isRequired
}  