# CMSC434 Health App Group Project

This project is a "render" of a mobile app designed as a webpage with a React.js frontend Javascript library and using Semantic UI React as a UI toolkit.

## Getting Started

### Node.js and npm

To start developing on the project, a few things need to happen. First, you need to install node.js, a javascript runtime. To do this, do the following based on your system:

#### Windows users:
Visit the following link to download and setup node: https://nodejs.org/en/download
#### Mac users:
Follow the same instructions as the Windows users by visiting the link above or if you prefer to use the terminal, do the following.\
In the terminal, use homebrew to install node using the following command:
```
brew install node
```

#### Linux users:
In the terminal, run the following commmands to install the proper packages:
```
sudo apt install nodejs
sudo apt install npm
```

#### Installation Verification:

To verify you have the proper installation, you can run the following:

```
node -v
npm -v
```

Your output should be similar to the following:

```
v19.8.1
9.6.2
```

### All other packages

Once you have installed npm, you can go ahead and start downloading all of the packages we need for this project. To do so, first, make sure you are in the project folder and run the following command:

```
npm install
```

This may show some warnings, but those can usually be ignored. This command looks at the ``package.json`` file and finds all of the dependencies of the project and installs them all down to the proper version.

### Development

Now that all the proper pacakges are installed, you're all set to start developing. To run the app, all you have to do is ``cd`` into the project directory and run the following:
```
npm start
```
This command will start the project and open it at ``localhost:8080``. Once this is open, the project is live, so you can make changes in your preferred text editor and after saving the files, the page will re-build in real time.

### Building the App

When it comes time for us to make a submission, we need to do so with a production build of the App that doesnt require anyone to follow the above steps. To do this, we will run the command:
```
npm run build
```
This command creates a distribution copy of our App in HTML/JS/CSS and places it in the ``dist`` directory. In this directory, you will see all a file ``index.html`` as well as a bunch of other supporting files. To give others this distribution copy of the App, simply send them the ``dist`` directory and they can open ``index.html`` in their browser to see the app for themselves.