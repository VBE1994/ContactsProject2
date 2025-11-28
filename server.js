// Simple Express REST API that serves static frontend and provides CRUD for contacts stored in data.json
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const DATA_FILE = path.join(__dirname, 'data.json');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static frontend from /public
app.use(express.static(path.join(__dirname, 'public')));

function readData() {
  const raw = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(raw);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET /api/contacts - list
app.get('/api/contacts', (req, res) => {
  try {
    const data = readData();
    res.json(data.contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// GET /api/contacts/:id
app.get('/api/contacts/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const item = data.contacts.find(c => c.id === id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

// POST /api/contacts - create
app.post('/api/contacts', (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });
  const data = readData();
  const ids = data.contacts.map(c => c.id);
  const nextId = ids.length ? Math.max(...ids) + 1 : 1;
  const newContact = { id: nextId, name, email, phone };
  data.contacts.push(newContact);
  writeData(data);
  res.status(201).json(newContact);
});

// PUT /api/contacts/:id - update
app.put('/api/contacts/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const idx = data.contacts.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const { name, email, phone } = req.body;
  const updated = Object.assign(data.contacts[idx], { name, email, phone });
  data.contacts[idx] = updated;
  writeData(data);
  res.json(updated);
});

// DELETE /api/contacts/:id
app.delete('/api/contacts/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const idx = data.contacts.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const removed = data.contacts.splice(idx, 1)[0];
  writeData(data);
  res.json({ removed });
});

// Fallback to index.html for client-side routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'API route not found' });
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
