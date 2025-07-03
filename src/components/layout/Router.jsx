import React, { useState } from 'react';

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/login');
  
  const navigate = (path) => {
    setCurrentPath(path);
  };
  
  return (
    <div className="router-context">
      {React.Children.map(children, child => 
        React.cloneElement(child, { currentPath, navigate })
      )}
    </div>
  );
};

export default Router;