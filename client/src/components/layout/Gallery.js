import React from 'react';
import axios from 'axios';
import ResponsiveGallery from 'react-responsive-gallery';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gallery: [],
            numOfImagesPerRow: {xs: 2,s: 3,m: 3,l: 4,xl: 4, xxl:5}
        }
    }

    componentDidMount() {

        axios.get('https://res.cloudinary.com/dsxfe2oh3/image/list/root.json')
        .then(res => {
            // console.log(res.data.resources);

            const images = res.data.resources.map(data => {
                return { src: 'https://res.cloudinary.com/dsxfe2oh3/image/upload/v1580783902/'
                + data.public_id + '.' + data.format}
            })
            // console.log(images)
            this.setState({gallery: images});

        });


    }

render(){

    return <ResponsiveGallery
    images={this.state.gallery}
    useLightBox
    numOfImagesPerRow={this.state.numOfImagesPerRow}/>
    }
}
export default Gallery