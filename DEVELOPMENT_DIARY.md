# E-commerce MERN Project

## Tech Stack

### Frontend

- React
- React-router
- React-query or tanstack (for data fetching)
- TailwindCSS
- TypeScript
- react-toastify
- shadcn
- lucide-react
- react-hook-form
- zod

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- TypeScript
- cors
- bycrypt
- dotenv
- jsonwebtoken
- express-validator
- nodemon
- multer
- cloudinary
-

## Step-by-step Dev Log with client folder first

##### 1. Create a new project called `e-commerce-mern-app`

##### 2. create main directories "client", "server" and "admin"

## Step-by-step Dev Log with client folder first

##### 3. Start with the client directory

##### 4. Install TailwindCSS vite using npm

##### 5. Install React-router using npm

##### 6. Create .env file

##### 7. Create folders "components", "pages", "layouts", "routes"

##### 8. Create "Home.tsx" page

##### 9. Create "MainLayout.tsx" layout in "MainLayout" folder inside "layouts" directory

##### 10. Create "Header.tsx", "Footer.tsx" component in "common" folder inside "components" directory

##### 11. Create "index.ts" file inside "common" folder inside "components" directory

##### 12. Create "AppRouter.tsx" file inside "routes" folder

##### 13. Create routes using createBrowserRouter in AppRouter.tsx file

##### 14. Import "AppRouter" in "main.tsx" file

##### 15. Setup "path alias" in "vite.config.ts" and "tsconfig.app.json" file to resolve the path

##### 16. Add color palette in "index.css" file

##### 17. Add height "min-h-dvh" to the whole dev container in "MainLayout.tsx" file

##### 18. Add "grow" to "main" in "MainLayout.tsx" file to make the main container grow with the content

##### 19. Add "fixed top-0 left-0 w-full z-50 h-16" to "header" tag in "Header.tsx" file and "h-full" to "container" to center the items in header after adding the height

##### 20. After making the header fixed, add 'pt-16' to "main" tag in "MainLayout.tsx" file to make the main container start from the top of the header

##### 21. Install daisyUI library

##### 22. Add "Drawer" from "daisyUI" to handle responsive navigation

##### 23. Enhance "Header" by adding links to array and loop through the links, and use 'memo' to optimize performance

##### 24. Add "Footer"

##### 25. Add 'ThemeController' in to handle theme change in "MainLayout.tsx" file

##### 26. Add my custom colors in "index.css" file

##### 27. add 'data-theme' attribute to the html tag in "index.html" file

##### 28. Update "Header.tsx" file to use 'data-theme' attribute to change the theme

##### 29. Update "Hero.tsx" file to use 'data-theme' attribute to change the theme

##### 30. Add fixed padding to 'Home.tsx' page to make all sections on the same align

##### 31. Add Features Section

##### 32. Add Categories Section

##### 33. Add "LimitedTimeOffers.tsx" section

##### 34. Add "CountdownTimer.tsx" in separate component

##### 35. I discovered that the colors in index.css such natural, base and primary are built-in colors of daisyUI, so I changed the colors to my custom colors. so when i use "desert-taupe" directly not working

##### 36. I skip colors for now and move on to finish home page so i started in form in contact us section

##### 37. Now after finished home page main design but i will back again to edit colors I will move to backend

## Move to backend

##### 38. Install main dependencies

##### 39. First type "npm init" to create a new package.json file

##### 40. Install "express", "mongoose" "jsonwebtoken", "nodemon", 'cors', 'bycrypt and "dotenv" using npm

##### 41. Create "index.ts" file in "server" directory

##### 42. Create "models", "controllers", "routes" and "middlewares" directory in "src" directory

##### 43. Install "typescript" and and init "tsc --init" to create tsconfig.json file

##### 44. Add 'start' script in package.json file with "nodemon index.ts"

##### 45. Add initial "express" code in "index.ts" file to test the server

##### 46. Run "npm start" to start the server

##### 47. Add "port", 'mongoURI' in ".env" file

##### 48. Create "db.ts" mongodb connection in "lib" directory

##### 49. Run "npm start" to start the server

## Back to Admin

##### 50. Get the code of customer management dashboard from my previous project "customer-management-react-node"

##### 51. Install dependencies

##### 52. Update "Home" and replace 'customer' with 'products' to display total count of 'users' and 'products'

##### 53. Edit "Customers Page" to "Users Page"

##### 54. Pause protected route for now

## Back to backend

##### 55. Get the code of "user" from my previous project "customer-management-react-node"

##### 56. Add 'AddUser', 'deleteUser' and 'editUser' to 'users.controller'

##### 57. Add 'add-user', 'edit-user' and 'delete-user' routes to 'users.route'

##### 58. Add 'country', 'phone', 'gender' to 'user.model

##### 59. Ask about handling 'full name' in 'user.model' if best i get it from user as 'firstName' and 'lastName' or 'fullName'?

##### 60. The answer is 'firstName' and 'lastName' because i'ts easier to combine two fields than to to split

##### 61. Then combine 'firstName' and 'lastName' in 'fullName' field using 'virtual' in 'user.model'

##### 62. If i want 'fullName' appears when send data to frontend then i need to add 'toJSON' and 'toObject' in 'user.model'

##### 63. Add 'enum' in 'gender' field for more strict validation in 'user.model'

##### 64. Understand what is the 'virtuals' and 'enum' in 'user.model'

##### 65. I understand that 'virtuals' is used to add virtual fields to the model and not added to database it's only and 'enum' is built-in validator in mongoose to define restricted values for a field

## Back to server

##### 66. Add cors to server

##### 67. Add 'corsOptions' by add origin of the 'admin' in origin are allowed to access

## Back to admin

##### 68. Display all users in 'Users' page

##### 69. Work on 'Add User' page

##### 70. for now i will work only on 'AddUserForm' with its 'inputFiled' validations

##### 71. Escape for now reset password after user login

##### 72. focusing only for adding users

##### 73. How the admin will add users without adding password? i will generate a random password and add hidden field in the form so the admin can't see the password

## Back to server

##### 74. Add hashed password in 'user.controller' when sending the user data to the database

##### 75. What is the difference between 'create' and 'new'?

    i found that new User() + save: when i want to update any data before saving it to the database
    create User(): when i want to create a new user and save it to the database without updating any data

##### 76. I use 'transform' in 'toJSON' to remove password from the response

##### 77. Finished the 'Add User' page

##### 78. Move to 'Products' page

##### 79. Add main titles in products table 'Name', 'Category', 'Price', 'Image', 'Description', 'inStock'

## Back to server

##### 80. Add product model, controller and route

##### 81. Add "AddProduct", "getProducts in "products.controller"

## Back to admin

##### 82. Add "AddProductPage" in "admin"

##### 83. When i add 'add-product' route in "sidebar" it makes products and addProduct active so i use end in navLink to solve this problem

##### 84. Handle "AddProductForm" in "AddProduct" page

##### 85. Add logic to handle "AddProductForm" in "AddProduct" page

##### 86. I Faced a react-hook-form problem in number and boolean types so i use coerce.number() and coerce.boolean() in zod schema, but i faced another problem in resolver in 'addProductForm' so i will search for it

##### 87. First i faced a problem in resolver in 'addProductForm' so i searched and asked ai

    - first i removed product interface from productSchema.ts
    - second i used z.input and z.output instead of z.infer because i want to get the data from the form in way and then zod will validate it and resolve it to the correct type
    - third i go to 'AddProductForm' and used "parse method" to parse the data from the form to the correct type

##### 88. handle crud logics to 'AddProductForm' in 'AddProduct' page

##### 89. I faced a problem in "ProductsList" page with type of id is i add it in "productSchema.ts" file or what???

    i solved it by adding "id" in "productSchema.ts" file

##### 90. handle 'delete product' in 'ProductsList' page

## Back to server

##### 91. Add "deleteProduct" logic in "products.controller" by using "findByIdAndDelete" method

##### 92. Add "deleteUser" logic in "users.controller" by using "findByIdAndDelete" method

## Back to admin

##### 93. Add "deleteUser" logic in "Users page"

##### 94. Add "viewUser" logic in "Users page" by create "userDetails" Page

## Back to server

##### 95. Add "timestamps" in 'user.model' to add createdAt and updatedAt fields

##### 96. I faced a problem in displaying the date in users the timestamps not work

    i solved it by just restarting the laptop

## Back to admin

##### 97. To convert date retrieved from database to date format in frontend use "toLocaleDateString()" method

##### 98. Create "ProductDetails" page

##### 99. Handle AddProductForm in "AddProduct" page the submit button not working

    I found the problem in "productSchema.ts" which i was write _id: z.string() and this is means required field so i add "optional()" to make it optional

##### 100. Then active view product button

##### 101. AFter i add 'optional()' to \_id in productSchema.ts file i faced a problem in "ProductsList" page because i use "\_id" in all actions

    i solved it by adding interface IProduct in "ProductsList" page instead of IProductForm

##### 102. Handle Edit event in "ProductsList" page

## Back to server

##### 103. Add "update" route in "products.route.ts

##### 104. Add "updateProduct" function in "products.controller.ts"

## Back to admin

##### 105. Add "editProduct" function in "ProductsList" and navigate to "AddProductPage"

##### 106. Handle "AddProductPage" to contain both cases "Add" and "Update"

##### 107. First enhance "ProductsList" page to separate files

##### 108. Move IProduct interface into "product.types.ts" into "types" directory

##### 109. Add "IProductsResponse" interface into "product.types.ts" into "types" directory and use it in useQuery

##### 110. I create "common" folder inside "components" directory and move "Header" and "Sidebar" components into it and create "index.ts" file inside "common" directory

##### 111. I create "ui" folder inside "components" directory and create "DeleteButton" inside it and create "index.ts" file inside "ui" directory

##### 112. I create "DeleteButton" for delete product and user with custom confirmation message

##### 113. Download "ShadCn" to use "AlertDialog"

##### 114. Add "compilerOptions" in "tsconfig.json" file

##### 115. Now finished the "DeleteButton" for delete product and user with custom confirmation message

##### 116. Add "SummaryCard" component for "Dashboard"

##### 117. Add Responsive for dashboard

    - First install "sheet" from "shadcn"
    - add menu icon in "header"
    - swap "search" with "profile" in "header"
    - add "mobileSidebar" in "header"
    - make pages responsive
    - starts with "Home" page

## Back to server

##### 118. Add Image in product using "Cloudinary"

    1- login to cloudinary
    2- install "cloudinary" using npm
    3- add 'cloudinary cloud_name', 'cloudinary api_key', 'cloudinary api_secret' in '.env' file
    4- add "cloudinary.config" in 'index.ts' file with "secure: true" to convert the url to https, and add 'cloud_name', 'api_key', 'api_secret' in "cloudinary.config"
    5- I found we can use "CLOUDINARY_URL" in .env instead of "cloudinary cloud_name", "cloudinary api_key", "cloudinary api_secret"
    6- Then just write "cloudinary.config" in "index.ts" without any config and it will work
    7- test if cloudinary is working by console.log(cloudinary.config()) if print "{}" then it's not working it must print "cloud_name", "api_key", "api_secret"
    8- So for now because "cloudinary url" is not working I will use separate api key, api secret and cloud name in ".env" file
    9- and now it working successfully

##### 119. install "multer" for uploading files

    1- install "multer" using npm
    2- add storage in "index.ts" file and use "memoryStorage()" to store the files in memory in RAM and i didn't use "diskStorage()" because i want to use cloudinary for uploading files and i don't want to save the files in the disk
    3- create "cloudinary.ts" file in "lib" directory and remove  "cloudinary.config" from index.ts in it
    4- create 'multerMiddleware.ts' file in "middlewares" directory to recieve the file from the form and save it in the database and we define type of the file in the middleware "single('image')"
    5- add "multerMiddleware" in "products.route.ts" file to use the middleware
    6- edit addProduct function in "products.controller.ts" file to use the middleware and add the image to the product

##### 120. Just questions what lib and utils folders means?

    - فولدر ال lib ده الل بنحط فيه الخدمات الأساسية الل بنربط بيها خدمات خارجيه أو أنظمه جوا المشروع زى db connection, stripe setup, cloudinary setup, etc.
    - فولدر ال utlis ده لل functions الصغيره الل بستخدمها أكتر من مرة

##### 121. just flow of add image in product

    1- Express م بيعرف يستقبل ملفات لو بعتله صوره هتوصله بصيغه multipart/form-data و express م فاهمها ف بنستخدم multer library ويفكه
    2- استخدمنا memory storage نحظ الصوره على الرام على شكل buffer وبعدين نرفعها على cloudinary

##### 122. now i can upload image in product

## Back to Admin

##### 123. in "AddProductForm" in "AddProduct" page change input type="file"

##### 124. Change "image" type in "productSchema.ts" file to "file()" and add strict validation for image size and image type

##### 125. i faced an error in "productSchema.ts" when i define type of "image" as file() in zod schema this error "Invalid input: expected file, received FileList"

    I solved it by adding "any()" in zod schema temporarily

##### 126. Add files.length === 1 validation in "productSchema.ts" file to make image required

##### 127. Use formData to send data to the server instead of json and remove "Content-Type" header

##### 128. Handle display image in "ProductsList" page

## Back to server

##### 129. Display product image in productDetails page

## Back to Admin

##### 130. Handle Edit product because i forget

    - I change "AddProductForm" to "ProductForm"
    - change text depend on status add or update
    - handle get product using useQuery in "ProductForm"
    - use reset to display the data in "ProductForm" which i used react-hook-form will handle the form data without needing to add value
    - there is a problem in onSuccess of useQuery in "ProductForm" because in new versions of react-query it will removed because what i found that "useQuery is meant to deal with data, not with the fetch process" so it was causes alot of problems because if the data updated or get from cache it will not work
    - so i used "useEffect" to handle the data after i fetch it

## Back to server

##### 131. fix "editProduct" controller in "products.controller.ts" file by using "new:true" to display the old data before editing and "validators:true" to data validation in schema in "findByIdAndUpdate" method

##### 132. Until now every thing is working fine but i faced a problem with "preview and update" image

    - before i told you how i solved this problem i will ask you a question
    - How image is stored in the database using cloudinary?
    - when i send data from frontend as formData to the server until i can send the image in the formData as file because json can't handle file type
    - so the image sended as file this file contain length and files "image"
    - so i send the image which is the index 0 because index 1 is the file and length is the length of the file
    - the server get the image as string contain file name, file type file size and file buffer
    - then i used cloudinary which take the file buffer and upload it to cloudinary and it handle it and convert it to url
    - and i send the url to the database

    - now after i send the image to the database i can display it in the frontend
    - but how i can update it in the database?
        1- first you will not found the image in req.body because it's a file and it's not in the body of the request
        2- so if you want the old image of the product you will get the product data of the id and then you will find the image in the data of the product but how you can update it?

##### 133. How can i update the image in the database in "products.controller.ts" file?

    - first i will get old product image from product data
    - then get the new image from req.file if exist
    - then use the same function i used in addProduct to upload the image to cloudinary and get the url
    - then make old image  =  new image
    - then use findByIdAndUpdate to update the product

## Back to admin

##### 134. I want to preview image in "update" mode

    - first i add state "previewImage" in "ProductForm"
    - then i use setPreviewImage in useEffect to set the previewImage to the image of the product
    - but i faced an error when using setPreviewImage direct after reset because i'm trying to change state twice at the same time can cause rerenders and i will get an error
    - so i use setTimeout to wait for the state to be updated
    - finally i preview the image using URL.createObjectURL

##### 135. Enhance "Users Page"

    - create "PageTitle" component in "common" folder to handle the title of the page
    - create "UsersList" component and move table from "users.tsx" to "UsersList" component

##### 136. Handle Edit User

## Back to server

##### 137. Edit user _id to id without _ to easy to use in the front-end

##### 138. Add quantity stock to product

## Back to Admin

##### 139. Handle Responsive problems

##### 140. Handle long description in "product details"

    - adding specific width to td and line-clamp-2 to div
    - you will find a problem if you add line-clamp-2 to "td" so the solution is to add "line-clamp-2" to "div" container of description in "td"

## Back to server

##### 141. Register

    - I asked question what is teh best name for register is "register or signup" and "login or signin"?
    - I found that "register and login" is the best names for routes
    - and "signup and signin" for ux maybe cause confusion for user so the best is "login and signup" or "register and signin"
    - update "user.model" change name of role user to "viewer" this is the best approach for now
    - so I have now ["admin", "viewer"] in "user.model"
    - admin: can read, create, update, delete
    - viewer: read only
    -
    - the second question is how the admin can register at the first time as admin because we make default role is "viewer"?
        - after i searched i found two solutions:
            - first add fixed mail and password for admin and make role admin
            - second add userCount which is the number of users and if userCount === 0 this means this is the first one who register then make role admin after that new users follow the normal logic
            - I choose the second one because it's more secure and I think it's the best approach

            - I use User model .countDocuments() function from mongoose to get the userCount because each user is a new document in the database
            -

##### 142. Login

## Back to Admin

##### 143. Add "Signup" page

##### 144. Add "login" page

    - I faced a problem when using AuthFormInput component in "login" page because I was using ISingupFormData type for register and name and all fields so i faced errors with type in login because i have to use TLoginFormData type and these will make me create repeated components

    - I used generic instead of specific type:
        - first what is generic type?
            - generic type is a type that can be used in many different places means أنا م عارف نوع الداتا دلوقت بس الل هيستخدمنى هيقولى النوع زى متغير x in math
        - T is the type of data like x in math  variable name
        - FieldValues it's type in react-hook-form  means أى object يمثل form مفاتيحه strings وقيمته اى حاجه
        FieldValues: {
            [key: string]: any;
        }
        يعنى المفتاح نوعه string لكن النوع أى حاجه
        so
        type SignupForm = {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
        }

        type LoginForm = {
            email: string;
            password: string;
        }

        all this FieldValues
        - <T extends FieldValues> معناه إن T لازم يكون object like form بحيث يمنع إنه يكون نوع واحد دايركت بمعنى T = string على طول وده غلط لأن شكل الداتا الل هيتجى من الفورم على شكل اوبجكت وممكن يكون فيه انواع مختلفه {name: string, age: number}
        يعنى ال generic but work only with form not any data

        - name: Path<T> معناه إن ال name لازم يبقى واحد من دول

##### 145. Enhance components names and structure

##### 146. Handle errors in "ProductForm" with type number and understand what FieldErrors<T>[Path<T>]; means

## Back to server

##### 147. Handle protected route and not found route

    - first one will register will be admin
    - anyone who register after admin will be viewer
    - admin can add user and make them viewer
    - viewer can only view the products
    - admin can make all functions

##### 148. Adding not found route using "{0,}" in server/index.ts file because old way "\*" in v3 but in v4 by using this way

## Back to Admin

##### 149. Make dashboard protected only who logged in can see it

    - i add protected route in "AppRouter.tsx" file
    - i create 'isAuthenticated' function in "utils" folder which check if the token is in local storage

##### 1510. Add header in 'Home' page to add auth with every request

    - which login != permission which protected route proves someone is logged in not they are allowed to see the page
    - so i add " headers: { Authorization: `Bearer ${token}` }," in fetch request in "Home.tsx" file

##### 1511. ِHandle all routes with "admin" role

    - first i create "getRoleFromToken" function in "utils" folder to get the role from the token using "atob"
    - then i create "RoleProtectedRoute" component in "components" folder to check if the role is admin or not
    - add "RoleProtectedRoute" in "AppRouter.tsx" file to all admin roles

## Back to server

##### 1512. add count routes for both products and users to return the count of products and users using "countDocuments"

## Back to admin

##### 1513. Add "productsCount" and "usersCount" in "Home" page

## Back to server

##### 1514. add "me" route in "users.route" to get accessible user data for both viewer and admin include only "fullName", "email", "role" using "select" after findById

## Back to admin

##### 1515. Display user data "email", "role" in Header profile menu

##### 1516. i handle edit, delete buttons as not allowed for viewer to use them and sidebar to prevent "viewer" to see "users, add user" pages

##### 1517. create "Development_diary.md" file to keep track of the development diary and make Readme for main points

##### 1518. Confirm message before logout "logout" on sidebar using "AlertDialog"

##### 1519. Enhance "AppRouter.tsx" to prevent repetition of code

    - create "routePaths.ts" file in "routes" folder to store all routes
    - import "routePaths" in "AppRouter.tsx" file and use it in "path" attribute
    - create "adminRoutes.ts" file in "routes" folder to store all admin routes
    - create "authRoutes.ts" file in "routes" folder to store all auth routes
    - import "routePaths" and "adminRoutes" in "AppRouter.tsx" file and use it in "path" attribute

##### 1520. Add "ErrorElement" in "AppRouter.tsx" file to display error message when write wrong path or route

    - create "ErrorBoundary" component in "components" folder
        - create "error" variable = useRouteError()
        - create "errorMessage" variable empty and add it's type string
        - then check if the error is "RouteErrorResponse" using "isRouteErrorResponse" which means the error from the server such "401 Unauthorized", "404 Not Found", "403 forbidden" and etc
        - then else if the error not from the server use "instanceof Error" when the error from the code itself or unexpected error such "nul", "undefined", "NaN" and etc such delete "data" from "useQuery" in "ProductsList" page for example
    - add "ErrorBoundary" in "AppRouter.tsx" file in "errorElement" attribute

##### 1521. What is "ErrorBoundary" component?

    - it's a component that catches errors in the application and displays a fallback UI when an expected error occurs
    - we use it to wrap the application or specific components that we want to handle errors for
    - if you wrap specific components with ErrorBoundary, it will display  the fallback UI when an error occurs in that component and display other components as it without effecting the rest of the application
    -
    - ErrorBoundary is a class component use [ComponentDidCatch, getDerivedStateFromError] functions lifecycle methods
    -

<div dir="rtl">

##### 1522. ايه هى ال lifecycle ؟

ال lifecycle هى مراحل حياة ال component

- Render, Update, Unmount
- أي حاجه بتبدأ ب Component عبارة عن class function ومكانها الطبيعى في class لأنها بداية نشأت ال React
- لأن ال class has instance, this, internal state
- الل بيحصل إن react بيكريت instance from the class وينادى ال methods in specific times

##### 1522. ليه ال functional component ملهاش lifecycle ؟

- لأنها زى ما بنقول هى مجرد function بننادى عليها وبتخلص
- وملهاش instance and this
  بالتالى مافيش مكان لل lifecycle methods

##### 1522. طب ايه الحل ؟ عملوا ال hooks

- جابوا ال state and side effects like useEffect instead of [ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount]
- لكن م كل ال lifecycle methods اتحولت ل hooks
- لأن ال componentDidCatch and getDerivedStateFromError بتشتغل قبل ال render في مرحلة React الداخلية م جوه ال function

=> hooks بتتنادى أثناء ال Render
=> وال Render لازم يبقى Pure
=> فلما Error يحصل ال Render بيتكسر
=> بالتالى ال hook م هيشتغل
عشان كده بنحتاج حاجه تشتغل برا ال Render وم عندناش hook لكده

##### 1522. عندنا حلين إما

    - استخدام ال ErrorBoundary with class component
    - او استخدام react-error-boundary library

    and they suggest to use react-error-boundary library

</div>

##### 1523. So we will use "react-error-boundary" library and wrap the whole application with "ErrorBoundary" component

    - install "react-error-boundary" using npm
    - add "ErrorBoundary" in "AppRouter.tsx" file
    - this called global error boundary
    - but you should now it's not catch async errors you have to use "useErrorBoundary" hook inside async function by using "showError" function
    - and in reactQuery use error and isError and throw error

##### 1524. I faced an error in "Home" page

    - I faced this error "Unexpected Application Error!

Objects are not valid as a React child (found: object with keys {msg, data, success}). If you meant to render a collection of children, use an array instead."

- I found the error comes from "SummaryCard" component in "Home" page
- first when i console count of products and users i found that he also console users data and senstive data like password
  I found that i wrote users and products in useQuery in "Home" page
  so i changed it to "users-count" and "products-count" and it's working fine

## move to client

##### 1525. design login and sighup page

    - first design login page
        - create "AuthInput" component in "components" folder for input field
        - use react-hook-form and zod validation
        - create "loginSchema" in "schemas" folder for zod validation
        - use "react-query" for fetching data
        - add "useMutation" to send data to the server in login
        - remember we use "useMutation" to send data to the server and "useQuery" to fetch data from the server
        - add "toast" for displaying success and error message
        - solve login problem
    - move to "Signup" page
        - handle "AuthInput" component to handle both login and signup
        - add generic type to "AuthInput" component
            - i used "FieldValues" from "react-hook-form"
            - i used "Path" from "react-hook-form" for name type
            - i used "UseFormRegister" from "react-hook-form" for register type
            - and "FieldError" from "react-hook-form" for error type
            - in "signup" in backend i get 'firstName' and 'lastName' but in 'signup' page i get 'fullName' so i change 'fullName' to 'firstName' and 'lastName'

---

# client

### dark theme problems

# server

### test if cloudinary is working by console.log(cloudinary.config()) using cloudinary url

# admin

##### . Add gloabal fetcher to prevent repeated code

##### when ErrorBoundary error component appears i can't test it

##### handle profile icon styles and display mail

### add delete all product and users in "Users" page and "Products" page

### enhance shape of formData in "ProductForm" instead of write each line of formData

### add dark mode in dashboard

### add skeleton when loading

### add loading, and error message when fetching data

### add not found page

### use axios or fetch

### 70. How to handle password field in 'Add User' page

# client

### 35. Use Timer to show the countdown

### 30. There is a problem in text in dark in shop now button in hero section and bg in dark theme in learn more button in hero section

### 31. There is a problem in border of header, footer

### 22. Add hover effect to CartIcon.tsx

### 23 Make title of sections dynamic

## Future features
