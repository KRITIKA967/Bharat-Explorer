const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const statesData = JSON.parse(fs.readFileSync('./data/states.json', 'utf-8'));

app.get('/api/states', (req, res) => {
  res.json(statesData);
});

app.get('/api/states/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const filtered = statesData.filter(state =>
    state.name.toLowerCase().includes(query)
  );
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
