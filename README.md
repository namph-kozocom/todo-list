# Todo App

A simple and elegant Todo application built with React, TypeScript, and Zustand for state management. This application allows users to add, edit, complete, and delete tasks efficiently.
![image](https://github.com/user-attachments/assets/d5fad915-c479-424f-96ff-b91dca03f3a9)


## Features

- Add new tasks to your list.
- Mark tasks as completed.
- Edit existing tasks.
- Remove tasks from the list.
- Filter tasks by status: All, Active, and Completed.
- Persistent state management using Zustand.

## Tech Stack

- **Frontend:** React, TypeScript
- **State Management:** Zustand
- **Icons:** Lucide-react
- **Styling:** Tailwind CSS

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

3. Start the development server:
   ```sh
   yarn start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
todo-list
├── package.json
├── public/
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── pages/
│   │   └── Todo/
│   │       ├── components/
│   │       │   ├── AddTodo.tsx
│   │       │   ├── TodoItem.tsx
│   │       │   ├── TodoList.tsx
│   │       │   └── TodoTab.tsx
│   │       └── index.tsx
│   ├── stores/
│   │   └── todoStore.ts
│   └── types/
│       ├── tab.type.ts
│       └── todo.type.ts
├── tsconfig.json
└── yarn.lock
```

## Usage

1. **Adding a task:** Type your task in the input field and click the "Add" button.
2. **Marking as completed:** Click the checkbox next to a task to mark it as completed.
3. **Editing a task:** Click the edit icon, modify the text, and save.
4. **Deleting a task:** Click the trash icon to remove a task.
5. **Filtering tasks:** Click the tabs (All, Active, Completed) to filter your list.

## Future Improvements

- Implement local storage to persist tasks.
- Add due dates and reminders for tasks.
- Improve UI/UX with animations.
- Add drag-and-drop functionality for task reordering.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
