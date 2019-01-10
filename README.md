# News From The 6 ("With My Woes")
This is going to be an app to show news articles about whatever. Like the Wall Street Journal and other news websites.

## Technologies to be used
+ Backend
    + Express.js or Ruby on Rails (undecided)
+ Frontend 
    + React.js

## Features List
+ I intend to have server side rendering so that you could only see an entire article after logging in (or by going to the "signedin/article/:id" route)

+ An articles page where you see trending articles? (This might be hardcoded)

+ A page where you could see all of your articles and here you could edit them if you want (in a route similar to "signedin/mine/article") or delete them of course.

### ERD
![](https://github.com/angeljuarez77/news-from-the-6/blob/master/wireframe/ERD/erd.jpg)
### Wireframes
![The landing page](https://github.com/angeljuarez77/news-from-the-6/blob/master/wireframe/landingpage.jpg)
![](https://github.com/angeljuarez77/news-from-the-6/blob/master/wireframe/loggedin.jpg)
![](https://github.com/angeljuarez77/news-from-the-6/blob/master/wireframe/loggedin:posts.jpg)
![](https://github.com/angeljuarez77/news-from-the-6/blob/master/wireframe/loggedin:userid:articleid.jpg)
![](https://github.com/angeljuarez77/news-from-the-6/blob/master/wireframe/loggedin:userid:posts.jpg)
![](https://github.com/angeljuarez77/news-from-the-6/blob/master/wireframe/mypost:id.jpg)
![](https://github.com/angeljuarez77/news-from-the-6/blob/master/wireframe/mypost:id:edit.jpg)
### M.V.P.
+ You could see all the posts from specific users (no search function)("loggedin/:userid/posts)

+ You could make a news article with the right credentials (For mvp it's just going to be a specific route kind of like "loggedin/journalist/newpost" so this way not anyone could post and make fake news only without any auth functionality)

+ You have full CRUD functionality on your own posts

+ Auth implementation (basically seal away certain routes to certain people. Everyone has access to loggedin as long as their credentials is right. Then some people would have access to journalist functionalities and very few would have admin power. I don't know how I'm going to do this.)

### Post M.V.P.

+ Make it look pretty. Such as profile pictures and a bio.

+ You could comment on a news article and have full CRUD on those too if you're the original poster. An admin could delete them

+ I would handle the scrolling method of the article by server side rendering instead of the front end.

+ Likes and dislikes on news articles?

+ Actual Email confirmation 

+ If you are an authorized person you could delete someone elses posts ("loggedin/admin/post/:id" again without any auth functionality)

+ You could scroll down an article if you're not logged in but after a certain point it wouldn't allow you to keep scrolling unless you're logged in

### Code Example

### Installation instructions
+ Clone down repo
+ In command line run each of these seperately
    + psql
    + CREATE DATABASE final_project;
+ run npm i at root level
+ npm run repop
+ npm run dev
+ Open a new tab in your terminal or a new terminal window
+ cd client
+ yarn install
+ yarn start

#TL;DR
I'm making a news web app with different levels of access and maybe server side rendering so that I could show them a preview if they are not logged in first.

+ I want to have the backend done by the end of the first day. (Friday) (With server side rendering if I'm lucky)

+ I want to get all my componenents to render depending on the level of access the second day (the only difference is basically the buttons that are rendered to the page) (Saturday)

+ I want to have these components functional for every user access level on the third day (Sunday)

+ I want to have authorization working on the fourth day for every access level(Monday)