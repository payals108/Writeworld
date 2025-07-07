import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('reader');
  const [storyTitle, setStoryTitle] = useState('');
  const [storyDesc, setStoryDesc] = useState('');
  const [storyContent, setStoryContent] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>WriteWorld</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>A platform for writers and readers</p>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <button onClick={() => setTab('reader')} style={{ marginRight: '1rem' }}>Reader</button>
        <button onClick={() => setTab('writer')}>Writer</button>
      </div>

      {tab === 'reader' && (
        <div style={{ marginTop: '2rem' }}>
          <h3>The Chosen Flame</h3>
          <p>By Hridhan</p>
          <button>Read</button>
        </div>
      )}

      {tab === 'writer' && (
        <div style={{ marginTop: '2rem' }}>
          <input
            placeholder="Story Title"
            value={storyTitle}
            onChange={e => setStoryTitle(e.target.value)}
            style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '0.5rem' }}
          />
          <textarea
            placeholder="Story Description"
            value={storyDesc}
            onChange={e => setStoryDesc(e.target.value)}
            style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '0.5rem' }}
          />
          <textarea
            placeholder="Write your first chapter here..."
            value={storyContent}
            onChange={e => setStoryContent(e.target.value)}
            rows={10}
            style={{ display: 'block', marginBottom: '1rem', width: '100%', padding: '0.5rem' }}
          />
          <button>Publish</button>
        </div>
      )}
    </div>
  );
}