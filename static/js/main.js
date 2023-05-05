function fetchData() {
    fetch('/api/matches')
      .then(response => response.json())
      .then(matches => {
        const matchList = document.querySelector('#match-list');
        matchList.innerHTML = '';
  
        matches.forEach(match => {
          const listItem = document.createElement('li');
          listItem.textContent = match;
          matchList.appendChild(listItem);
        });
      });
  }
  
  document.addEventListener('DOMContentLoaded', fetchData);
  