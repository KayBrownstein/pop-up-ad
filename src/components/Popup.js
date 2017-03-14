import React from 'react';

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let newClickCount = this.state.clickCount + 1;
    this.setState({clickCount : newClickCount});
    if (newClickCount >= 3) {
      return window.confirm('Are you sure?');
    }
  }

  handleSubmit(event) {
    console.log('Form Submitted');
    event.preventDefault();
  }

  render() {
    let message = `You have won tickets to see ${this.props.artistOrShow}!!`;
    let line = 'Please enter your email so we can send you the tickets';
    return(
      <div id='box'>
        <i className="fa fa-times" aria-hidden="true" onClick={this.handleClick}></i>
        <h1 id='message'> {message} </h1>
        <h5 id='smallerMessage'> {line} </h5>
        <form onSubmit={this.handleSubmit}>
          <input type='text' id='email' name='email' placeholder='Your email address' />
          <input type='submit' id='submit' name='submit' value='CLAIM YOUR PRIZE' />
        </form>
      </div>
    );
  }
};

export default Popup;
