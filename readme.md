# 🎓 Course Selling App

A full-stack **Course Selling Platform** where users can browse and purchase courses, and admins can create and manage them.

---

## 🚀 Features

### 👤 User Features

* User Signup & Login (JWT Authentication)
* Browse available courses
* Purchase courses
* View purchased courses
* Change password

### 🛠️ Admin Features

* Admin Signup & Login
* Create, update, and delete courses
* View all users
* Manage courses created by admin

---

## 🧱 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)
* Zod (validation)

---

## 📁 Folder Structure

```
course-selling-app/
│
├── backend/
│   ├── routes/
│   │   ├── user.js
│   │   ├── admin.js
│   │   └── course.js
│   ├── middleware/
│   │   ├── user.js
│   │   └── admin.js
│   ├── db.js
│   └── index.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Courses.jsx
│   │   │   ├── PurchaseCourse.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── AllUsers.jsx
│   │   └── App.jsx
│
└── README.md
```

---

## 🔐 Authentication Flow

* Users/Admins login → receive JWT token
* Token stored in `localStorage`
* Protected routes use:

```js
Authorization: Bearer <token>
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/course-selling-app.git
cd course-selling-app
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
JWT_USER_PASSWORD=your_user_secret
JWT_ADMIN_PASSWORD=your_admin_secret
MONGO_URL=your_mongodb_connection
```

Run backend:

```
node index.js
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### 👤 User Routes

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| POST   | `/user/signup`          | Register user         |
| POST   | `/user/signin`          | Login user            |
| GET    | `/user/purchases`       | Get purchased courses |
| POST   | `/user/change-password` | Change password       |

---

### 🛠️ Admin Routes

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/admin/signup`      | Register admin    |
| POST   | `/admin/signin`      | Login admin       |
| POST   | `/admin/course`      | Create course     |
| PUT    | `/admin/course`      | Update course     |
| DELETE | `/admin/course`      | Delete course     |
| GET    | `/admin/course/bulk` | Get admin courses |
| GET    | `/admin/users`       | Get all users     |

---

### 📚 Course Routes

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| GET    | `/course/preview`  | View all published courses |
| POST   | `/course/purchase` | Purchase course            |

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes (user/admin middleware)
* Role-based access control

---

## 🎯 Future Improvements

* 💳 Payment integration (Stripe/Razorpay)
* 📊 Admin analytics dashboard
* 🧾 Order history & invoices
* 🔄 Refresh tokens (auto login)
* 🎨 Improved UI/UX with animations

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

* Inspired by modern EdTech platforms
* Built as a full-stack learning project

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
