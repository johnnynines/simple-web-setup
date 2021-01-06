# Simple Web Setup
A no frills setup for those who just want to get started. Created because I could not find something similar that would work with my projects and I got sick of doing it manually.

## No installation needed
Pull the repo or download/uncompress into a directory of your choosing and that's basically it. If you would like to use Gulp to automate SCSS conversion and javascript minification, run ```npm install``` in the root directory to install Gulp and it's helpers.

Then type ```gulp``` in the root directory to begin automation process. 

This will watch the ```/assets/js```, and the ```/assets/scss``` directories for changes and output their results to the ```/assets``` directory. Relative links to these files can be found in the ```<head>``` of the ```index.html```.
