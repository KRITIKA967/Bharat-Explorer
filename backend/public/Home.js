async function fetchStates() {
  const res = await fetch('/api/states');
  const states = await res.json();

  const list = document.getElementById('stateList');
  list.innerHTML = '';
  states.forEach(state => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `📍 <a href="${state.link}">${state.name}</a>`;
    list.appendChild(card);
  });
}

function searchStates() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const stateName = card.textContent.toLowerCase();
    card.style.display = stateName.includes(input) ? "block" : "none";
  });
}

window.onload = fetchStates;
