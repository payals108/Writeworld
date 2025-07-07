# Writeworldfrom pathlib import Path
import zipfile

# Set up the basic project structure for WriteWorld web app
project_dir = Path("/mnt/data/writeworld-web")
project_dir.mkdir(parents=True, exist_ok=True)

# Create a simple React app structure
files = {
    "package.json": """
{
  "name": "writeworld-web",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
""",
    "public/index.html": """
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="WriteWorld - A platform for writers and readers." />
    <title>WriteWorld</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
""",
    "src/index.js": """
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WriteWorldWebApp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WriteWorldWebApp />
  </React.StrictMode>
);
""",
    "src/App.js": """
import React, { useState } from 'react';

export default function WriteWorldWebApp() {
  const [tab, setTab] = useState('reader');
  const [searchText, setSearchText] = useState('');
  const [storyTitle, setStoryTitle] = useState('');
  const [storyDesc, setStoryDesc] = useState('');
  const [storyContent, setStoryContent] = useState('');

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>WriteWorld</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>A platform for writers and readers</p>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        <button onClick={() => setTab('reader')} style={{ marginRight: '1rem', padding: '0.5rem 1rem', backgroundColor: tab === 'reader' ? '#333' : '#eee', color: tab === 'reader' ? '#fff' : '#000', border: 'none', borderRadius: '8px' }}>Reader</button>
        <button onClick={() => setTab('writer')} style={{ padding: '0.5rem 1rem', backgroundColor: tab === 'writer' ? '#333' : '#eee', color: tab === 'writer' ? '#fff' : '#000', border: 'none', borderRadius: '8px' }}>Writer</button>
      </div>

      {tab === 'reader' && (
        <div style={{ marginTop: '2rem' }}>
          <input
            type="text"
            placeholder="Search stories..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '1rem' }}
          />
          <div style={{ backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>The Chosen Flame</h3>
            <p style={{ color: '#555' }}>By Hridhan</p>
            <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '6px' }}>Read</button>
          </div>
        </div>
      )}

      {tab === 'writer' && (
        <div style={{ marginTop: '2rem' }}>
          <input
            type="text"
            placeholder="Story Title"
            value={storyTitle}
            onChange={(e) => setStoryTitle(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '1rem' }}
          />
          <textarea
            placeholder="Story Description"
            value={storyDesc}
            onChange={(e) => setStoryDesc(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '1rem' }}
          />
          <textarea
            placeholder="Write your first chapter here..."
            rows={10}
            value={storyContent}
            onChange={(e) => setStoryContent(e.target.value)}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '1rem' }}
          />
          <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '6px' }}>Publish</button>
        </div>
      )}
    </div>
  );
}
"""
}

# Write files
for filepath, content in files.items():
    file_path = project_dir / filepath
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(content.strip())

# Zip the project
zip_path = Path("/mnt/data/writeworld-web.zip")
with zipfile.ZipFile(zip_path, "w") as zipf:
    for file in project_dir.rglob("*"):
        zipf.write(file, file.relative_to(project_dir))

zip_path.name  # return just the file name for download
