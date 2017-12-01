import React from 'react'
import Masonry from 'react-masonry-component'
import Viewer from './Viewer'
import MasonryItem from '../components/MasonryItem'
import SearchBox from '../components/SearchBox'
import images from '../imgs/finalImages'
import {connect} from 'react-redux'
import {loadImages, imagesLoaded} from '../actions/index'
import Loader from '../components/Loader'
import StickyDiv from 'react-stickydiv'

@connect((store) => {
  return {
    perPage: store.gallery.perPage,
    loading: store.gallery.loading,
    images: store.gallery.images,
    imageSrc: store.gallery.imageSrc,
    imageCap: store.gallery.imageCap,
    imageYear: store.gallery.imageYear,
    open: store.gallery.open,
    closed: store.gallery.closed,
    ratio: store.gallery.ratio,
    format: store.gallery.format,
    searchTerm: store.gallery.searchTerm,
    filterActive: store.gallery.filterActive,
    hasResults: store.gallery.hasResults
  }
})

class Gallery extends React.Component {
  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
    let {searchTerm} = this.props;
    let toRender = searchTerm.length ? this.filterSearch(searchTerm) : images.slice(0, 13)
    this.props.dispatch(loadImages(toRender))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  filterSearch(term){
    return images.filter(function(i, n){
	      let searchVal = term.toLowerCase().trim();
	      let cap = typeof i.cap() !== "undefined" ? i.cap().toLowerCase() : "";
	      if (cap.indexOf(searchVal) > -1) return i
    });
  }

  handleScroll() {
    let {searchTerm, loading, perPage, filterActive} = this.props

    if(!filterActive) {
      if (this.props.images.length < 107 && !loading) {
        const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight,
          body = document.body,
          html = document.documentElement,
          docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
          windowBottom = windowHeight + window.pageYOffset

        if (windowBottom >= (docHeight - 1000)){
          let indexToRender = this.props.images.length += perPage
          let imagesToRender = images.slice(0, indexToRender)
          this.loadImages(imagesToRender)
        }
      }
    }
  }

  loadImages(images) {
    this.props.dispatch(loadImages(images))
  }

  display(e) {
    if (e.progressedCount === this.props.images.length) {
      this.props.dispatch(imagesLoaded())
      e.elements[0].style.display = 'block'
    }
  }

  loader() {
    let {dispatch} = this.props
    if (this.props.loading) {
      return <Loader dispatch={dispatch}/>
    }
  }

  render() {
    let {images, searchTerm, filterActive, dispatch, hasResults} = this.props
    let masonryOptions = {
      itemSelector: '.image-element-class',
      columnWidth: '.image-element-class',
      percentPosition: true,
      transitionDuration: 0,
      gutter: 5
    }
    return (
      <section className="wrap">
        <header id="galleryHeader">
          <h2>Gallery</h2>
          <SearchBox
            searchTerm={searchTerm}
            filterActive={filterActive}
            dispatch={dispatch}
            hasResults={hasResults}
          />
        </header>
        <Viewer/>
        <Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={masonryOptions}
          onImagesLoaded={this.display.bind(this)}
          updateOnEachImageLoad={true}
        >
          <div className='mass-column-width'/>
          {images.map((image, ind) => {
            return <MasonryItem image={image} key={ind}/>
          })}
        </Masonry>
        {this.loader()}
      </section>
    )
  }
}

export default Gallery
