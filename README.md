# Full-Stack Developer Take-Home Project

## Introduction

Welcome to our take-home project! This exercise is designed to assess your skills as a full-stack developer, with a focus on working with a headless CMS and modern frontend framework. We're excited to see how you approach real-world problems like those you might encounter on our team.

## Background

At our company, we use a headless CMS (Content Management System) approach with Strapi as our backend and Next.js for our frontend. We primarily follow functional programming paradigms in our development process.

This project is designed to simulate a typical day on our team and assess your ability to work with our tech stack and programming style.

## Scenario

You are a developer on the marketing team at a fast-growing tech company. The marketing team is currently using a legacy content management system (CMS) that is outdated and no longer meets the team's needs. To streamline the creation and management of marketing content, you have been tasked with setting up a new, modern CMS. This CMS will enable content editors to create, edit, and publish blogs and video content. Alongside the CMS, a front-end application is required to display the content in a user-friendly and visually appealing manner.

## Project Requirements

### Backend (Strapi)

1. Set up two collection types:
    - Blogs
        * Required fields: Title, Slug, Publish Date, Body, Image, Read Time
    - Videos
        * Required fields: Title, Slug, Publish Date, Video, Video Description, Duration
2. Implement custom logic in the backend code for the read time & duration fields (Hint: Strapi documentation)
   -   For blog posts: Calculate and store the estimated reading time based on the content length
   -   For videos: Add a field to store video duration based on the video.

### Frontend (Next.js) (styling is not required, but feel free to add basic styling if you wish)

1. Fetch data from the Strapi API
2. Display a list of both collections on a single page.
3. The user should be able to click on "Blogs" to view a list of all blog posts and click on "Videos" to view a list of all videos.
4. The list should include the title, publish date, and read time for blogs, or duration for videos.
5. When either a blog or video is clicked it should redirect the user to the detail page. A blog will provide the title, body, etc & a video will provide the video, description, etc.

## Bonus Points (Feel free to complete some or all of these bonuses. Have other ideas not on this list then do those as well. Think outside the box and stand out from other candidates!)

-   Implement basic search functionality on the frontend
-   Add pagination for the content lists
-   Add filtering
-   Implement a simple caching mechanism for API requests
-   Utilize GraphQL
-   Setup SEO

## Submission Guidelines

1. Fork/clone this repository
2. Complete the project requirements
3. Push your changes to your forked repository
4. Submit a pull request to this repository with your changes

## Starting the Applications

### Front-end (next-fe)

1. 'cd next-fe'
2. Run `npm install`
3. Start the development server with `npm run dev`

### Back-end (strapi-be)

1. 'cd strapi-be'
2. Run `npm install`
3. Start the Strapi server with `npm run develop`

## Example

Visit https://www.pscu.com/insights to see an example of our content pages. This should give you an idea of how we structure and present our content.

## Evaluation Criteria

We will be looking at:

-   Code quality and organization
-   Problem-solving approach
-   Ability to work with functional programming concepts
-   Ability to use documentation to learn and apply concepts of the Strapi and Next.js ecosystems
-   Bonus points for additional features or optimizations

Good luck! We're excited to see your solution.


---------------------------------------------

# How to run

- Create a `.env` file and and fill the server (strapi) base url in BASE_URL field, and client base url in NEXT_PUBLIC_SERVER_URL field.
- Start the project as described above.
- Generate a strapi token from strapi `admin panel > settings` and fill it in STRAPI_TOKEN field.
- A `dummy-env.txt` file is also provided in `next-fe` folder for better understanding.