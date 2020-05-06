import React from "react";
import axios from 'axios';

class Gallery extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      images: []
    };

    this.getImages = this.getImages.bind(this);
    this.renderImage= this.renderImage.bind(this);
    
  }
  renderImage(imageUrl) {
    return ( 
        <img className='images-1 img-thumbnail mw-100'  src={imageUrl} />
    )
  }

  getImages (cb) {
    axios.get('http://localhost:3000/api/users/get/images?start=1&end=100')
    .then(function (response) {
      return cb(null, response);
    })
    .catch(function (error) {
      return cb(true);
    });
  }


  componentDidMount() {
    this.getImages((err, res) => {
      if (err) { console.log('erorr');} 

      console.log('hello', res);
      this.setState({images:res.data.result});
    } )
     }
  render() {

    console.log('state is ', this.state);
    return (
      <div className="gallery">
        {this.state.images.map((imageUrl) =>  this.renderImage(imageUrl.download_url))}
      </div>
    );
  }
}

export default Gallery;
