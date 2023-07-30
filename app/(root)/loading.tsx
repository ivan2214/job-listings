import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex min-h-full w-full items-center justify-center">
      <div className="h-20 w-20 animate-spin bg-gray-700"></div>
    </div>
  );
};

export default Loading;
