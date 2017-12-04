import React from 'react'
import {connect} from 'react-redux'
import {viewImage} from '../actions/index.js'

@connect((store) => {
  return {
    imageSrc: store.gallery.imageSrc,
    imageCap: store.gallery.imageCap,
    imageYear: store.gallery.imageYear,
    ratio: store.gallery.ratio,
    format: store.gallery.format,
    open: store.gallery.open,
    closed: store.gallery.closed,
    people: store.gallery.people
  }
})

class MasonryItem extends React.Component {
  viewImage() {
    if (window.innerWidth > 550 && this.props.image.cap()) {
      this.props.dispatch(viewImage(this.props.image))
    }
  }
  render() {
    let {image} = this.props;

    const disable = (e) => {
      e.preventDefault()
      return false
    }

    if (image.cap()) {
      return (
        <li className="image-element-class">
          <button onClick={this.viewImage.bind(this)}>
            <img
              src={image.src.medium}
              alt={image.cap()}
              onContextMenu={disable.bind(this)}
              onDragStart={disable.bind(this)}
            />
            <div>
              <p>
                {image.cap()}
                <br />
                {image.year}
              </p>
            </div>
          </button>
        </li>
      )
    } else {
      return (
        <li className="image-element-class">
          <img
            src={image.src.large}
            alt={image.src.large}
            onContextMenu={disable.bind(this)}
          />
        </li>
      )
    }
  }
}

export default MasonryItem
