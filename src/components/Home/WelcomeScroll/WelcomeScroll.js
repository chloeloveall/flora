import React, { Component } from 'react';
import ReactTextTransition, { presets } from 'react-text-transition';
import { welcomeListData } from '../../../data/welcomeListData';
import { WelcomeScrollStyle } from './styles';
import styles from './WelcomeScroll.module.css';

class WelcomeScroll extends Component {
  state = {
    textFastIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1
      });
    }, 3000);
  }

  render() {
    return (
      <React.Fragment>
      <section>
          <WelcomeScrollStyle>Hello,</WelcomeScrollStyle>
          <section >
            <ReactTextTransition
              text={welcomeListData[this.state.textFastIndex % welcomeListData.length]}
              springConfig={presets.gentle}
              className={styles.textTransitionStyle}
              inline
              overflow
            />
          </section>
        </section>
        <WelcomeScrollStyle>Nice to see you grow.</WelcomeScrollStyle>
      </React.Fragment>
    );
  }
}

export default WelcomeScroll;
