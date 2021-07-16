import React from 'react'
import {
    GalleryWrapper,
    GalleryImg1,
    GalleryImg2,
    GalleryImg3
} from './ProductMainElements'


const Gallery = ({data}) => {
    // data.gallery contain 3 arrays [[url,alt],[url,alt],[url,alt]]
    // data.gallery[0][0] = image URL
    // data.gallery[0][1] = image ALT
    return (
        <GalleryWrapper>
            <GalleryImg1
                width="445"
                height="280" 
                src={require(`../../../assets/${data.gallery[0][0]}`).default}
                alt={data.gallery[0][1]}/>
            <GalleryImg2
                width="445"
                height="280"  
                src={require(`../../../assets/${data.gallery[1][0]}`).default}
                alt={data.gallery[1][1]}/>
            <GalleryImg3
                width="635"
                height="592"  
                src={require(`../../../assets/${data.gallery[2][0]}`).default}
                alt={data.gallery[2][1]}/>
        </GalleryWrapper>
    )
}

export default Gallery
