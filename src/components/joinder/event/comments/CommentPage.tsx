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
}

export const CommentPage = ({
  handleAddComment,
  comments,
  message,
  setMessage,
  loading,
}: CommentPageParams): JSX.Element => {
  return (
    <div>
      <div>
        <div>
          <h4>¿Que quieres decir?</h4>
          <CommentForm
            message={message}
            setMessage={setMessage}
            addComment={handleAddComment}
            loading={loading}
          />
        </div>
        <div className=" pt-3 bg-white">
          <CommentList loading={loading} comments={comments} />
        </div>
      </div>
    </div>
  );
};
