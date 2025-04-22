import React from "react";
import { Form } from "react-router";
import FormRow from "./formRow";
interface PropsInterface {
    handleOpen: any
}
const ProjectForm:React.FC<PropsInterface> = ({handleOpen}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
      <Form method="post" encType="multipart/form-data">
        <FormRow
          type="text"
          name="title"
          className="w-full border text-[color:var(--text-color)] px-3 py-1.5 rounded-xl border-[grey]"
          placeHolder="Enter Project Title"
          defaultValue=""
          required={true}
        //   value="test"
    // onChange={}
        />
        <br />
        <FormRow
          type="text"
          name="description"
          className="w-full border text-[color:var(--text-color)] px-3 py-1.5 rounded-xl border-solid border-[grey]"
          placeHolder="Enter Project Description"
          defaultValue=""
          required={true}
        //   value="test"
        />
        <button
          type="submit"
          className="btn btn-nlock form-btn mt-4"
          onClick = {handleOpen}
          // disabled={isSubmitting}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default ProjectForm;


