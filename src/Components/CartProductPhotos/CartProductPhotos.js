import { Component } from "react";
import PhotoSwitcher from "../PhotoSwitcher/PhotoSwitcher";
import "./CartProductPhotos.scss";

class CartProductPhotos extends Component {

    constructor(props){
        super(props)
        this.productPhotos = this.props.productPhotos;
        this.handleActivePhotoIndexDecrement = this.handleActivePhotoIndexDecrement.bind(this);
        this.handleActivePhotoIndexIncrement = this.handleActivePhotoIndexIncrement.bind(this);
        
        this.size = this.props.size ? this.props.size : "";

        // Enable only if slider is needed
        this.isSliderVisible = this.props.isSliderVisible;

        this.state = {
            activePhotoIndex: 1,
        }

        this.productPhotosArray = this.productPhotos.map((photo, index) => (
            <div className="cart-product-photos__photo-container">
                <img 
                    src={photo} 
                    alt="product" 
                    key={"cart-product-photo" + index}
                />
            </div>
        ))
    }

    handleActivePhotoIndexIncrement(){
        if (this.state.activePhotoIndex < this.productPhotosArray.length - 1) {
            this.setState({activePhotoIndex: this.state.activePhotoIndex + 1})
        }
    }

    handleActivePhotoIndexDecrement(){
        if (this.state.activePhotoIndex > 0) {
            this.setState({activePhotoIndex: this.state.activePhotoIndex - 1})
        }
    }

    render(){
        return (
            <div className={`cart-product-photos ${this.size}`}>
                <div className="cart-product-photos__active-photo">
                    {this.productPhotosArray[this.state.activePhotoIndex]}
                </div>
                {
                    this.isSliderVisible &&
                    <PhotoSwitcher
                        handleActivePhotoIndexIncrement={this.handleActivePhotoIndexIncrement}
                        handleActivePhotoIndexDecrement={this.handleActivePhotoIndexDecrement}
                    />
                }
            </div>
        )
    }
}

export default CartProductPhotos;