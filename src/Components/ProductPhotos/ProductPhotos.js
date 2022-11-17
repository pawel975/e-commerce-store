import { Component } from "react";
import "./ProductPhotos.scss";

class ProductPhotos extends Component {

    constructor(props){
        super(props)
        this.state = {
            activePhotoGalleryIndex: 0
        }

        this.thumbnails = this.props.productPhotos.map(photo => (
            <button className="product-photos__single-thumbnail">
                <img src={photo} alt="product"/>
            </button>
        ))

        this.activePhoto = <img src={this.props.productPhotos[this.state.activePhotoGalleryIndex]} alt="product"/>
    }



    render(){
        return (
            <div className="product-photos">
                <div className="product-photos__thumbnails">
                    {this.thumbnails}
                </div>
                <div className="product-photos__active-photo">
                    {this.activePhoto}
                </div>
            </div>
        )
    }
}

export default ProductPhotos;