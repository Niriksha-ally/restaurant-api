
# 🍽️ **Saffron Spoon Restaurant API & Frontend**

## 1️⃣ About the Restaurant

FlavourFusion is a modern fusion-style restaurant that blends traditional Indian spices with global cuisines.
Our mission is to bring creative and bold flavors together in one delicious menu.

---

## 2️⃣ Project Description

This project is a **Node.js + Express.js** backend API with a simple frontend that displays restaurant menu items.
It allows users to view all menu items, filter vegetarian dishes, and check category statistics.

**Technologies Used:**

* Node.js
* Express.js
* HTML, CSS, JavaScript
* (Optional) Nodemon

---

## 3️⃣ Menu Categories Available

* Appetizer
* Main Course
* Dessert
* Beverages *(if in your menu)*

---

## 4️⃣ Project Structure

```
restaurant-api/
│
├── server.js
├── package.json
├── menuData.js
├── README.md
│
└── public/
    ├── index.html
    ├── styles.css
    └── script.js
```

---

## 5️⃣ API Documentation

### **📌 1. Get All Menu Items**

| Property        | Value                  |
| --------------- | ---------------------- |
| **Endpoint**    | `/menu`                |
| **Method**      | GET                    |
| **Description** | Returns all menu items |

**Sample Response**

```json
[
  {
    "id": 1,
    "name": "Margherita Pizza",
    "category": "Main Course",
    "price": 350,
    "isVegetarian": true,
    "description": "Classic pizza with tomato and mozzarella"
  }
]
```

---

### **📌 2. Get Only Vegetarian Items**

| Property        | Value                              |
| --------------- | ---------------------------------- |
| **Endpoint**    | `/menu/vegetarian`                 |
| **Method**      | GET                                |
| **Description** | Returns only vegetarian menu items |

**Sample Response**

```json
[
  {
    "id": 2,
    "name": "Caesar Salad",
    "category": "Appetizer",
    "price": 200,
    "isVegetarian": true,
    "description": "Fresh romaine lettuce with parmesan"
  }
]
```

---

### **📌 3. Get Categories With Item Count**

| Property        | Value                                                   |
| --------------- | ------------------------------------------------------- |
| **Endpoint**    | `/menu/categories`                                      |
| **Method**      | GET                                                     |
| **Description** | Returns all categories with number of items inside each |

**Sample Response**

```json
{
  "categories": [
    { "name": "Appetizer", "itemCount": 2 },
    { "name": "Main Course", "itemCount": 2 },
    { "name": "Dessert", "itemCount": 1 }
  ]
}
```

---

## 6️⃣ Installation & Setup Instructions

### 🟢 1. Clone the Repository

```
git clone https://github.com/YourUserName/restaurant-api.git
```

### 🟢 2. Navigate Inside Folder

```
cd restaurant-api
```

### 🟢 3. Install Dependencies

```
npm install
```

### 🟢 4. Start the Server

If you used plain Node:

```
node server.js
```

If using nodemon:

```
npm run dev
```

### 🟢 5. Access API in Browser / Postman

 All Menu  : http://localhost:3000/menu                       |
Vegetarian : http://localhost:3000/menu/vegetarian

Categories : http://localhost:3000/menu/categories

### 🟢 6. View Frontend

Open in browser:

```
http://localhost:3000
```

---

## 7️⃣ Features

✔️ View complete restaurant menu
✔️ Filter vegetarian dishes
✔️ Get menu category statistics
✔️ Frontend to display menu
✔️ Backend built with Express.js

---

## 8️⃣ GitHub Repository Link
https://github.com/Niriksha-ally/restaurant-api.git


---

## 9️⃣ Author

👩‍💻 **Your Name Here**
📧 *(Optional Email)*
🎓 *(Optional College Name)*

---

