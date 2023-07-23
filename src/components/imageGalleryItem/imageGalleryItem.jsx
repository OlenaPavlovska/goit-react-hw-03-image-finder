import propTypes from 'prop-types'
import css from './imageGalleryItem.module.css'

export const ImageGalleryItem = ({ dataItem }) => {
    const {webformatURL,tags ,largeImageURL} = dataItem
    return (
        <li className={css.card}>
            <img className={css.img} src={webformatURL} alt={tags} data-large={largeImageURL } />
    </li>
    )
   
}
ImageGalleryItem.propTypes = {
    dataItem:propTypes.object.isRequired
}  