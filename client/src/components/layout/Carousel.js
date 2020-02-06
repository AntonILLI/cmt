import React, { Component } from 'react'
import '../../css/materialize.min.css'
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import axios from 'axios'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentDidMount() {

        // Request for images tagged xmas       
        axios.get('https://res.cloudinary.com/dsxfe2oh3/image/list/root.json')
        .then(res => {
            console.log(res.data.resources);
            this.setState({gallery: res.data.resources});
        });
    }

    render(){
        return(
            <CloudinaryContext cloudName="dsxfe2oh3">
                <div>
                    <ul>
                    {
                        this.state.gallery.map((data, i) => {
                            return (
                            <li key={i}>
                            <Image publicId={data.public_id} />
                            </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </CloudinaryContext>
        )
    }
}

export default Gallery;