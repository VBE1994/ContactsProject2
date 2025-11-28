const apiBase = '/api/contacts';

async function fetchContacts() {
  const res = await fetch(apiBase);
  return res.json();
}

function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => { if (k === 'class') e.className = v; else e.setAttribute(k, v); });
  children.forEach(c => { if (typeof c === 'string') e.appendChild(document.createTextNode(c)); else e.appendChild(c); });
  return e;
}

async function render() {
  const list = document.getElementById('contacts');
  list.innerHTML = 'Loading...';
  try {
    const contacts = await fetchContacts();
    if (!contacts.length) { list.innerHTML = '<li>No contacts yet.</li>'; return; }
    list.innerHTML = '';
    contacts.forEach(c => {
      const meta = el('div', { class: 'item-meta' }, `${c.name} — ${c.email} ${c.phone ? ` — ${c.phone}` : ''}`);
      const editBtn = el('button', {}, 'Edit');
      const delBtn = el('button', {}, 'Delete');
      editBtn.onclick = () => startEdit(c);
      delBtn.onclick = () => deleteContact(c.id);
      const actions = el('div', { class: 'actions' }, editBtn, delBtn);
      const li = el('li', {}, meta, actions);
      list.appendChild(li);
    });
  } catch (err) {
    list.innerHTML = '<li>Error loading contacts</li>';
    console.error(err);
  }
}

async function addContact(data) {
  const res = await fetch(apiBase, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  return res.json();
}

async function updateContact(id, data) {
  const res = await fetch(`${apiBase}/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  return res.json();
}

async function deleteContact(id) {
  if (!confirm('Delete this contact?')) return;
  await fetch(`${apiBase}/${id}`, { method: 'DELETE' });
  render();
}

const form = document.getElementById('contactForm');
let editingId = null;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  if (!name || !email) return alert('Name & email required');
  if (editingId) {
    await updateContact(editingId, { name, email, phone });
    editingId = null;
    form.querySelector('button').textContent = 'Add';
  } else {
    await addContact({ name, email, phone });
  }
  form.reset();
  render();
});

function startEdit(contact) {
  editingId = contact.id;
  document.getElementById('name').value = contact.name;
  document.getElementById('email').value = contact.email;
  document.getElementById('phone').value = contact.phone || '';
  form.querySelector('button').textContent = 'Save';
}

// Initial render
render();
