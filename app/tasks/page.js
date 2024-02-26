import React from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import TaskFormCustom from "@/components/TaskFormCustom";
export const dynamic = "force-dynamic";
//This page was static(automatically decided bt NextJS).
//Sometimes it might cause glitch as user inputs are not updated immediately
//and correctly due to the nature of a static page. This line of code is to
//change to page from "static" to "dynamic" so the user inputs are in sync.

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default TasksPage;
