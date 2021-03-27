import React from 'react';
import car from './assets/car.jpg';
import dayOne from './assets/day1.jpg';
import full from './assets/full.jpg';
import goat from './assets/goat.jpg';

class Child extends React.Component {

  feedKrypton = () => {
    console.log('krypton wants food');
    this.props.calculateFood();
  }

  render(){
    let pics = [car, dayOne, full, goat];
    let imageElements = pics.map((pic, index) => (
      <img
        src={pic}
        alt="krypton"
        title="krypton"
        width={150}
        key={index}
        onClick={() => this.props.showFavePic(pic)}
      />
    ));

    console.log('child props', this.props)
    return(
      <>
        <h3>Hi I'm Krypton, Dad's Child and I'm HUNGRY</h3>
        <p>I am Krypton, I'm SOOO HUNGRY and have had {this.props.kryptonsFood} cups of food today!</p>
        <button onClick={this.feedLucky}>FEEEED MEEE!</button>
        {imageElements}
      </>
    );
  }
}

export default Child;
