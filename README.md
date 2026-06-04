# Doable

A simple, clean project and task management web application built with Ruby on Rails. Doable lets you organize your work into projects and track individual todos within each one — keeping things focused and manageable.

> Built as a learning project to practice Ruby on Rails fundamentals including MVC architecture, ActiveRecord, RESTful routing, ERB templating, and form validations.

---

## Ruby Version

This application was built and tested with **Ruby 3.4.4**.

To check your Ruby version:

```bash
ruby -v
```

To install or switch Ruby versions, use a version manager like [rbenv](https://github.com/rbenv/rbenv) or [RVM](https://rvm.io/).

---

## System Dependencies

Make sure you have the following installed before setting up the project:

- Ruby
- Rails 7.x (`gem install rails`)
- Bundler (`gem install bundler`)
- SQLite3 (default database, included via gem)

---

## Configuration

No special environment variables are required for local development. If you plan to extend the app with external services (mailers, APIs, etc.), create a `.env` file at the project root and use a gem like `dotenv-rails` to load it.

---

## Database Creation

After cloning the repository and installing dependencies, create the database with:

```bash
bundle install
rails db:create
```

---

## Database Initialization

Run the migrations to set up the schema:

```bash
rails db:migrate
```

Optionally, seed the database with sample data:

```bash
rails db:seed
```

The `db/seeds.rb` file can be populated with example projects and todos to get started quickly.

---

## Running the App

Start the local development server:

```bash
rails server
```

Then open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## How to Run the Test Suite

Run all tests with:

```bash
rails test
```

To run a specific test file:

```bash
rails test test/models/project_test.rb
```

Rails ships with Minitest by default. No additional setup is needed for basic model and controller tests.

---

## Services

This is a straightforward CRUD application with no external services required. There are no background job queues, cache servers, or search engines configured.

---

## Project Structure Highlights

```
app/
  controllers/    # ProjectsController, TodosController
  models/         # Project, Todo (with validations)
  views/          # ERB templates for each resource
db/
  migrate/        # Schema migrations
config/
  routes.rb       # RESTful routes
```

---

## Learning Goals

This project was built to reinforce:

- Rails MVC conventions
- RESTful routing and nested resources
- ActiveRecord associations and validations
- ERB templating and form helpers
- CSS styling within the asset pipeline

---

## License

This project is open source and available under the [MIT License](LICENSE).
