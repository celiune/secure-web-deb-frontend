# Secure-Web-Dev Front End

Front-end school work to implement a given back-end [back-end](https://github.com/celiune/secure-web-dev-backend).
This backend connects to a MongoDB Database containing locations of film sets in Paris, France.
Consulting locations requires an account. Creating, updating and deleting locations requires elevated privileges.
There are 2 access level: `user` and `admin`. Each user have a `role` property to store this data.
Users can authenticate themselves with a Json Web Token, obtained by logging-in with their `username` and `password`.
Passwords are hashed, and the hashes are never shown in API responses.

## Dependencies

```
cd secure-web-deb-frontend
npm install
```


## Developing (from svelte init)

Once you've created a project and installed dependencies with npm install (or pnpm install or yarn), start a development server:

```npm run dev -- --open```

## User Stories ( :heavy_check_mark: : implemented features) 

:heavy_check_mark: US1 : As a random visitor, I want to be able to register an account or log-in, so I can access all features

:heavy_check_mark: US2: As a random visitor, I want to be redirected to the login/register page when I click on “location" tab, so that I know I must log-in to see its content

:heavy_check_mark: US3: As a logged-in user, I want to see locations and be able to click on one location to open a modal containing details, so that the website is useful

:heavy_check_mark: US4: As an “admin" user, I want to see a “Add Location” button in the location page, so that I can create a new location

:heavy_check_mark: US5: As an “admin" user, I want to see a button to edit locations in the array of locations, so that I can edit existing locations

:heavy_check_mark: US6: As an “admin" user, I want to see a button to delete locations in the array of locations so that I can delete existing locations

The last US6 is half done, there is a button to delete locations in the array of locations but every button in the page only delete the first location of the page, so to delete the location you want, you need to first click on the location with "More details" and then you have button delete which will delete it.
