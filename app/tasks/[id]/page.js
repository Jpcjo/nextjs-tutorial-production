import React from "react";
import { getTask } from "@/utils/actions";
import EditForm from "@/components/EditForm";

const singleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <>
      <EditForm task={task} />
    </>
  );
};

export default singleTaskPage;
