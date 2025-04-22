import React, { useCallback, useState } from "react";
import { Form } from "react-router";
import ProjectForm from "./ProjectForm";
interface Props {
  title: string;
  reference?: string;
}

const Modal: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => {setIsOpen(!isOpen)}, [isOpen])
  return (
    // <>
    //   <button
    //     className="px-2 py-2 rounded-lg bg-accent text-grey"
    //     onClick={() => {
    //       setIsOpen(!isOpen);
    //     }}
    //   >
    //     Open {props.title} Modal
    //   </button>
    //   <div className={isOpen ? "margin-auto px-10 py-10 bg-white w-auto rounded-xl inset-shadow-regal-blue" : "hidden"}>
    //     <ProjectForm />
    //   </div>
    // </>
    <>
      <button
        className="px-4 py-2 rounded-lg bg-accent text-grey hover:bg-accent-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.title}
      </button>

      <div
        className={`fixed inset-0 z-50 flex items-center p-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black opacity-30 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl p-6 mx-auto overflow-y-auto max-h-screen">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ProjectForm handleOpen = {handleOpen}/>
        </div>
      </div>
    </>
  );
};

export default Modal;
