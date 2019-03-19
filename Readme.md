Auth Endpoints

- method: POST, endpoint: /register, description: creates a user and hashes the password.
- method: POST, endpoint: /login, description: authenticates user and creates a JWT token.

Auth Data Model

-field: id, type: integer, description: id for user.
-field: username, type: string, description: username for user.
-field: password, type: string, description: password for user.

Posts Endpoints

- method: GET, endpoint: /posts, description: gets all posts.
- method: GET, endpoint: /posts/:id, description: gets a post by id.
- method: POST, endpoint: /posts, description: adds a posts if has name, location and kids fields.
- method: DELETE, endpoint: /posts/:id, description: deletes a post with specified id.
- method: PUT, endpoint: /posts/:id, description: updates a post with specified id.

Post Data Model

-field: id, type: integer, description: id for post.
-field: name, type: string, description: name of user making post .
-field: location, type:string, description: location of user making post.
-field: kids, type: integer, description: number of kids user has with them.
-field: timestamp, type:string, description:time post was created.

Comments Endpoints

- method: GET, endpoint: /comments, description: gets all comments.
- method: GET, endpoint: /comments/:id, description: gets a comment by id.
- method: POST, endpoint: /comments, description: adds a comment if has post_id, name and comment fields.
- method: DELETE, endpoint: /comments/:id, description: deletes a comment with specified id.
- method: PUT, endpoint: /comments/:id, description: updates a comment with specified id.

Comments Data Model

-field: id, type: integer, description: id for comment.
-field: post_id, type: integer, description: references id on posts table.
-field: name, type: string, description: name of user creating comment.
-field: comment, type: string, description: comment created by user. Limit of 1000 characters.
