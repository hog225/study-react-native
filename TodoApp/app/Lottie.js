/**
 * 에어비엔비 관련된 라이브러리 ? 
 * 

 */

import React from 'react';
import LottieView from 'lottie-react-native';

export default class Lottie extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require('./animations/LineAnimation.json')}
      />
    );
  }
}