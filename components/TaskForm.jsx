import React from "react";
import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      {/* https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations */}
      {/* Dynamic Action: In React JSX, the action attribute can be used to specify
      a dynamic value, typically a function, that will be invoked when the form
      is submitted. This allows you to handle form submissions programmatically
      within your React component. Event Handling: When the form is submitted,
      React will call the specified function (in this case, createTask) with an
      event object as its argument. You can then handle the form submission
      logic inside the function. */}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          // important. when call "content", it will get the input of the users
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          create task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
