'use client'
import React, { createContext, useState } from 'react'
export const AppContext = createContext();
function AppContextPage({children}) {
    const [getErrorFile, setGetErrorFile] = useState(false);
    const [editText, setEditText] = useState(false);
    const [getListComponent, setGetListComponent] = useState(false);
    const [getErrorFileMs, setGetErrorFileMs] = useState({message: ""});
    const [blobs, setBlobs] = useState([])
  return (
    <div>
      <AppContext.Provider value={{getErrorFile, setGetErrorFile, getErrorFileMs, setGetErrorFileMs, getListComponent, setGetListComponent, editText, setEditText, blobs, setBlobs}}>{children}</AppContext.Provider>
    </div>
  )
}

export default AppContextPage
