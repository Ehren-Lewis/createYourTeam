
# WelcomeToYourTeam
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Author: Ehren Lewis

## Table Of Contents


* [About This Project](#about-this-project)
* [How to Install](#how-to-install)
* [Usage](#usage)
* [Known Issues](#known-issues)
* [Tests](#tests)

* [Questions](#questions)
* [License](#license)
* [Contributing](#contributing)


## About This Project

This application is a command line html generator designed for any individual to create their team. The three available positions are manager, engineer, and intern. This application asks for input from the user to add one manager and as many engineers and interns as they would like. Then, it develops an html page that comes with all of the CDN dependencies (bootstrap and jquery) in the html file, as well as all of the information provided from the user

My motivation behind this project is for whenever I am employed as a software developer, I believe it will be useful to mark what positions I and my coworkers are, as well as having their contact information readily available for me as well.

The techonlogies I used were JavaScript, Node, Inquirer, Fs, Jest, HTML, CSS, and Boostrap. I used node for its npm packages and ease of writing to files. Inquirer was used to gather user input in an effective input, as well as the prompt feature wrapper in functions made the application scalable to the user's liking. Fs was used to write the html file in the dist folder for distrinbution, which the template was made with HTML, CSS, and Boostrap. Jest was used for testing the classes created to make surethe method of each class was working

Some challenges I faced while in development was import/export vs module.exports and require. The newest inquirer version uses import/ export, but jest used module.exports and require. You cannot have both of these in one application, it has to be one or the other, so I had to rollback the Inquirer version. Some other challenges was figuring out how to manipulate a DOM dynamically purely from a script, making sure I had all of the closing elements and that the syntax was correct


## How to Install


    1. Navigate to the code repository
    2. Press the green code button, located near the about section
    3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.
    4. Depending on download method, use Git, executable, or the desktop application to open the content files.
    5. All of the content of the repository will be available after completion of the previous state.
    

## Usage

The project is designed for an indvidual that is a manager, engineer, or intern. The user runs node index.js . They are then asked to input the information for the manager. Once finished with the manager's information, they are then asked if they want to add an engineer, intern, or finish the team. Picking engineer or intern will require them to fill out the prompts for the respective roles, and on completeion they'll be asked if they want to add an engineer, intern, or finish. On finish, all of the inputted information will be generated into an html file that comes with a prebuilt css file with all of the dependencies in the html template. This will be available in the dist directory, ready for distribution



live video: 

## Known Issues

The current issues with this application is that there is no saving. If the user exits prematurely, all previously command lind data will be lost

## Tests

To run the tests, in the root directory of the applcation, run npm run tests. This will run all of the current tests that comes with the application. The testing feature runs off of the jest library


## Questions

You can reach me at my Github: [Ehren-Lewis](https://github.com/Ehren-Lewis)

### OR

You can reach me at my [ehren.lewis@icloud.com](mailto:ehren.lewis@icloud.com) pertaining any other questions you may have

## License


MIT License

Copyright (c) 2022 [Ehren Lewis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

![Image of the middle of the generation prompt](/Assets/Images/YourTeamMiddle.png)
![The html generated at the end](/Assets/Images/BuildYourTeamResults.png)

video link: https://watch.screencastify.com/v/3OAZ8iVOxQgFykv82TLd

## Contributing

To contribute on this application, contact me through Github or via email address
