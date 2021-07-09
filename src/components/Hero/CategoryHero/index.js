import React from 'react'
import {
    CategoryHeroContainer,
    CategoryHeroWrapper,
    CategoryHeroH1
} from './CategoryHeroElements'

const CategoryHero = ( {pageTitle} ) => {
    console.log(pageTitle)
    return (
        <CategoryHeroContainer>
            <CategoryHeroWrapper>
                <CategoryHeroH1>{pageTitle}</CategoryHeroH1>
            </CategoryHeroWrapper>
        </CategoryHeroContainer>
    )
}

export default CategoryHero
