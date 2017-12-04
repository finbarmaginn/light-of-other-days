import React from 'react'
import {connect} from 'react-redux'
import {searchImages, loadImages, imagesLoaded} from '../actions'
import images from '../imgs/finalImages'
import accentMap from './accentMap'
import StickyDiv from 'react-stickydiv'
class SearchBox extends React.Component {
  searchImage(e) {
    const accent_fold = (s) => {
      if (!s) {
        return '';
      }
      let ret = '';
      for (var i = 0; i < s.length; i++) {
        ret += accentMap[s.charAt(i)] || s.charAt(i);
      }
      return ret;
    }

    let val = e.target.value;
    let results = images.filter(function(i, n){
        let lowerCaseVal = val.toLowerCase()
	      let searchVal = accent_fold(lowerCaseVal.trim())
        let cap = i.cap() || ""
        let lowerCaseCap = cap.toLowerCase()
	      let capValid = lowerCaseCap.length ? accent_fold(lowerCaseCap) : ""
	      if (capValid.indexOf(searchVal) > -1) return i
    })
    let hasResults = (results.length > 0)
    let isActive = (val.length > 0)
    this.props.dispatch(searchImages(val, isActive, hasResults));

    if(hasResults) {
      this.props.dispatch(loadImages(results))
    } else {
      this.props.dispatch(loadImages([]))
      this.props.dispatch(imagesLoaded())
    }
    if(!val.length) this.props.dispatch(loadImages(images.slice(0, 13)))
  }

  clearSearch(e) {
    e.target.parentNode.children[0].focus()
    window.scrollTo(0, 0)
    this.props.dispatch(searchImages("", false, false));
    this.props.dispatch(loadImages(images.slice(0, 13)));
  }

  handleBlur(e){
    if(e.key === "Enter"){
      e.target.blur()
    }
  }

  focusSearch(e){
    e.target.parentNode.children[0].focus()
  }

  render() {
    let {searchTerm} = this.props
    let magnify = require("../imgs/magnify.png")
    const searchFeedback = () => {
      if(searchTerm.length){
        return <button onClick={this.clearSearch.bind(this)}>X</button>
      } else {
        return (
          <button
            onClick={this.focusSearch.bind(this)}
            style={{
              background:"url(" + magnify + ") 11px 11px no-repeat",
              backgroundSize: "20px 20px",
            }}
          ></button>
        )

      }
    }

    return (
      <div className="imageSearch">
        <StickyDiv offsetTop={5}>
          <input
            type="text"
            onChange={this.searchImage.bind(this)}
            onKeyDown={this.handleBlur.bind(this)}
            value={this.props.searchTerm}
            placeholder="Filter By Name"
          />
          {searchFeedback()}
        </StickyDiv>
      </div>
    )
  }
}

export default SearchBox
