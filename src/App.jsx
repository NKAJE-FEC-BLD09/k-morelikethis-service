import React from 'react';
import './App.css';

import Title from './components/Title.jsx';
import LearnMore from './components/LearnMore.jsx';
import Description from './components/Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieName: '',
      movieID: 0,
      image: '',
      rating: '',
      reviewScore: 0,
      description: '',
      director: '',
      stars: [],
      similarMovies: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8153/movies/1`)
    .then( res => res.json())
    .then( data => {
      this.setState({
        movieName: data.movieName,
        movieID: data.movieID,
        image: data.image,
        rating: data.rating,
        reviewScore: data.revieScore,
        description: data.description,
        director: data.director,
        stars: data.stars,
        similarMovies: data.similarMovies
      })
    })
  }

  //functions

  render() {
    return (
      <div>
        <Title />
        <LearnMore />
        <Description />
      </div>
    )
  }
}

export default App;
