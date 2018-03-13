# Foodsby

> A Vue.js project

##  Setup

``` bash
This program was written in the vue framework
To set it up follow code below written in a terminal

# install locally
$npm install -g vue-cli
*Note must have Node.Js installed*

# create new project called CodeChallenge
$vue init webpack codechallenge
finish setting up by typing no for all other questions

# go into current directory
cd codechallenge

# pull from git
now that you have a vue project you can get my project onto your computer
in order to do this you can fork this repository or clone it for use on your computer
However due to the relatively small nature of this project you can also use the faster but more brute force method:
In the src folder in this repository the code from HelloWorld.vue (located in components) can be coppied and pasted over the current code in your HelloWorld.ue (replace your file with mine).  This process can then be repeated for the App.vue file and finally on your local machine you can create a new javascript file and copy the code from testing.js into it.


# run program at localhost:8080
npm run dev
The link can then be coppied into any browser

# testing file
this file can be ran by right clicking on it and sellecting "run testing.js"
this file contains tests for loop logic and getters

# other comments
here I will very breafly discuss what I would do in order to make this project more suitable for deployment.  This is only a breif overview but I am prepared to expand upon and explain the reasoning for these changes.
1) The buttons should not be in an absolute position, but rather rendered depending on the size of the devices screen
2) I would add pictures for every resturaunt to entice users, although I suspect that doing this will result in changing Foodsby's API in order to return a photot in its JSON
3) I would include the foodsby logo on the webpage
4) I would increase the amount of testing I did in order to account for more situations
5) Upon clicking the "Select Resturaunt"  button I would propt users to confirm their order, that way accidental orders are not made
6)I would overhall the graphics from vanilla html to a style that fitted the company and paired well with the logo



```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
