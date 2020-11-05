import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      isFetchingData: false,
    }
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos', {
      headers: {
        'Authorization': 'Client-ID TW5679V-cgynLNfQbJB_TOQsbHDlovsVkwhjgIfh6F0',
      },
    })
      .then(response => response.json())
      .then(data => {
        const tempState = [...this.state.imageUrls]
        this.setState({ imageUrls: [...tempState, ...data], isFetchingData: false });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  render() {
    const { imageUrls } = this.state;
    console.log(this.state.imageUrls)
    return (
      <div className="App">
        <section>
          {imageUrls.map(image => <img key={image.id} src={image.urls.small} alt="img" />)}
        </section>
      </div >
    )
  }
}