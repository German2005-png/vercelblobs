'use client'
import React, { useContext, useRef, useState } from 'react';
import { PutBlobResult } from '@vercel/blob';
import uploadIcon from "../../../public/svg/upload.svg";
import loadingIcon from "../../../public/svg/loading.svg";
import listIcon from "../../../public/svg/list.svg";
import Image from 'next/image';
import { toast } from 'sonner';
import { AppContext } from '@/app/context/appContext';
function CardImg() {
    const {getErrorFile, setGetErrorFile, getErrorFileMs, setGetErrorFileMs, getListComponent, setGetListComponent, setBlobs, blobs} = useContext(AppContext);
    const [onLoading, setonLoading] = useState(false);
    const [getFileBlob, setgetFileBlob] = useState();
    const inputFileRef = useRef(null);
    async function handleSubmit(e){
        e.preventDefault();
        setonLoading(true);
        try {
            if(!getFileBlob) {
                setGetErrorFile(true);
                setGetErrorFileMs({message: "There's no image."})
                return;
            }
            const file = inputFileRef.current.files[0];
            const response = await fetch(`/api/blobStorage?filename=${file.name}`,{
                method: 'POST',
                body: file,
            }
            )
            const newBlob = (await response.json());
            setBlobs([...blobs, newBlob.message])
            setgetFileBlob()
        } catch (error) {
            console.error("Error",error);
        }
        setonLoading(false);
    }
    function chosseImage(e){
        const picture = e.target.files[0];
        if(picture){
            if(!picture.type.startsWith('image/')) {
                setGetErrorFile(true)
                setGetErrorFileMs({message: "This file is not an image."})
                return;
            }
            if(picture.size > 5 * 1024 *1024) {
                setGetErrorFile(true)
                setGetErrorFileMs({message: "This file is over 5MB"})
                return;
            }
            setgetFileBlob(new Blob([picture], { type: picture.type }));
        }
    }
  return (
    <div className='p-3 rounded-md w-full max-w-md bg-white'>
      <div className='flex items-center justify-between w-full py-3'>
        <h1 className='font-semibold'>Blob Vercel</h1>
        <button onClick={()=> setGetListComponent(!getListComponent)}>
            <Image src={listIcon.src} width={24} height={24} alt="listIcon"/>
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-center items-center flex-col w-full h-full min-h-64 object-cover border-dashed border border-slate-600 cursor-pointer' onClick={()=> document.getElementById("inputFileID").click()}>
            {!getFileBlob ? (
                <>
                <Image src={uploadIcon.src} width={100} height={100} alt='uploadIcon'/>
                <p className=''>Upload File</p>
                <p>Max file size: 5MB</p>
                </>
            ) : (
                <Image className='w-full h-64 object-cover min-h-64' width={100} height={100} src={URL.createObjectURL(getFileBlob)} alt='image'/>
            )}
        </div>
        <form onSubmit={handleSubmit}>
            <input className='hidden' type='file' id='inputFileID' onChange={chosseImage} ref={inputFileRef}/>
            <button className='bg-custom-gradient text-center flex items-center justify-center text-white p-2 w-full rounded-md' disabled={onLoading}>
                {onLoading ? (
                    <Image src={loadingIcon.src} width={24} height={24} alt='loading'/>
                ) : "Confirm upload"}
            </button>
        </form>
      </div>
    </div>
  )
}

export default CardImg
