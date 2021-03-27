import React from 'react';

class Child extends React.Component {

  feedLucky = () => {
    console.log('lucky wants food');
    this.props.calculateFood();
  }

  render(){
    console.log('child props', this.props)
    return(
      <>
        <h3>Hi I'm Lucky, Dad's Child and I'm HUNGRY</h3>
        <p>I am Lucky, I'm SOOO HUNGRY and have had {this.props.luckysFood} cups of food today!</p>
        <button onClick={this.feedLucky}>FEEEED MEEE!</button>
      </>
    );
  }
}

export default Child;
