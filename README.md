# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Compass.png" alt="Compass" width="25" height="25" /> Wanderlust Major Project

Welcome to **Wanderlust** – a full-stack web application inspired by Airbnb, designed for travelers and hosts to discover, list, and review unique stays around the world. This project demonstrates modern web development practices, robust backend architecture, and an engaging user experience.

---

## <img src="https://github.com/Meetjain1/wanderlust/assets/133582566/1ee5934a-27be-4502-a7bf-e6a8c78fe5a3" width="35" height="35"> Features

- **User Authentication**: Secure signup, login, and logout using Passport.js.
- **Listings Management**: Create, edit, delete, and view property listings with image uploads.
- **Reviews System**: Leave ratings and comments for listings, with review moderation.
- **Interactive Map**: Visualize listing locations using Mapbox GL JS.
- **Flash Messages**: Real-time feedback for user actions.
- **Responsive UI**: Mobile-friendly design with Bootstrap 5.
- **Form Validation**: Client-side and server-side validation for all forms.
- **Cloud Image Storage**: Images are stored and served via Cloudinary.
- **Session Management**: Persistent sessions using MongoDB.

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Crystal%20Ball.png" alt="Crystal Ball" width="25" height="25" /> Technologies Used

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Artist%20Light%20Skin%20Tone.png" alt="Artist Light Skin Tone" width="25" height="25" /> **Frontend**
- **EJS**: Templating engine for dynamic HTML rendering.
- **Bootstrap 5**: Responsive and modern UI components.
- **Font Awesome**: Iconography for a visually appealing interface.
- **Mapbox GL JS**: Interactive maps for listing locations.
- **Custom CSS & JS**: For enhanced styling and client-side validation.

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Brain.png" alt="Brain" width="25" height="25" /> **Backend**
- **Node.js & Express**: Fast, scalable server-side framework.
- **MongoDB & Mongoose**: NoSQL database and ODM for data modeling.
- **Passport.js**: Authentication middleware.
- **Multer & Cloudinary**: Image upload and cloud storage.
- **Joi**: Schema validation for incoming data.
- **Connect-Flash**: Flash messaging for user feedback.
- **Express-Session & Connect-Mongo**: Session management and persistence.

---

## <img src="https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/blob/master/Emojis/Hand%20gestures/Flexed%20Biceps.png?raw=true" width="35" height="35" > Project Structure

```
wanderlust-major-project/
│
├── app.js                  # Main Express application
├── cloudConfig.js          # Cloudinary configuration for image uploads
├── middleware.js           # Custom Express middleware functions
├── package.json            # Project dependencies and scripts
├── schema.js               # Joi validation schemas for data integrity
│
├── controllers/            # Route controllers for business logic
│   ├── listings.js         # Listing CRUD operations
│   ├── reviews.js          # Review management
│   └── users.js            # User authentication and profile
│
├── models/                 # Mongoose data models
│   ├── listing.js          # Listing schema
│   ├── review.js           # Review schema
│   └── user.js             # User schema
│
├── routes/                 # Express route definitions
│   ├── listings.js         # Listing routes
│   ├── reviews.js          # Review routes
│   └── users.js            # User routes
│
├── utils/                  # Utility functions
│   ├── ExpressError.js     # Custom error class
│   └── wrapAsync.js        # Async error handling wrapper
│
├── public/                 # Static assets (CSS, JS, images)
│   ├── css/                # Custom stylesheets
│   └── js/                 # Client-side JavaScript (e.g., map.js)
│
├── views/                  # EJS templates for rendering UI
│   ├── listings/           # Listing pages (show.ejs, etc.)
│   ├── users/              # User pages
│   ├── includes/           # Partials (header, footer, etc.)
│   └── layouts/            # Layout templates (boilerplate.ejs)
│
├── init/                   # Database seeding scripts
│   ├── data.js             # Seed data
│   └── index.js            # Seed runner
│
└── .env                    # Environment variables (API keys, secrets)
```

## <img src="https://github.com/Meetjain1/wanderlust/assets/133582566/90f3930e-5a12-4a4e-8ac9-0dc7d5396adb" width="35" height="35">  Setup Instructions

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/wanderlust-major-project.git
   cd wanderlust-major-project
2. **Install dependencies**
   ```sh
    npm install
3. **Configure environment variables** :     
Create a .env file in the root directory:
   ```sh
    SECRET=your_session_secret
    CLOUD_NAME=your_cloudinary_cloud_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_API_SECRET=your_cloudinary_api_secret
    MAP_TOKEN=your_mapbox_access_token
4. **Run the application**
   ```sh
    node app.js

The app will be available at http://localhost:8080.
## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cyclone.png" alt="Cyclone" width="25" height="25" /> Listing Details Page (`show.ejs`)

The listing details page is the centerpiece of Wanderlust, providing users with all the information about a property, owner, reviews, and location.

### **Key Elements**

- **Title & Image**: Displays the listing’s title and main image.
- **Owner & Description**: Shows the owner’s username and property description.
- **Price, Location, Country**: Essential details for travelers.
- **Edit/Delete Buttons**: Visible only to the listing owner for managing their property.
- **Review Form**: Authenticated users can leave a star rating and comment.
- **Reviews Section**: Lists all reviews with author info and rating.
- **Map Integration**: Shows the property location using Mapbox.

---
## <img src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" width="35" height="35">  Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Collision.png" alt="Collision" width="25" height="25" /> License

This project is licensed under the ISC License.

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Fire.png" alt="Fire" width="25" height="25" /> Author

Made with ❤️ by Prashant Soni

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png" alt="Beating Heart" width="25" height="25" /> Contact
[<img src="https://img.icons8.com/?size=100&id=u9R54eMKS8fw&format=png&color=000000" width="25" height="25"/> Github](https://github.com/PrashantSoni-coder)

[<img src="https://img.icons8.com/?size=100&id=kBCrQMzpQDLQ&format=png&color=000000" width="25" height="25"/>LinkedIn](https://www.linkedin.com/in/prashantsoni-coder)
