import React, { useState } from "react";

const CommentPage = () => {
  const [loading] = useState(false);

  const loadingSpin = loading ? "App-logo Spin" : "App-logo";

  return (
    <>
      <div className="App container bg-light shadow">
        <header className="App-header">
          <img
            src="https://static1.abc.es/media/tecnologia/2018/09/25/google-chrome-0-kCD--620x349@abc.jpg"
            className={loadingSpin}
            alt="logo"
          />
          <h1 className="App-title">
            React Comments
            <span className="px-2" role="img" aria-label="Chat">
              💬
            </span>
          </h1>
        </header>

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Say something about React</h6>
            {/* Comment Form Component */}
          </div>
          <div className="col-8  pt-3 bg-white">
            {/* Comment List Component */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentPage;
