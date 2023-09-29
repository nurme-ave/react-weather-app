# Weather App - React App

This is a personal project built by [Ave Nurme](https://www.avenurme.dev).

## Table of contents

- [Overview](#overview)
  - [Project Description](#project-description)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### Project Description

What's a portfolio without a good old weather app, right? :) Are you just heading out or packing for a holiday? No worries - this app has got you covered! :)

In this React project I'm using the Weather API to fetch weather data in useEffect(). I'm passing the fetch URL into the dependency array (the second parameter in useEffect()) so useEffect() runs when the URL changes. I'm also setting all the weather data properties in the useEffect() hook.

I also have 2 useState hooks. One of them tracks the state of the user input and the other one tracks the state of the URL.

It's important to note here that the fetch request is sent when the Search button is hit with a new input. This means that no fetch requests are made while the user is typing. The latter would mean making a fetch request on every key stroke which does not seem very optimized.

The page was built first for desktop and then I optimized it for smaller screens.

### Screenshot

![Screenshot of my solution](/src/images/weather-app_760.png)

### Links

- Live Site URL: [Vercel](https://react-weather-app-weld.vercel.app/)

### Built with

- ReactJS

## Author

- Website - [Ave Nurme](https://www.avenurme.dev)
- Github - [@nurme-ave](https://github.com/nurme-ave)

