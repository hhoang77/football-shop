import { axiosConfig } from "../axiosConfig";

export const createBlog = async (data) => {
  return await axiosConfig({
    method: "post",
    url: "blog/create",
    data,
  });
};

export const getAllBlog = async () => {
  return await axiosConfig({
    method: "get",
    url: "/blog",
  });
};

export const updateBlog = async (id, data) => {
  return await axiosConfig({
    method: "put",
    url: `blog/update?id=${id}`,
    data,
  });
};

export const deleteBlog = async (id) => {
  return await axiosConfig({
    method: "delete",
    url: `blog/delete?id=${id}`,
  });
};
