# React Native User Display App

## Overview
This is a **React Native** application that fetches and displays user information from an API. The app allows users to navigate through different user profiles using **Previous** and **Next** buttons.

## Features
- Fetches user data from an external API.
- Displays user details, including **Avatar, Name, Email, ID, and UID**.
- Provides navigation buttons to switch between users.
- Displays a loading indicator while fetching data.
- Implements **clean UI** with proper styling and a structured layout.

## Technologies Used
- **React Native**
- **JavaScript**
- **API Integration**

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js**
- **React Native CLI**
- **Android Studio/Xcode** (for emulator or real device testing)

### Steps to Run Locally
1. **Clone the repository**
   ```sh
   git clone https://github.com/DhanshriBorase-15/ReactNativeApp.git
   ```
2. **Navigate to the project directory**
   ```sh
   cd ReactNativeApp
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```
4. **Run the app on an Android emulator or device**
   ```sh
   npx react-native run-android
   ```
   OR for iOS:
   ```sh
   npx react-native run-ios
   ```

## Folder Structure
```
ReactNativeApp/
│-- src/
│   │-- components/
│   │   ├── UserInfoScreen.js
│   │-- api/
│   │   ├── apiService.js
│   ├── App.js
│   ├── index.js
│-- package.json
│-- .gitignore
│-- README.md
```

## API Integration
The application fetches user data from an external API using the `fetchUsers` function.
```js
import { fetchUsers } from "../api/apiService";
```

## Notes & Considerations
- The app **fetches user data once** when it loads.
- User details are **read-only**.
- **Pagination** is implemented using **Previous** and **Next** buttons.
- The app follows **clean UI** principles with consistent styling.

## Contributing
If you'd like to contribute:
1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit changes** (`git commit -m 'Add feature'`)
4. **Push to GitHub** (`git push origin feature-name`)
5. **Open a Pull Request**


