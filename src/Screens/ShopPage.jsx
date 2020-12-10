import React from 'react'
import ShopData from '../shop-data'
import PreviewCollection from '../Components/PreviewCollection'
import '../Styles/ShopPage.Styles.scss'
class ShopPage extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            collections: ShopData
        }
    }
    render() {
        const { collections } = this.state
        return <div className="shop-page">
            {collections.map(({id, title, items, routeName}) => (
                <PreviewCollection key={id} title={title} items = {items}/>
            ))}
        </div>
    }
}

export default ShopPage
