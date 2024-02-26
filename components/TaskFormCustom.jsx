"use client";
import React, { useEffect } from "react";
import { createTaskCustom } from "@/utils/actions";
import toast from "react-hot-toast";

// useFormState is a Hook that allows you to update state based on the
// result of a form action.
// const [state, formAction] = useFormState(fn, initialState, permalink?);

// https://react.dev/reference/react-dom/hooks/useFormState
// IMPORTANT!!! read the doc in the link with examples

import { useFormStatus, useFormState } from "react-dom";
//The useFormStatus hook is a Next.js hook that provides a way to track the
//status of a form, such as whether it is valid, pending, or submitted.
//This information can be used to display different UI elements depending
//on the form's status, such as a loading spinner when the form is pending or a success message when the form is submitted.

//The useFormStatus hook takes two arguments:
//initialStatus: The initial status of the form.
//This can be one of the following: valid, pending, or submitted.

//onStatusChange: A callback function that is called whenever the form's status changes. This function is passed the new status of the form as its argument.

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please Wait..." : "Create Task"}
    </button>
  );
};

const initialState = { message: null };

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  // [state, formAction] are the comment syntax. state represent currents state. its dynamic.
  // The current state. During the first render, it will match the initialState you have passed.
  // After the action is invoked, it will match the value returned by the action.
  // A new action that you can pass as the action prop to your form component or formAction prop
  // to any button component within the form.
  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
      return;
    }
    if (state.message) {
      toast.success("task created");
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
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
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;
