// fetch_matches.js

async function fetchMatches() {
    try {
      const response = await fetch('/api/matches');
      const matches = await response.json();
  
      const matchesContainer = document.getElementById('matches-container');
      matchesContainer.innerHTML = '';
  
      matches.forEach((match) => {
        const matchElement = document.createElement('div');
        matchElement.innerText = match;
        matchesContainer.appendChild(matchElement);
      });
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fetchMatches();
  });
  