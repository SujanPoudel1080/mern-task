import server from "../api/server";
import { toast } from "react-toastify";
import { ActionFunction, LoaderFunction, redirect } from "react-router";

export const projectPostAction: ActionFunction = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log('data are', data)
    try {
        await server.post("/projects", data);
        toast.success("project created successfully");
        return redirect("/");
    } catch (error: any) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};
export const projectLoader: LoaderFunction = async () => {
    try {
        const { data } = await server.get("/projects");
        console.log('loader data', data)
        
        return { data };
    } catch (error: any) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};