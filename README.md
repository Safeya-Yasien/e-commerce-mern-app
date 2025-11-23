# E-commerce MERN Project

## Step-by-step Dev Log with client folder first

### 1. Create a new project called `e-commerce-mern-app`

### 2. create main directories "client", "server" and "admin"

## Step-by-step Dev Log with client folder first

### 3. Start with the client directory

### 4. Install TailwindCSS vite using npm

### 5. Install React-router using npm

### 6. Create .env file

### 7. Create folders "components", "pages", "layouts", "routes"

### 8. Create "Home.tsx" page

### 9. Create "MainLayout.tsx" layout in "MainLayout" folder inside "layouts" directory

### 10. Create "Header.tsx", "Footer.tsx" component in "common" folder inside "components" directory

### 11. Create "index.ts" file inside "common" folder inside "components" directory

### 12. Create "AppRouter.tsx" file inside "routes" folder

### 13. Create routes using createBrowserRouter in AppRouter.tsx file

### 14. Import "AppRouter" in "main.tsx" file

### 15. Setup "path alias" in "vite.config.ts" and "tsconfig.app.json" file to resolve the path

### 16. Add color palette in "index.css" file

### 17. Add height "min-h-dvh" to the whole dev container in "MainLayout.tsx" file

### 18. Add "grow" to "main" in "MainLayout.tsx" file to make the main container grow with the content

### 19. Add "fixed top-0 left-0 w-full z-50 h-16" to "header" tag in "Header.tsx" file and "h-full" to "container" to center the items in header after adding the height

### 20. After making the header fixed, add 'pt-16' to "main" tag in "MainLayout.tsx" file to make the main container start from the top of the header

### 21. Install daisyUI library

### 22. Add "Drawer" from "daisyUI" to handle responsive navigation

### 23. Enhance "Header" by adding links to array and loop through the links, and use 'memo' to optimize performance

### 24. Add "Footer"

### 25. Add 'ThemeController' in to handle theme change in "MainLayout.tsx" file

### 26. Add my custom colors in "index.css" file

### 27. add 'data-theme' attribute to the html tag in "index.html" file

### 28. Update "Header.tsx" file to use 'data-theme' attribute to change the theme

### 29. Update "Hero.tsx" file to use 'data-theme' attribute to change the theme

### 30. Add fixed padding to 'Home.tsx' page to make all sections on the same align

### 31. Add Features Section

### 32. Add Categories Section

### 33. Add "LimitedTimeOffers.tsx" section

### 34. Add "CountdownTimer.tsx" in separate component

### 35. I discovered that the colors in index.css such natural, base and primary are built-in colors of daisyUI, so I changed the colors to my custom colors. so when i use "desert-taupe" directly not working

### 36. I skip colors for now and move on to finish home page so i started in form in contact us section

### 37. Now after finished home page main design but i will back again to edit colors I will move to backend

## Move to backend

### 38. Install main dependencies

### 39. First type "npm init" to create a new package.json file

### 40. Install "express", "mongoose" "jsonwebtoken", "nodemon", 'cors', 'bycrypt and "dotenv" using npm

### 41. Create "index.ts" file in "server" directory

### 42. Create "models", "controllers", "routes" and "middlewares" directory in "src" directory

### 43. Install "typescript" and and init "tsc --init" to create tsconfig.json file

### 44. Add 'start' script in package.json file with "nodemon index.ts"

### 45. Add initial "express" code in "index.ts" file to test the server

### 46. Run "npm start" to start the server

### 47. Add "port", 'mongoURI' in ".env" file

### 48. Create "db.ts" mongodb connection in "lib" directory

### 49. Run "npm start" to start the server

## Back to client Admin

### 50. Get the code of customer management dashboard from my previous project "customer-management-react-node"

### 51. Install dependencies

## Back to backend

### 52. Get the code of "user" from my previous project "customer-management-react-node"

### 53.

---

### 35. Use Timer to show the countdown

### 30. There is a problem in text in dark in shop now button in hero section and bg in dark theme in learn more button in hero section

### 31. There is a problem in border of header, footer

### 22. Add hover effect to CartIcon.tsx

### 23 Make title of sections dynamic

## Future features
