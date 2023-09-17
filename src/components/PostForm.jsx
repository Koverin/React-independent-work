import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (evt) => {
    evt.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={(evt) => setPost({ ...post, body: evt.target.value })}
        type="text"
        placeholder="Название поста"
      />
      {/* Неуправляемый компонент */}
      <MyInput
        value={post.body}
        onChange={(evt) => setPost({ ...post, body: evt.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
