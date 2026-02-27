import React from "react";

type StatusMessageProps = {
  isLoggedIn: boolean;
};

const StatusMessage: React.FC<StatusMessageProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, user! 🎉</h2>
      ) : (
        <h2>Please log in to continue 🔒</h2>
      )}
      </div>
  );
};

export default StatusMessage;
