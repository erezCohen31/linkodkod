# Linkodod

Application to stay in touch with kodkod share and enjoy

## Technologies Used

- **HTML5**
- **CSS3**
- **TypeScript**
- **React**
- **Vite**

## Project Structure

```
front-linkodkod/
├── src
     │  ├── main.tsx
     │  ├── App.tsx
     ├── style/
     │   ├── AddPostPage.css          # addpost page style
     │   ├── Connect.css              # connect page style
     │   ├── ContainerPosts.css       # Posts page style
     │   ├── Footer.css               # Footer style
     │   ├── Header.css               # Header style
     │   ├── Login.css                # Login page style
     │   ├── Navbar.css               # Navbar style
     │   ├── Post.css                 # Post style
     │   └── PostsPage.css            # container posts style
     ├── components/
     │   ├── Layout.tsx               # Layout page
     │   └── application_layout/
     │       ├── AddPost.tsx          # content addpost
     │       ├── Connect.tsx          # content choice to connect
     │       ├── ContainerPosts.tsx   # content posts page
     │       ├── Footer.tsx           # footer content
     │       ├── Header.tsx           # header content
     │       ├── Login.tsx            # login page
     │       ├── Navbar.tsx           # navbar content
     │       ├── Post.tsx             # content post
     │       ├── PostPage.tsx         # content post in all page
     │       └── Signup.tsx           # signup page
     ├── context/
     │   └── User.context.tsx         # user context
     ├── controller/
     │       ├── PostController.ts    # post controller
     │       └── UserController.ts    # user controller
     └──── interface/
         ├── Post.ts                  # interface of the post
         ├── PostProps.ts             # interface of the props post
         ├── loginForm.ts             # interface of the form login
         ├── PostPageProps.ts         # interface of the props post pages
         ├── SignupForm.ts            # interface of the form signup
         ├── UserType.ts              # interface of the user
         └── PostsPageProps.ts        # interface of the props container post


## To run

-clone it
-npm i
-npm run dev

```
