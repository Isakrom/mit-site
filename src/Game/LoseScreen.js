import React, { Component } from 'react';

export default class LoseScreen extends React.Component {
    constructor(args) {
      super(args);
      this.state = { score: args.score };
    }

    render() {
        return (
            <div>
                <span className="centerScreen title">You Lost</span>
                <span className="centerScreen pressSpace">Press Enter to try again, your score was {this.state.score}</span>
            </div>
            );
    }
}
