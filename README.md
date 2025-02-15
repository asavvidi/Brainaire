# Brainaire 🧠🎯

Brainaire is a quiz application that challenges users with multiple-choice questions while keeping track of their scores. It dynamically fetches questions from a JSON server and ensures a new randomized question order every time the quiz starts.

## Overview

Brainaire is built using modern web technologies:

- **React** for the frontend.
- **Context API + useReducer** for global state management.
- **JSON Server** to simulate a backend and fetch quiz questions.
- **Dynamic Timer** for each question.
- **High Score Tracking** to encourage competition.

## Features

✅ **Randomized Questions** – Questions are shuffled on each quiz attempt.  
✅ **Multiple-Choice Answers** – Users select from predefined answer options.  
✅ **Live Score Tracking** – Points are updated dynamically based on correct answers.  
✅ **Countdown Timer** – Users have a limited time to answer the questions.  
✅ **High Score System** – Tracks the best score achieved.  
✅ **Restart Functionality** – Allows users to restart the quiz at any time.

## Technologies Used

- **React** – For building the user interface.
- **Context API & useReducer** – For efficient state management.
- **JSON Server** – For fetching quiz data.
- **CSS** – For styling the app.

## Installation

1️. Clone the Repository

```bash
git clone https://github.com/yourusername/Brainaire.git
cd Brainaire
```

2. Install dependencies on the root folder:

```bash
npm install
```

## Start

To run the app, you need to start the JSON server and then run the main app in the root folder

### Start the JSON server

To start the JSON server, run the following commands in a new terminal:

```bash
npm run server
```

### Start the App

To start the app, run the following commands in a new terminal:

```bash
npm run dev
```

### Access the App

Once both servers are running, open your browser and navigate to:

```arduino
http://localhost:5173
```

## How to Play 🏆

1. **Click "Start"** to begin the quiz.
2. **Select an answer**.
3. **Click "Next"** to proceed to the next question.
4. **Complete all questions** to see your final score.
5. **Try again** to beat your high score!
