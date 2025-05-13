Campus Watch 🚨
Overview
Welcome to Campus Watch! This platform helps students report issues on campus and prioritize them based on urgency. It also features a Lost and Found section where students can upload images of lost items and claim them when found.

We’re building this app to make campus life smoother, and we’d love for you to contribute!

Setup Instructions ⚙️
Prerequisites
Before getting started, make sure you have these installed:

Node.js (v14.x or higher)

npm (comes with Node.js)

1. Clone the Repository 👇
Clone the project to your local machine:

bash
Copy
Edit
git clone https://github.com/Ankit-0018/CampusWatch---Campus-Issue-Reporting-Web-App.git
cd campus-watch
2. Install Dependencies 📦
Once you have the repo, run this command to install all the necessary dependencies:

bash
Copy
Edit
npm install
3. Set Up TailwindCSS 🌟
If you’re contributing to the frontend and styling with TailwindCSS, follow these steps:

Install TailwindCSS:

bash
Copy
Edit
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
Configure Tailwind:

In the tailwind.config.js file, make sure to add these paths in the content array:

js
Copy
Edit
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Add Tailwind to Your CSS:

In your src/index.css (or src/styles/tailwind.css), include the following:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Run the Development Server:

Now, you can run the development server and see your changes in action:

bash
Copy
Edit
npm run dev
4. See It Live 🌍
Open up your browser and go to http://localhost:5173. Boom! You’re all set up and ready to work on the frontend!

Contributing 🤝
Here’s how you can contribute:

Frontend & TailwindCSS: Your main task is to build the user interface and style components using TailwindCSS. Design assets are in the assets folder, so make sure to check them out for reference.

Pull Requests: Once you’ve made changes, please submit a pull request (PR). Include a brief description of what you’ve worked on, and I’ll review and merge it. The more detailed, the better!

Need Help? 🤔
If you run into any issues or have questions while setting up or contributing, feel free to reach out! I’m here to help. 😎

Let's build something awesome together! 🚀
