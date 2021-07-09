import React from 'react'

const CategoryMain = ({data}) => {
    return (
        <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
            <h2>
                {data.text}
            </h2>
            <img src={data.img} />
        </div>
    )
}

export default CategoryMain
