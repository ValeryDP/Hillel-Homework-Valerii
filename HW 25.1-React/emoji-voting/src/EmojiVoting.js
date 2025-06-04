import React, { Component } from 'react';

class EmojiVoting extends Component {
    constructor(props) {
        super(props);

        const savedVotes = JSON.parse(localStorage.getItem('votes')) || {
        '😃': 0,
        '😊': 0,
        '😎': 0,
        '🤩': 0,
        '😍': 0,
        };

        this.state = {
        votes: savedVotes,
        showResults: false,
        };
    }

    handleVote = (emoji) => {
        this.setState((prevState) => {
        const updatedVotes = {
            ...prevState.votes,
            [emoji]: prevState.votes[emoji] + 1,
        };
        localStorage.setItem('votes', JSON.stringify(updatedVotes));
        return { votes: updatedVotes };
        });
    };

    handleShowResults = () => {
        this.setState({ showResults: true });
    };

    handleClear = () => {
        const resetVotes = {
        '😃': 0,
        '😊': 0,
        '😎': 0,
        '🤩': 0,
        '😍': 0,
        };
        localStorage.removeItem('votes');
        this.setState({ votes: resetVotes, showResults: false });
    };

    getWinnerEmoji = () => {
        const { votes } = this.state;
        let maxVotes = -1;
        let winner = '';
        for (const emoji in votes) {
        if (votes[emoji] > maxVotes) {
            maxVotes = votes[emoji];
            winner = emoji;
        }
        }
        return { emoji: winner, count: maxVotes };
    };

    render() {
        const { votes, showResults } = this.state;
        const emojis = Object.keys(votes);
        const winner = this.getWinnerEmoji();

        return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
            <h2>Голосування за найкращий смайлик</h2>
            <div style={{ fontSize: '2rem', marginBottom: '20px' }}>
            {emojis.map((emoji) => (
                <button
                key={emoji}
                onClick={() => this.handleVote(emoji)}
                style={{ fontSize: '2rem', margin: '10px' }}
                >
                {emoji} <br /> {votes[emoji]}
                </button>
            ))}
            </div>
            <button onClick={this.handleShowResults} style={{ margin: '10px', padding: '10px 20px' }}>
            Show Results
            </button>
            <button onClick={this.handleClear} style={{ margin: '10px', padding: '10px 20px' }}>
            Очистити результати
            </button>

            {showResults && (
            <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>
                <h3>Результати голосування:</h3>
                <p>
                Переможець: <span style={{ fontSize: '2rem' }}>{winner.emoji}</span> з{' '}
                {winner.count} голосами
                </p>
            </div>
            )}
        </div>
        );
    }
}

export default EmojiVoting;
