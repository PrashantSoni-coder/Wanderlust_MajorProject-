# Wanderlust 🧭

**Live Demo:** [https://wanderlust-y89e.onrender.com](https://wanderlust-y89e.onrender.com)

Wanderlust is a full-stack travel accommodation platform inspired by Airbnb, designed to help users discover, list, and review unique stays around the world. Built with modern web technologies, it delivers a seamless experience for both guests and hosts.

---

## 🚀 Features

- **User Authentication:** Secure signup, login, and session management using Passport.js.
- **Listings Management:** Create, edit, delete, and view property listings with image uploads (Cloudinary integration).
- **Geolocation & Maps:** Interactive maps powered by Mapbox for visualizing property locations.
- **Reviews & Ratings:** Leave, view, and delete reviews with star ratings for each listing.
- **Flash Messages:** Real-time feedback for user actions (success/error notifications).
- **Responsive UI:** Mobile-friendly design using Bootstrap 5 and custom CSS.
- **Form Validation:** Client-side and server-side validation for all forms.
- **Role-Based Access:** Only listing owners can edit/delete their properties; only review authors can delete their reviews.
- **Session Persistence:** MongoDB-backed session store for scalable authentication.
- **RESTful Routing:** Clean, maintainable API structure for all resources.
- **Error Handling:** Custom error pages and robust backend validation.

---

## 🛠️ Technologies Used

- **Frontend:** EJS templating, Bootstrap 5, Font Awesome, Mapbox GL JS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Passport.js, Passport-Local, Passport-Local-Mongoose
- **Image Storage:** Cloudinary, Multer, Multer-Storage-Cloudinary
- **Validation:** Joi
- **Session Management:** express-session, connect-mongo
- **Flash Messages:** connect-flash
- **Other:** dotenv, method-override

---

## 📦 Project Structure

```
Wanderlust_MajorProject-/
│
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── controllers/
├── models/
├── routes/
├── utils/
├── public/
├── views/
├── init/
├── package.json
└── README.md
```

---

## 🌍 How It Works

1. **Sign Up / Log In:** Users create accounts and log in securely.
2. **Explore Listings:** Browse all available stays, filter by category, and view details.
3. **Host a Property:** Authenticated users can list new properties with images and location.
4. **Interactive Map:** Each listing displays its location on a Mapbox-powered map.
5. **Reviews:** Guests can leave reviews and ratings; hosts and authors can manage them.
6. **Edit/Delete:** Owners can update or remove their listings; review authors can delete their reviews.

---

## 🏢 Why Wanderlust Stands Out

- **Scalable Architecture:** Built for cloud deployment and horizontal scaling.
- **Modern UX:** Intuitive, visually appealing, and responsive interface.
- **Security:** Follows best practices for authentication, authorization, and data validation.
- **Extensible:** Modular codebase ready for new features (payments, messaging, etc.).
- **Production-Ready:** Deployed on Render with environment-based configuration.

---

## 📑 Setup & Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/yourusername/wanderlust-major-project.git
   cd wanderlust-major-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in `.env`:
   ```
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_token
   ```
4. Start the server:
   ```sh
   npm start
   ```
5. Visit [http://localhost:8080](http://localhost:8080)

---

## 👨‍💻 Author

**Prashant Soni**

---

## 📄 License

This project is licensed under the ISC License.

---

> _Wanderlust is the perfect showcase of full-stack engineering, combining robust backend architecture, modern frontend design, and seamless third-party integrations. Ready for production and scalable for millions of users._
