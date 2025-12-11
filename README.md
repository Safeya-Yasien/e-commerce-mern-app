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

## Back to client Admin

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

## Back to client Admin

##### 123. in "AddProductForm" in "AddProduct" page change input type="file"

##### 124. Change "image" type in "productSchema.ts" file to "file()" and add strict validation for image size and image type

##### 125. i faced an error in "productSchema.ts" when i define type of "image" as file() in zod schema this error "Invalid input: expected file, received FileList"

    I solved it by adding "any()" in zod schema temporarily

##### 126. Add files.length === 1 validation in "productSchema.ts" file to make image required

##### 127. Use formData to send data to the server instead of json and remove "Content-Type" header

##### 128. Handle display image in "ProductsList" page

## Back to server

##### 129. Display product image in productDetails page

## Back to client Admin

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

## Back to client Admin

##### 139. Handle Responsive problems

##### 140. Handle long description in "product details"

    - adding specific width to td and line-clamp-2 to div
    - you will find a problem if you add line-clamp-2 to "td" so the solution is to add "line-clamp-2" to "div" container of description in "td"

---

# server

### test if cloudinary is working by console.log(cloudinary.config()) using cloudinary url

# admin

### should i move "DeleteButton" from "ui" to "components" folder?

### add delete all product and users in "Users" page and "Products" page

### enhance shape of formData in "ProductForm" instead of write each line of formData

### There is a problem in responsive in main layout

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

1. تسجيل الدخول

عندك حالياً نوعين يقدروا يعملوا تسجيل دخول:

الـ Admin
إيميل وباسورد ثابتين عندك (أو مخزّنين في الداتا ب role = admin).
لو دخلهم → يروح للـ dashboard.

الـ User العادي
لو دخل الإيميل والباسورد بتوعه اللي عمل بيهم حساب → يروح للـ home page لأن ماعندوش أي صلاحيات.

وده الطبيعي… لأن الـ dashboard مش مكان عام، ده مكان إدارة وسيستم داخلي.

2. حماية الـ Dashboard

طبعاً لازم تمنع الوصول:

أي حد مش عامل login.

أي حد عامل login بس role = "user".

بس تسمح لللي role = "admin".

ودي هتحصل غالباً عن طريق middleware أو auth guard (على حسب Next.js App Router ولا Pages Router)، الفكرة إنك تعمل check قبل ما يفتح الصفحة.

3. إدارة اليوزرز من الداش

ده معناه إن الـ admin يقدر:

يشوف كل الـ users.

يحذف.

يعدّل.

يغيّر role لو محتاج.

وده طبيعي جداً في أي لوحة تحكّم.

4. إضافة يوزر من الداش مع role

دي خطوة كويسة جداً، لأنها تخليك تضيف admins جداد من غير ما كل شوية تغيّر كود أو تعمل hardcoding للإيميل الأساسي.

السيناريو المنطقي:

عندك form في الـ dashboard → Add User.

تختار role: user أو admin.

يتسجّل في الداتا.

لو admin يقدر يدخل الداش زيه.

5. اللي بيحصل في الحقيقة فعلاً

اللي بتحاول تعمله ده نفس الـ pattern المستخدم في:

Shopify admin panel

WooCommerce dashboard

أي سيستم فيه roles

المنطق العامل هو:

Authentication
هل الشخص ده مسجّل دخول ولا لأ.

Authorization
هل الشخص ده عنده الصلاحية إنه يشوف الصفحة دي ولا لأ.

Role-based access
الـ admin عنده صلاحيات أكتر من اليوزر.

Session / JWT / Cookies
لو الشخص أدمن → نحتفظ بجلسته ونسمح له يدخل dashboard.
لو مش أدمن → نرميه على الواجهة الأساسية.
