'use client'
import React, { useState } from 'react';
import uploadIcon from "../../../public/svg/upload.svg";
import loadingIcon from "../../../public/svg/loading.svg";
import listIcon from "../../../public/svg/list.svg";
import Image from 'next/image';
import { toast } from 'sonner';
function CardImg({getErrorFile, setGetErrorFile, getErrorFileMs, setGetErrorFileMs, getListComponent, setGetListComponent}) {
    const [onLoading, setonLoading] = useState(false);
    const [getFileBlob, setgetFileBlob] = useState();
    function handleSubmit(e){
        e.preventDefault();
        setonLoading(true);
        console.log("Hola");
        setonLoading(false);
    }
    function chosseImage(e){
        const picture = e.target.files[0];
        console.log(picture);
        if(picture){
            if(!picture.type.startsWith('image/')) {
                setGetErrorFile(true)
                console.log("Error");
                setGetErrorFileMs({message: "This file is not an image."})
                return;
            }
            if(picture.size > 5 * 1024 *1024) {
                setGetErrorFile(true)
                console.log("Error");
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
            <input className='hidden' type='file' id='inputFileID' onChange={chosseImage}/>
            <button className='bg-custom-gradient text-center flex items-center justify-center text-white p-2 w-full rounded-md'>
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
