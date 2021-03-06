import React from "react";
import Comment from "./Comment";
import { CommentObject } from "../../../../models/models";

interface CommentListParams {
  comments: Array<CommentObject>;
  loading: boolean;
}

export const CommentList = ({
  comments,
  loading,
}: CommentListParams): JSX.Element => {
  return (
    <div>
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{comments.length}</span>{" "}
        Comentario
        {comments.length > 0 ? "s" : ""}
      </h5>

      {comments.length === 0 && !loading ? (
        <div className="alert text-center alert-info">
          Se el primero en poner un comentario!
        </div>
      ) : null}
      <span>
        {comments.map((comment: CommentObject) => (
          <Comment key={comment.id} comment={comment} />
        ))}{" "}
      </span>
    </div>
  );
};
