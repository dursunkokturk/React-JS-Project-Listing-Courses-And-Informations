# Purpose of the Project 
To list the information of the courses and their contents that appear on the screen by clicking the delete button under each course and after deleting all the courses that appear on the screen, when the refresh button is clicked, all the data in the database is listed again.

# Creating the Project
First we need to create the project. We use the following line of code to create the project.
### npx create-react-app projectname
### npx create-react-app mycourses.

# Database Usage in the Project
Since we will use our own database, we create an api folder in the project folder. We create a db.json file in the api folder and enter the data into it.

# Sending Request to Database and Retrieving Data in the Project 
In the project, we send a request to the database using axios to get the data in the database.
### npm install axios

# Connecting to Database in Project
We use Json Server to connect to the database. We install Json Server integrated into the project folder.
### npm install -g json-server


# Running Json Server to Connecting to Database .
### json-server --watch filepath/databasename
### json-server --watch api/db.json





# Projenin Amacı 
Ekranda görünen kurslar ve içeriklerinin bilgisini her kursun altında bulunan sil butonuna tıklanarak ekranda görünen tüm kursların silinmesinden sonra yenile butonuna tıklandığında database içindeki tüm datalar tekrar listelemek.

# Projenin Oluşturulması
İlk olarak projeyi oluşturmak gerekiyor. Projeyi oluşturmak için aşağıdaki kod satırını kullanıyoruz.
### npx create-react-app projeadi
### npx create-react-app kurslarim.

# Projede Database Kullanımı
Kendi database imizi kullanacağımız için proje klasörü içinde api klasörü oluşturuyoruz. Api klasörü içinde db.json dosyası oluşturup içine datalari giriyoruz.

# Projede Database'e Request Atılması ve Dataların Alınması 
Projede database içinde bulunan dataları almak için database'e axios kullanarak request atıyoruz.
### npm install axios

# Projede Database'e Bağlanma
Database'e bağlanmak içi Json Server kullanıyoruz. Json Server'ı proje klasörünün içine entegre olacak şekilde kuruyoruz.
### npm install -g json-server

# Database'e Bağlanmak İçin Json Server'ın Çalıştırılması.
### json-server --watch dosyayolu/databaseadi
### json-server --watch api/db.json

# Map Method Kullanımı 
Map method kullanılarak component içine dataları id bilgilerini üzerinden yazdırıyoruz


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
