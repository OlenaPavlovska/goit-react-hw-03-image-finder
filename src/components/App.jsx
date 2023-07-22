import { Component } from "react";
import { Searchbar } from "./searchbar/searchbar";
import {ApiService} from '../services/api'
import Notiflix from 'notiflix'; 
import { ImageGallery } from './imageGallery/imageGallery'
import React from 'react';
import { Loaderbtn } from './button/button'
import { Loader } from "./loader/loader";
import { nanoid } from "nanoid";
import { Modal } from './modal/modal'





export class App extends Component {
  state = {
    images: [],
    querry: '',
    maxPage: 0,
    page: 1,
    refElem: React.createRef(),
    isLoading: false,
    showImage: { largeImageURL: "" },
    isShowModal: false,
    refModal: React.createRef(),
  }

  async componentDidUpdate(prevProps, prevState) {
   
    const { query, page, maxPage, isLoading, images, isShowModal, refModal, refElem } = this.state
  
    if (isShowModal) refModal.current.focus()
    if (isLoading) {
      try {
        const data = await ApiService.getImages(query, page);
        if (!data.hits.length) throw new Error("Sorry, there are no images matching your search query. Please try again.");
        const imagesPage = this.findGalleryImage(data.hits)
        this.setState({ images: [...images, ...imagesPage] })
        if (maxPage === 0) this.setState({ maxPage: Math.ceil(data.totalHits / 12) })
      } catch (error) {
        this.onError(error)
      } finally {
        this.setState({ isLoading: false });
      }
      const prevImages = prevState.images
      if (images.length > 0 && prevImages.length !== images.length) refElem.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
    handleChange = ({ target: { value, name } }) => {
      this.setState({ [name]: value.trim() })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const { query } = this.state;
      this.props.onSubmit(query)
      this.setState({ query: '' })
      if (!query.trim()) return Notiflix.Notify.failure(`Fill the search field`)

    }
    resetSearch = () => this.setState({ images: [], page: 1, maxPage: 0, isLoading: true })

    loadBtn = () => {
      this.setState(prevPage => {
        return { page: prevPage + 1, loading: true }
      }
      )
    }

    onError = err => Notiflix.Notify.failure(err.message)

    findGalleryImage = data => data.map(({ webformatURL, largeImageURL }) => {
      return { id: nanoid(), webformatURL, largeImageURL }
    })
    


    clickOnImage = ({ target: { dataset: { large }, alt } }) => {
  
      const imageFunction = { largeImageURL: large }
      this.setState({ showImage: imageFunction, isShowModal: true })
    }
    closeModal = () => this.setState({ isShowModal: false })

    modalClick = (e) => {
      if (!e.target.src) this.closeModal()
    }
    escCloseModal = (e) => {
      if (e.key === 'escape') this.closeModal()
    }
 

    render() {
      const { query, images, refElem, page, maxPage, isLoading, isShowModal, showImage, refModal } = this.state
      return (
        <div>
          <Searchbar query={query} onChange={this.handleChange} onSubmit={this.handleSubmit} />
          {images.length > 0 && <ImageGallery images={images} onClick={this.clickOnImage} ref={refElem} />}
          <Loader render={isLoading} />
          {page < maxPage && <Loaderbtn onClick={this.loadBtn} />}
          {isShowModal && <Modal imageFunction={showImage} refModal={refModal} onClick={this.modalClick} onKeyDown={this.escCloseModal} />}
        
        </div>
      )
    }



  
}


