import React from "react";

const Spier = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-[1000] bg-black opacity-80">
        <div className="size-15 animate-spin border-x-2 border-t-2 border-primary-color rounded-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
      </div>
    )
  );
};

export default Spier;
