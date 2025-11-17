# 🧳 Lost & Found Web App

A simple full-stack project to help users report and find lost or found items.

---

## 🚀 Features

* Add Lost Items
* Add Found Items
* Search items by keywords
* View full item details
* **Mark as Claimed** → item disappears from list & search
* Image upload support
* Responsive UI (React)
* REST API (Node.js + Express)
* MySQL database

---


## 🛠️ Tech Stack

* **Frontend:** React + CSS
* **Backend:** Node.js, Express
* **Database:** MySQL
* **Auth:** JWT

---

## 🗂️ Project Structure

```
Project/
├── Backend/        # Node.js + Express API
└── lost-found-react/   # React Frontend
```

---

## 🛢️ Database Tables (MySQL)

### lost_items / found_items

```
id (PK)
title
description
location
image
date
is_claimed (0/1)
created_at
```

### users

```
id, name, email, password
```

---

## ⚙️ API Routes

### Lost Items

```
GET /lost-items
POST /lost-items
GET /lost-items/:id
PUT /lost-items/:id/claim
```

### Found Items

```
GET /found-items
POST /found-items
GET /found-items/:id
PUT /found-items/:id/claim
```

### Search

```
GET /search?q=
```

(Results exclude claimed items)

---

## ▶️ How to Run

### Backend

```
cd Backend
npm install
node server.js
```

Add `.env`:

```
DB_HOST=...
DB_USER=...
DB_PASS=...
DB_NAME=lost_and_found
JWT_SECRET=secret
```

### Frontend

```
cd lost-found-react
npm install
npm start
```



## 👩‍💻 Author

### Shivani Pandey 
7 sem M.Tech IT — IIPS DAVV 
### Vanshika Verma ###
7 sem M.Tech IT -IIPS DAVV
