import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
        <div>
        <h1>Change js </h1>
            <button
                onClick={() => {
                this.setState({ count: this.state.count + 1 });
                }}
            >
        CountDDD: {this.state.count}
      </button>
      </div>
    );
  }
}
export default Counter;