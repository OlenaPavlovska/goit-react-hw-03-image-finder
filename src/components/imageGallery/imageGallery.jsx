import propTypes from 'prop-types'
import css from './imageGallery.module.css'
import {ImageGalleryItem} from '../imageGalleryItem/imageGalleryItem'



export const ImageGallery = ({ images, onClick, refElem }) => {
    return(
        <ul className={css.gallery} onClick={onClick}>
        {images.map(item => {
            return <ImageGalleryItem key={item.id} dataItem={item}/>
       })}
   <li ref={refElem}> </li>
</ul> 
)}

ImageGallery.propTypes= {
    images: propTypes.array.isRequired,
    onClick: propTypes.func.isRequired
}