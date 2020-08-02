import React from 'react';
import RichText from "../components/RichText"
import styled from 'styled-components'
import "./layout.css"


const GalleryWrapper = styled.div``


const TeamGallery = (galleryImage, title) => {
  return (
    <GalleryWrapper>
      <div>
        <img render={galleryImage}></img>
        <p>{title}</p>
      </div>
    </GalleryWrapper>
  )
}
export default TeamGallery;