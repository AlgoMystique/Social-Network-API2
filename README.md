# Social-Network-API

This project is a Social Network API built using Express.js, MongoDB, and Mongoose. It allows users to share thoughts, react to others' thoughts, and manage friend lists. The API offers various functionalities like creating, updating, deleting users and thoughts, adding and removing friends, and handling reactions to thoughts. This project was developed to practice working with NoSQL databases, API routing, and MongoDB.

## Installation

-Clone the repository to your local machine:
```
Copy
git clone 
```
-Navigate to the project folder:
```
cd social-network-api
```
-Install the dependencies:
```
npm install
```
-Set up your environment variables (e.g., MongoDB connection string) in a .env file.

-Run the server:
```
npm start
```
The server will start, and the Mongoose models will be synced to the MongoDB database.

## API Routes
```
/api/users
```
-GET all users: Returns all users with their thoughts and friends.

-GET a single user by its _id: Retrieves a specific user with populated thoughts and friend data.

-POST to create a new user:
```
{
    "username": "lernantino",
    "email": "lernantino@gmail.com"
}
```
-PUT to update a user by its _id: Modify user details.

-DELETE to remove a user by its _id: Delete the user and optionally remove associated thoughts.

```
/api/users/:userId/friends/:friendId
```
-POST to add a friend to a user's friend list.

-DELETE to remove a friend from a user's friend list.
```
/api/thoughts
```
-GET all thoughts: Returns all thoughts.

-GET a single thought by its _id: Retrieves a specific thought.

-POST to create a new thought:

```
{
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
}
```
-PUT to update a thought by its _id: Modify a specific thought.

-DELETE to remove a thought by its _id: Delete a thought.
```
/api/thoughts/:thoughtId/reactions
```
-POST to create a reaction in a thought's reactions array.
-DELETE to remove a reaction by its reactionId.

## Models
## User
-username: String (unique, required, trimmed)

-email: String (unique, required, valid email format)

-thoughts: Array of ObjectIds referencing the Thought model

-friends: Array of ObjectIds referencing the User model (self-reference)

-Virtual Property: friendCount to get the number of friends

## Thought

-thoughtText: String (required, 1–280 characters)

-createdAt: Date (default to current timestamp, formatted)

-username: String (user who created the thought)

-reactions: Array of reactions (nested documents based on the Reaction schema)

-Virtual Property: reactionCount to get the number of reactions

## Reaction (Subdocument in Thought)

-reactionId: ObjectId (default value is a new ObjectId)

-reactionBody: String (required, max 280 characters)

-username: String (required)

-createdAt: Date (default to current timestamp, formatted)

## Walkthrough Video
A walkthrough video demonstrating the functionality of this API and showing all the acceptance criteria can be found here : 

## License
This project is licensed under the MIT License - see the LICENSE file for details.
