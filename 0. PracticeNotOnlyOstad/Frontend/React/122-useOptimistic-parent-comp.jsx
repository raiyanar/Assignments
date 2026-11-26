"use client";

import { useState } from "react";
import TaskList from "./TaskList";
import { saveTask } from "./actions";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  async function addTask(formData) {
    const newTaskText = formData.get("task");

    // Add an optimistic task with a pending state
    const tempTask = { id: Date.now(), text: newTaskText, pending: true };
    setTasks((prev) => [...prev, tempTask]);

    // Simulate a 3 seconds delay before marking the task as completed
    setTimeout(async () => {
      const savedTask = await saveTask(newTaskText);

      setTasks((prev) =>
        prev.map((task) =>
          task.id === tempTask.id
            ? { ...task, text: savedTask, pending: false }
            : task,
        ),
      );
    }, 3000);
  }

  return <TaskList tasks={tasks} addTask={addTask} />;
}
