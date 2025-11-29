# Contacts App (Project 2)

**Full Stack REST API - Implementation and Deployment**

| Status | Link |
| :--- | :--- |
| **Live Demo (Render)** | **https://contactsproject2.onrender.com** |
| **GitHub Repository** | **https://github.com/VBE1994/ContactsProject2** |

---

## Overview

This project is a small **Full Stack** application built on **Node.js** and **Express**. It provides a complete **REST API** for contact management (**CRUD**) and a minimalist, modernized user interface that consumes this API. The project is suitable for coursework as it uses simple **file-based storage** (`data.json`) for data persistence.

### Features

* **REST API:** Implemented with Node.js and Express. Supports **GET**, **POST**, **PUT**, and **DELETE** HTTP methods.
* **CRUD Functionality:** Users can **C**reate, **R**ead, **U**pdate, and **D**elete contacts.
* **Modern UI:** The frontend user interface has been updated using modern CSS for a clean design.
* **Persistence:** Data storage is handled via a local **`data.json`** file.

---

##  Application Startup

### Run Locally (Local Development)

You can run the project locally using Node.js:

1.  **Clone and navigate to the directory:**
    ```bash
    git clone [https://github.com/VBE1994/ContactsProject2](https://github.com/VBE1994/ContactsProject2)
    cd ContactsProject2
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the server (Production/Start mode):**
    ```bash
    npm start
    ```
    Open your browser and navigate to: **http://localhost:3000**




Reflection 

Working on this project was an excellent exercise in building a robust, full-stack application from scratch. The initial challenge involved ensuring the smooth flow of data between the asynchronous frontend's fetch() requests and the synchronous file-based backend. I learned the importance of clear separation of concerns between the Express API logic and the client-side rendering. During development, I successfully debugged a syntactical CSS issue, which reinforced my attention to detail. Deploying to Render provided practical experience in configuring a production-ready Node.js environment. A key future improvement for this project would be to migrate the file-based storage to a proper database (like PostgreSQL or SQLite) to ensure true scalability and reliability beyond a single-user environment.