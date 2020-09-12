# 🤓 Freaks & Geeks 🤓
A full stack software application that helps you find a coding mentor near you. 

## 📝 Description 📝
The goal of this app is to help new coders find a mentor to help them in whatever programming language they are interested in 

## 🍴 Forking Instructions 🍴
1. Click on the top right and fork. Choose wether you would like to contribute or just use for your own purposes. 
2. Choose your file location and open in VS code. 
3. Open your terminal and run ``` npm i ``` for all node packages 
4. Once packages are installed, you can now open through your localhost port by running in the terminal ``` npm run client ``` 

## 🍃 Deployment on Heroku with MongoDB Atlas 🍃 
* Creating the Database :
1. First, you'll create a database for your application. Navigate to the [MongoDB Atlas dashboard](https://cloud.mongodb.com).
2. To create a database for your application, click the Collections button in your sandbox Clusters box.
3. From this page, select the "Add My Own Data" button. If you previously created a database through MongoDB Atlas and need to create another one for this app, click the "+ Create Database" button in the left column of the window pane instead.
4. Fill out the form with the name of your MongoDB database and a collection for that database. You only need to create one collection to get started, as your application will create them upon deploy, so don't worry if you think your database will scale up or down in the future.
5. When you're done creating your database and initial collection, the dashboard should display them

* Connect the Database to Heroku:
In order for your Heroku application to use the MongoDB Atlas database, you'll need to do two things:
1. Set up an environment variable in your Heroku application to hold the database's connection string.
2. Make sure your application's code is set up to look for that Heroku environment variable and, if it's not found, connect to a local database instead. This is important because that environment variable will only exist in production with Heroku.

* Set Up the Environment Variable in Heroku:
First, you'll add the database's connection string to an environment variable in Heroku.
1. To get started, make sure you've created a Heroku app for your project. To create the app, navigate to your application's directory from the command line and type the following command:
   ```bash
   heroku create
   ```
2. Once you receive confirmation that Heroku successfully created the name space for your application, navigate to that application in your Heroku account through the browser. To do that, go to the [Heroku website](https://heroku.com), log in, and select the application from the list of applications in your account dashboard.
3. From your Heroku application, navigate to the Settings tab on the right side of the application's menu.
4. On this page, you'll see a section called "Config Vars" with a form to enter key/value pairs. This will be where we add our product database's information. For now, type `MONGODB_URI` in the KEY field. For the VALUE, we'll fetch the database connection string from MongoDB Atlas in the next step.
5. Open your MongoDB Atlas dashboard in another browser tab so you don't leave the Heroku page. Once there, locate the Connect button in your cluster's information and click it.
6. When the connection modal dialog opens,select the second option, "Connect your application".
7. Here, all you need to do is copy the connection string listed in the second step. So go ahead and click the Copy button.
8. With the connection string copied, navigate back to your Heroku application settings and paste it into the Value form field.
9. We need to update the connection string to include our database name, username, and password. Right now it probably looks like the following code:

    ```http
    mongodb+srv://<username>:<password>@cluster0.5k55w.mongodb.net/<dbname>?retryWrites=true&w=majority
    ```
10. Change it so your username, password, and database name are correct, as shown in this example:

    ```http
    mongodb+srv://lernantino-user:password123@cluster0.5k55w.mongodb.net/deep-thoughts?retryWrites=true&w=majority
    ```
11. Once your connection string contains the correct information, click the Add button save it.

* Update Application Code for MongoDB Connection

Next and last, you'll update the application's code to accommodate the MongoDB connection.

1. In VS Code, navigate to your application and locate where you connect to your database. Once you find it, update it so it looks like the following code:

   ```js
   mongoose.connect(
     process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
     {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false
     }
   );
   ```
2. With this code in place, the `mongoose.connect()` command will attempt to use the environment variable first. If it's running on Heroku, it will find that variable and use it. If it's running locally on your machine, it won't find that variable and will fall back to use your local database connection instead.
3. Save your code and use the following Git commands to add, commit, and push it to Heroku:

   ```bash
   git add -A
   git commit -m 'deploying'
   # make sure you're pushing from your local master branch!
   git push heroku master
   ```
4. If everything worked correctly, use `heroku open` to open your app in the browser and see your work! If something isn't working, run `heroku logs` from the command line to see where there may be issues.

## ⛓️ Technologies / Dependencies ⛓️
* 👾 [NPM](https://www.npmjs.com/) packages:

        - express
        - mongoose
        - axios
        - dotenv

* 👾 [Robo 3T](https://robomongo.org/)
* 👾 [jQuery](https://jquery.com/)
* 👾 [JavaScript](https://www.javascript.com/)
* 👾 [HTML](https://www.w3schools.com/html/)
* 👾 [CSS](https://www.w3schools.com/css/)
* 👾 [Bootstrap](https://react-bootstrap.github.io/)

## 🔗 Links and Resources 🔗
* 💻 To learn [React](https://reactjs.org/docs/getting-started.html#learn-react)
* 💻 To create [Favicons](https://favicon.io/emoji-favicons/nerd-face/)
* 💻 Webpage inspired by [CodeMentor](https://www.codementor.io/tutors) and 
* 💻 On how implement [MongoDB Atlas](https://www.mongodb.com/blog/post/integrating-mongodb-atlas-with-heroku-private-spaces) on Heroku
