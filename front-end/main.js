import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [image, setImage] = useState(null);
  const [snaps, setSnaps] = useState([]);

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Image uploaded:', image);
    // Add logic to upload image here
  }

  useEffect(() => {
    // Replace with logic to fetch snaps from server
    setSnaps([
      { id: 1, url: 'https://example.com/snap1.jpg', user: 'alice' },
      { id: 2, url: 'https://example.com/snap2.jpg', user: 'bob' },
      { id: 3, url: 'https://example.com/snap3.jpg', user: 'alice' },
    ]);
  }, []);

  return (
    <div>
      <header>
        <h1>DareSnaps</h1>
      </header>
      <main>
        <h2>Dare of the Day</h2>
        <p>Take a photo of your favorite outdoor spot.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="image-upload">Choose an image:</label>
          <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} />
          <button type="submit">Post</button>
        </form>
        {image && <img src={URL.createObjectURL(image)} alt="Uploaded by user" />}
        <h2>Friend's Snaps</h2>
        <div className="snap-grid">
          {snaps.map((snap) => (
            <div key={snap.id} className="snap-card">
              <img src={snap.url} alt={`Uploaded by ${snap.user}`} />
              <p>Uploaded by {snap.user}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));