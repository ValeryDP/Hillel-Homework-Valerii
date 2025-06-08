import React, { useState, useEffect } from 'react';

function EmojiVoting() {
    const initialVotes = {
        '😃': 0,
        '😊': 0,
        '😎': 0,
        '🤩': 0,
        '😍': 0,
    };

    const [votes, setVotes] = useState(() => {
        const saved = localStorage.getItem('votes');
        return saved ? JSON.parse(saved) : initialVotes;
    });

    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        localStorage.setItem('votes', JSON.stringify(votes));
    }, [votes]);

    const handleVote = (emoji) => {
        setVotes((prevVotes) => ({
        ...prevVotes,
        [emoji]: prevVotes[emoji] + 1,
        }));
    };

    const handleShowResults = () => {
        setShowResults(true);
    };

    const handleClear = () => {
        localStorage.removeItem('votes');
        setVotes(initialVotes);
        setShowResults(false);
    };

    const getWinnerEmoji = () => {
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

    const emojis = Object.keys(votes);
    const winner = getWinnerEmoji();

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
        <h2>Голосування за найкращий смайлик</h2>
        <div style={{ fontSize: '2rem', marginBottom: '20px' }}>
            {emojis.map((emoji) => (
            <button
                key={emoji}
                onClick={() => handleVote(emoji)}
                style={{ fontSize: '2rem', margin: '10px' }}
            >
                {emoji} <br /> {votes[emoji]}
            </button>
            ))}
        </div>
        <button onClick={handleShowResults} style={{ margin: '10px', padding: '10px 20px' }}>
            Показати результати
        </button>
        <button onClick={handleClear} style={{ margin: '10px', padding: '10px 20px' }}>
            Очистити результати
        </button>

        {showResults && (
            <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>
            <h3>Результати голосування:</h3>
            <p>
                Переможець: <span style={{ fontSize: '2rem' }}>{winner.emoji}</span> з {winner.count} голосами
            </p>
            </div>
        )}
        </div>
    );
}

export default EmojiVoting;
