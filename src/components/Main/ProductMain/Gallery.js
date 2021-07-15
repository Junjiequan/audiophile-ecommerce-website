import React from 'react'
import {
    GalleryWrapper,
    GalleryImg1,
    GalleryImg2,
    GalleryImg3
} from './ProductMainElements'


const Gallery = () => {
    return (
        <GalleryWrapper>
            <GalleryImg1
                width="445"
                height="280" 
                src={require('../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg').default}
                alt=''/>
            <GalleryImg2
                width="445"
                height="280"  
                src={require('../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg').default}
                alt=''/>
            <GalleryImg3
                width="635"
                height="592"  
                src={require('../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg').default}
                alt=''/>
        </GalleryWrapper>
    )
}

export default Gallery
