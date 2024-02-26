import React from "react";
import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form action={editTask} className="max-w-sm p-12 border">
      <input type="hidden" name="id" value={id} />

      <input
        type="text"
        defaultValue={content}
        className="input input-bordered join-item w-full"
        name="content"
        required
      />
      {/* completed */}
      <div className="form-control my-4">
        <label className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary join-item">
        update task
      </button>
    </form>
  );
};

export default EditForm;
