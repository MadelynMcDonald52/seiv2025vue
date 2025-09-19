# SE4 Course Frontend

## Description

A Vue 3 + Vite project for managing courses. This project demonstrates our ability to interact with a backend API and apply what we've learned through internet applications.

---

## Features

- View, add, and manage courses
- Interact with a backend API ([Node_Project](https://github.com/joolean-equals-true/Node_Project))
- Modern Vue 3 + Vite frontend stack

---

## Requirements

- A working computer
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (v8 or higher recommended)
- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- Backend API: [Node_Project](https://github.com/joolean-equals-true/Node_Project)

---

## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/MadelynMcDonald52/seiv2025vue.git
cd seiv2025vue
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure the Backend

- Clone and run the backend from [Node_Project](https://github.com/joolean-equals-true/Node_Project).
- By default, the frontend expects the backend API to be running at:
  - `http://localhost:3467/api/Courses/` (development)
  - `/api/Courses/` (production)
- If your backend runs on a different port or path, update the `baseurl` in [`src/services/CourseServices.js`](src/services/CourseServices.js).

### 4. Run the Development Server

```sh
npm run dev
```

- Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
seiv2025vue/
├── src/
│   ├── components/
│   ├── services/
│   ├── views/
│   ├── App.vue
│   ├── main.js
│   └── router.js
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## Developers

- Madelyn McDonald
- Austin Neubauer
- Julian Moore
- Samuel Harris

---