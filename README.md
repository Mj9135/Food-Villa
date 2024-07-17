

# Tatanagar Treats

Tatanagar Treats is a Jamshedpur-based food ordering website built using React and Parcel. The application fetches data from the Swiggy API to provide a seamless and dynamic food ordering experience. The project leverages modern web development practices and tools to deliver a high-quality user experience.

### Video Demo

Include a video walkthrough here to demonstrate the features of your application. You can upload it to YouTube and embed the link here.

[Watch Tatanagar Treats Demo](#)

## Technologies Used

### React

React is used as the core frontend library for building the user interface components. It allows for efficient component-based development, making the application more modular and easier to maintain.

### Parcel

Parcel is utilized as the bundler for this project, offering fast and zero-configuration web application bundling. It simplifies the setup and deployment process, optimizing the performance of the application.

### Tailwind CSS

Tailwind CSS is employed for responsive and utility-first styling. It enables rapid UI development with pre-defined utility classes, ensuring a consistent and visually appealing design across different devices and screen sizes.

### Swiggy API

The Swiggy API is integrated to fetch restaurant and menu data dynamically. This API integration allows users to browse a variety of food options available for order, enhancing the application's usability and offering.

## Features

### Fetches Data from Swiggy API

Tatanagar Treats seamlessly integrates with the Swiggy API to retrieve real-time restaurant and menu information. This ensures that users have access to up-to-date listings and can make informed decisions when ordering food.

### User-Friendly Interface

The application boasts an intuitive and user-friendly interface designed to enhance the browsing and ordering experience. Clear navigation and responsive design elements contribute to a smooth user journey from menu exploration to checkout.

### Dynamic Menu Display

Menus are dynamically generated based on API responses, allowing for flexible and adaptive content presentation. This dynamic approach ensures that users see accurate and relevant food items available for order at any given time.

### Cart Management and Order Summary

Tatanagar Treats includes robust cart management functionalities, enabling users to add, remove, and adjust quantities of items in their cart. An order summary feature provides a detailed breakdown of selected items and total costs, facilitating a streamlined checkout process.

### Context and Hooks for State Management

React Context and custom hooks are leveraged for efficient state management and API calls within the application. This architecture ensures that data is managed effectively across components, enhancing performance and maintaining application responsiveness.

### Responsive Design with Tailwind CSS

The application is built with a responsive design approach using Tailwind CSS. This framework allows for adaptive styling and layout adjustments based on different device resolutions, ensuring a consistent and visually appealing experience for users on desktops, tablets, and smartphones.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/tatanagar-treats.git
cd tatanagar-treats
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

## Usage

After starting the development server, open your browser and navigate to `http://localhost:1234` to view the application. You can browse the menu, add items to the cart, and simulate the ordering process.

## File Structure

The project directory structure is organized as follows:

```
tatanagar-treats/
│
├── .firebase/            # Firebase configuration files
├── .parcel-cache/        # Parcel cache files
├── .vscode/              # VSCode settings
├── dist/                 # Distribution files
├── node_modules/         # Node.js modules
├── public/               # Public assets
├── src/                  # Source files
│   ├── assets/           # Assets like images, icons, etc.
│   ├── components/       # Reusable components
│   │   ├── AppLayout.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── MenuItemList.js
│   │   ├── RestaurantCard.js
│   │   ├── Shimmer.js
│   │   └── StarRating.js
│   ├── constants/        # Constant values
│   │   └── api.js
│   ├── hooks/            # Custom React hooks
│   │   ├── helper.js
│   │   ├── store.js
│   │   ├── useOnline.js
│   │   ├── useContext.js
│   │   ├── useRestaurant.js
│   │   ├── useRestroMenu.js
│   │   └── useRoute.js
│   ├── pages/            # Application pages
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Cart.js
│   │   ├── Contact.js
│   │   ├── Error.js
│   │   ├── RestroMenu.js
│   │   └── ThankYou.js
│   ├── slices/           # Redux slices
│   │   ├── cartSlice.js
│   │   └── App.js
│   ├── index.css         # Global CSS
│   ├── .babelrc          # Babel configuration
│   ├── .firebaserc       # Firebase configuration
│   ├── .gitignore        # Git ignore file
│   ├── .postcssrc        # PostCSS configuration
│   ├── firebase.json     # Firebase configuration
│   ├── package-lock.json # Package lock file
│   ├── package.json      # Project dependencies and scripts
│   ├── README.md         # Project documentation
│   └── tailwind.config.js# Tailwind CSS configuration

```

## Dependencies

- React
- Redux
- Parcel
- Tailwind CSS
- Swiggy API

Refer to the `package.json` file for the complete list of dependencies.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize the video link and expand further on each feature or technology used as per your project's specifics. This detailed section should provide a comprehensive overview of Tatanagar Treats for potential users and contributors.
