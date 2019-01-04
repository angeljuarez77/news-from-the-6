# News From The 6 ("With My Woes")
This is going to be an app to show news articles about whatever. Like the Wall Street Journal and other news websites.

## Technologies to be used
+ Backend
    + Ruby on Rails or express.js (idk yet)
+ Frontend 
    + React.js

## Features List
+ I intend to have server side rendering so that you could only see an entire article after logging in (or by going to the "signedin/article/:id" route)
+ An articles page where you see trending articles? (This might be hardcoded)
+ A page where you could see all of your articles and here you could edit them if you want (in a route similar to "signedin/mine/article") or delete them of course.
### ERD
### Wireframes
### M.V.P.
+ You could see all the posts from specific users (no search function)("loggedin/:userid/posts)

+ You could make a news article with the right credentials (For mvp it's just going to be a specific route kind of like "loggedin/journalist/newpost" so this way not anyone could post and make fake news only without any auth functionality)

+ You have full CRUD functionality on your own posts

+ If you are an authorized person you could delete someone elses posts ("loggedin/admin/post/:id" again without any auth functionality)

+ You could scroll down an article if you're not logged in but after a certain point it wouldn't allow you to keep scrolling unless you're logged in

### Post M.V.P.
+ Auth implementation (basically seal away certain routes to certain people. Everyone has access to loggedin as long as their credentials is right. Then some people would have access to journalist functionalities and very few would have admin power. I don't know how I'm going to do this.)

+ Make it look pretty. Such as profile pictures and a bio.

+ You could comment on a news article and have full CRUD on those too if you're the original poster. An admin could delete them

+ I would handle the scrolling method of the article by server side rendering instead of the front end.

+ 
### 
