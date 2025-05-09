# Frontend Mentor - Time Tracking Dashboard Solution

This is my solution to the [Time Tracking Dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- See hover states for all interactive elements.
- Switch between viewing daily, weekly, and monthly stats.

### Screenshots

![Desktop Screenshot](/screenshots/desktop.png)
![Mobile - Filter](/screenshots/mobile-f.png)
![Mobile - Stats 1](/screenshots/mb-s.png)
![Mobile - Stats 2](/screenshots/mobile.png)
![Mobile - End](/screenshots/mb-end.png)

### Links

- **Solution URL:** [Frontend Mentor](https://www.frontendmentor.io/solutions/tracking-time-dashboard-with-api-and-promises-VhLmHDASVq)
- **Live Site URL:** [Live on Vercel](https://time-tracking-dashbord-frontend-mentor.vercel.app/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (ES6+)

### What I Learned

This project taught me how to:

- Fetch data using asynchronous functions and promises.
- Update the DOM dynamically based on JSON data.
- Use `data-*` attributes and the `dataset` API.
- Write modular and readable JavaScript code.

Here’s a core part of the logic I implemented:

```js
const getData = async () => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) throw new Error("Erreur lors du chargement des données");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const updateUserInterface = async (period = "weekly") => {
  const data = await getData();
  if (!data) return;

  data.forEach(activity => {
    const activityName = activity.title.toLowerCase().replace(" ", "");
    const card = document.querySelector(`.${activityName}__card`);

    if (card) {
      const currentTag = card.querySelector(".current");
      const previousTag = card.querySelector(".previous");

      currentTag.textContent = `${activity.timeframes[period].current}hrs`;
      previousTag.textContent = `Previous - ${activity.timeframes[period].previous}hrs`;
    }
  });
};
```

### Continued Development

In the future, I’d like to:

- Add animations and transitions between data updates.
- Improve accessibility (ARIA labels, keyboard navigation).
- Implement data filtering and sorting.
- Store user preferences using `localStorage`.

### Useful Resources

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info - Async/await](https://javascript.info/async-await)
- [Frontend Mentor Slack Community](https://www.frontendmentor.io/slack)

### Author

- **Website** – [Nitiema Allassane](https://nitiema-allassane-blog.vercel.app/index.html)
- **Frontend Mentor** – [@NitiemaDev](https://www.frontendmentor.io/profile/NitiemaDev)

### Acknowledgments

Thanks to my mentor and coding friend **ChatGPT** for the continuous support and encouragement during this project. Also, big thanks to the **Frontend Mentor** community for the feedback and inspiration.

