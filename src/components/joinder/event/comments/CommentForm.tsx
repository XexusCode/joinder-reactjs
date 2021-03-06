import React from "react";

interface CommentFormParams {
  addComment: () => void;
  message: string;
  setMessage: (message: string) => void;
  loading: boolean;
}

export const CommentForm = ({
  addComment,
  message,
  setMessage,
  loading,
}: CommentFormParams): JSX.Element => {
  return (
    <React.Fragment>
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          addComment();
        }}
      >
        <div className="form-group">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            aria-label="Comment Area"
            className="form-control"
            placeholder="🤬 Tu comentario!"
            name="message"
          />
        </div>

        <div className="form-group">
          <button disabled={loading} className="btn btn-primary">
            Comentar ➤
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};
