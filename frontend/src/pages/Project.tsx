import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useRevalidator } from "react-router-dom";
import { toast } from "react-toastify";
import server from "../api/server";
import { Modal } from "../components";
import ProjectCard from "../components/ProjectCard";
import { ProjectInterface } from "../types/index";

const Project: React.FC = () => {
  const { revalidate } = useRevalidator();
  const {data} = useLoaderData();
  useEffect(() => {revalidate()}, [data])
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
        <Modal title="Add Project" />
      </div>

      {data?.length ? (
        <div className="grid gap-2 md:grid-cols-8 lg:grid-cols-8">
          {data.map((item: any) => (
            <div className="col-span-4">
              <ProjectCard
                key={item._id} // Assuming _id exists and is unique
                title={item.title}
                description={item.description}
                createdAt={item.createdAt}
                id={item._id}
                // onDelete={() => deleteData(item._id, item.title)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No projects added yet</p>
        </div>
      )}
    </div>
  );
};

export default Project;
