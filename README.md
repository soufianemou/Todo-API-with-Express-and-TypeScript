# Todo-API-with-Express-and-TypeScript

This is a simple Todo REST API built with Express using TypeScript.

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:

   git clone https://github.com/soufianemou/Todo-API-with-Express-and-TypeScript.git

2.Navigate to the project directory:

    cd Todo-API-with-Express-and-TypeScript

3.Installez TypeScript globalement (si ce n'est pas déjà fait) avec la commande:

    npm install -g typescript.

4.Install dependencies:

    npm install

5.Start the server in mode development:
npm run dev

### API Endpoints

The server will be running at http://localhost:3000/todos.

Get Todos:

# GET /todos

Get Todo by ID:

# GET /todos/:id

Create Todo:

# POST /todos
the strucure  of body should be like this :
{
  "id": number,
  "title": string,
  "completed": boolean
}

Update a Todo:
# PUT /todos/:id
the strucure  of body should be like this :
{
  "title": string,
  "completed": boolean
}

Delete a Todo:
# DELET /todos/:id


### Contributing
Feel free to contribute by opening issues or pull requests. 