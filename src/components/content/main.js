"use client"
import { AppContext } from '@/app/context/appContext';
import React, { useContext, useEffect } from 'react'
import { AlertDialogDemo } from '../error/alert';
import { DialogDemo } from '../contList/contList';

function Main({response}) {
    const {getErrorFile, getListComponent, blobs, setBlobs} = useContext(AppContext);
    useEffect(()=>{
      setBlobs(response.blobs)
    },[response.blobs])
    return (
    <>
      {getErrorFile && (
        <AlertDialogDemo />
      )}
      {getListComponent && (
        <DialogDemo />
      )}
    </>
  )
}

export default Main
