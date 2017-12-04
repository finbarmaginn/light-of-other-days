import React from 'react'
import {connect} from 'react-redux'
import {closeImage, viewerResize, imageLoaded} from '../actions/index.js'

@connect((store) => {
  return {
    imageSrc: store.gallery.imageSrc,
    imageCap: store.gallery.imageCap,
    imageYear: store.gallery.imageYear,
    loading: store.gallery.loading,
    open: store.gallery.open,
    closed: store.gallery.closed,
    viewerHeight: store.gallery.viewerHeight,
    ratio: store.gallery.ratio,
    format: store.gallery.format,
    people: store.gallery.people
  }
})

class Viewer extends React.Component {
  viewerResize() {
    let viewerHeight = (window.innerHeight - 45);
    this.props.dispatch(viewerResize(viewerHeight))
  }

  componentWillMount() {
    this.viewerResize()
  }

  componentDidMount() {
    window.addEventListener("resize", this.viewerResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.viewerResize.bind(this))
  }

  disable(e) {
    e.preventDefault();
    return false;
  }

  closeImage(e) {
    this.props.dispatch(closeImage(e))
  }

  display(e) {
    e.target.style.display = "inline-block";
    this.props.dispatch(imageLoaded())
  }

  loader() {
    if (this.props.loading) {
      return <div className="loader">Loading...</div>
    } else {
      return <div/>
    }
  }

  render() {
    let {open, imageCap, imageSrc, viewerHeight, imageYear, ratio, format, people} = this.props
    let noOfPeople = people.length
    let noOFMcgoldricks = 0
    for(var i = 0; i < people.length; i++){
      if(people[i].second === "McGoldrick"){
        noOFMcgoldricks++
      }
    }

    let threeMcGoldricks = "Eddie, Hugh and May McGoldrick"
    let capToRender = noOFMcgoldricks === 3 ? threeMcGoldricks : imageCap

    // let isMcgoldricks =
    if (open) {
      let width = ratio.length ? viewerHeight * ratio[0] / ratio[1] : "100%";
      if(format === "35mmLandscape"){
        width = width - 14
      }
      return (
        <div className="viewer" onClick={this.closeImage.bind(this)}>
          <div className="wrap">
            <button>X</button>
            <div className="capContain" style={{maxWidth:width}}>
              <h4>{capToRender}<span>{imageYear}</span></h4>
              <img
                src={imageSrc}
                alt={imageCap}
                style={{maxHeight: viewerHeight}}
                onContextMenu={this.disable}
                onDragStart={this.disable}
              />
            </div>
            {this.loader()}
          </div>
        </div>
      )
    } else {
      return (
        <div/>
      )
    }
  }
}

export default Viewer
