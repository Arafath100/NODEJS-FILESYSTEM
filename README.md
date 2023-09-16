# NODEJS-FILESYSTEM

# File API with Node.js and Express

This is a simple Node.js API project that allows you to create text files with timestamps as content and retrieve a list of these text files from a specific folder.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm should be installed on your computer.

### Installation

1. Clone the repository to your local machine:

   ```shell
   https://github.com/Arafath100/NODEJS-FILESYSTEM.git

2. Change to the project directory:

   ```shell
   cd NODEJS-FILESYSTEM

3. Create the project:

   ```shell
   npm init -y

4. Install the project dependencies:

   ```shell
   npm install express fs path
   
**Create a text file with a timestamp as content:**

- Send a GET request to [https://nodefile-system-ndlt.onrender.com/createFile](https://nodefile-system-ndlt.onrender.com/createFile) using your preferred API testing tool (e.g., Postman).

- The server will respond with a message indicating whether the file creation was successful and provide the file's path.

**Retrieve a list of text files:**

- Send a GET request to [https://nodefile-system-ndlt.onrender.com/getFile](https://nodefile-system-ndlt.onrender.com/getFile).

- The server will respond with a JSON array containing the names of all text files in the output folder.

---

**Project Structure:**

- `index.js`: The main server file with the Express application and API endpoints.
- `output/`: The folder where text files are created and stored.

**Error Handling:**

The API provides error handling for various scenarios, such as file creation errors or reading errors. Proper error messages and status codes are returned to clients.

**Deployment:**

You can deploy this Node.js API to platforms like Render, Heroku, or any other hosting service.

**Contributing:**

If you'd like to contribute to this project, please follow the standard GitHub flow: fork the repository, create a branch, make your changes, and create a pull request.

**License:**

This project is licensed under the MIT License - see the LICENSE file for details.


Make sure to replace `"https://github.com/Arafath100/NODEJS-FILESYSTEM.git"` with the actual URL of your GitHub repository in the clone step.


   
