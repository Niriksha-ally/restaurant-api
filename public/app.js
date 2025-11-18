// public/js/app.js
const btnFull = document.getElementById('btn-full');
const btnVeg = document.getElementById('btn-veg');
const btnCats = document.getElementById('btn-cats');
const output = document.getElementById('output');

function showError(err) {
  output.innerHTML = `<p style="color: #a33">Error: ${err}</p>`;
}

// render full menu items
function renderMenu(items) {
  if (!items || items.length === 0) {
    output.innerHTML = '<p>No items to display.</p>';
    return;
  }

  const html = `
    <div class="menu-grid">
      ${items.map(item => `
        <div class="card">
          <div class="item-title">
            <h3>${item.name}</h3>
            <div class="badge ${item.isVegetarian ? '' : 'nonveg'}">
              ${item.isVegetarian ? 'Veg' : 'Non-Veg'}
            </div>
          </div>
          <div class="meta">${item.category} • <span class="price">₹${item.price}</span></div>
          <p style="margin-top:8px">${item.description}</p>
        </div>
      `).join('')}
    </div>
  `;
  output.innerHTML = html;
}

// render categories
function renderCategories(data) {
  if (!data || !data.categories || data.categories.length === 0) {
    output.innerHTML = '<p>No categories found.</p>';
    return;
  }

  const html = `
    <h3>Menu Categories</h3>
    <ul class="category-list">
      ${data.categories.map(c => `<li><strong>${c.name}</strong> — ${c.itemCount} item(s)</li>`).join('')}
    </ul>
  `;
  output.innerHTML = html;
}

// Fetch helpers
async function fetchMenu() {
  try {
    const res = await fetch('/menu');
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    renderMenu(data);
  } catch (err) {
    showError(err);
  }
}

async function fetchVegetarian() {
  try {
    const res = await fetch('/menu/vegetarian');
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    renderMenu(data);
  } catch (err) {
    showError(err);
  }
}

async function fetchCategories() {
  try {
    const res = await fetch('/menu/categories');
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    renderCategories(data);
  } catch (err) {
    showError(err);
  }
}

// Event listeners
btnFull.addEventListener('click', fetchMenu);
btnVeg.addEventListener('click', fetchVegetarian);
btnCats.addEventListener('click', fetchCategories);

// load full menu on page load
fetchMenu();
