"use client";
import React, { useEffect } from "react";
import { deleteTask } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-error btn-xs join-item"
      disabled={pending}
    >
      {pending ? "Please Wait..." : "delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      {/*The input field will initially display the value
      "id". Users can modify this value, and when the form is submitted,
      the updated value will be sent to the server. */}
      {/* type="hidden": Specifies the type of input field as "hidden". This means
      that the input field will not be visible to the user on the webpage. */}
      {/* In this case, the hidden input field is being used to include the id value
      in a form submission without displaying it to the user. This is commonly
      used for passing identifiers or other data that should not be modified by
      the user directly but still needs to be sent along with the form data. */}
      <SubmitBtn />
    </form>
  );
};

export default DeleteForm;
