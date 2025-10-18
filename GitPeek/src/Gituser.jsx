import React, { useState, useEffect } from 'react';

function GitHubUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        console.error("Fetching error: ", e);
        setError("Failed to fetch GitHub users.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  
  if (loading) return <p>Loading GitHub users...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>GitHub Users</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '15px' }}>
            <img 
              src={user.avatar_url} 
              alt={`${user.login}'s avatar`} 
              style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px', verticalAlign: 'middle' }}
            />
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubUsers;
