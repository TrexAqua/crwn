import React from 'react'
import '../Styles/CollectionItem.Styles.scss'
const CollectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div
                className="img"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}/>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className="price">{price}</span>
            </div>            
        </div>
    )
}

export default CollectionItem
