import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      myStash: 42,
      kryptonsFood: 0,
    }
  }

  calculateFood = () => {
    this.setState({
      myStash: this.state.myStash -1,
      kryptonsFood: this.state.kryptonsFood +1,
    })
  }

  render(){
    console.log('parent', this.props)
    return(
      <>
        <h2>Hi I'm Kevin, Krypton's Parent</h2>
        <p>I have a food stash for Krypton of {this.state.myStash} cups</p>
        <Child
          kryptonsFood={this.state.kryptonsFood}
          calculateFood={this.calculateFood}
          showFavePic={this.props.showFavePic}
        />
      </>
    );

  }
}

export default Parent;
