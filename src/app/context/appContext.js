'use client'
import React, { createContext, useState } from 'react'
export const AppContext = createContext();
function AppContextPage({children}) {
    const [getErrorFile, setGetErrorFile] = useState(false);
    const [getListComponent, setGetListComponent] = useState(false);
    const [getErrorFileMs, setGetErrorFileMs] = useState({message: ""});
  return (
    <div>
      <AppContext.Provider value={{getErrorFile, setGetErrorFile, getErrorFileMs, setGetErrorFileMs, getListComponent, setGetListComponent}}>{children}</AppContext.Provider>
    </div>
  )
}

export default AppContextPage
