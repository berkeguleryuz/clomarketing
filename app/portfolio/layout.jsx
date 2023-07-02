import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <h1 className="orange__gradient">Our Works</h1>
        {children}
    </div>
  );
}

export default Layout;