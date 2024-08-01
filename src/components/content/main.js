"use client"
import { AppContext } from '@/app/context/appContext';
import React, { useContext, useEffect } from 'react'
import { AlertDialogDemo } from '../error/alert';
import { DialogDemo } from '../contList/contList';
import { EditText } from '../contEdit/contEdit';

function Main({response}) {
    const {getErrorFile, getListComponent, blobs, setBlobs, editText, setEditText} = useContext(AppContext);
    useEffect(()=>{
      setBlobs(response.blobs)
    },[setBlobs, response.blobs])
    return (
    <>
      {getErrorFile && (
        <AlertDialogDemo />
      )}
      {getListComponent && (
        <DialogDemo editText={editText} setEditText={setEditText}/>
      )}
      {editText && (
        <EditText editText={editText} setEditText={setEditText}/>
      )}
    </>
  )
}

export default Main
