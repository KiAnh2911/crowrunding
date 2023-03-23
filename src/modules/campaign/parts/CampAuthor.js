import React from "react";

const CampAuthor = ({
  url = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  author = "Mahfuzul Nabil",
}) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="object-cover w-8 h-8 rounded-full">
        <img
          src={url}
          alt={author}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <p className="text-text3">
        by <span className="font-semibold text-text2">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
