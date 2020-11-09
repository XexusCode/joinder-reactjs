import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import React from "react";
import { CommentObject } from "../../../../models/models";

interface CommentPageParams {
  handleAddComment: () => void;
  message: string;
  setMessage: (message: string) => void;
  loading: boolean;
  comments: Array<CommentObject>;
  color: string;
}

export const CommentPage = ({
  handleAddComment,
  comments,
  message,
  setMessage,
  loading,
  color,
}: CommentPageParams) => {
  return (
    <div className="">
      <div className="">
        <div className="  ">
          <h6>¿Que quieres decir?</h6>
          <CommentForm
            message={message}
            setMessage={setMessage}
            addComment={handleAddComment}
            loading={loading}
          />
        </div>
        <div className=" pt-3 bg-white">
          <CommentList color={color} loading={loading} comments={comments} />
        </div>
      </div>
    </div>
  );
};
