"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import pencilIcon from "../../../public/svg/pencil.svg";
import trashIcon from "../../../public/svg/trash.svg";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import { useContext, useState } from "react";
import { AppContext } from "@/app/context/appContext";

export function DialogDemo({ editText, setEditText }) {
  const [isLoading, setIsLoading] = useState(false);
  const {blobs, setBlobs} = useContext(AppContext);
  const [isDeleting, setIsDeleting] = useState(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 500);
  async function deleteElementBlob(url, e) {
    setIsDeleting(true)
    try {
        const response = await fetch("/api/deleteBlobs", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ element: url })
        })
        const result = await response.json();
        setBlobs(blobs.filter(a => a.url !== result.url));
        setIsDeleting(false);
    } catch (error) {
        console.error(error);
    }
  }
  function downloadImage(url, filename) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      })
      .catch((error) => console.error("Error al descargar la imagen:", error));
  }
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Edit files</DialogTitle>
          <DialogDescription>
            Make changes to your files here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <ul className="flex flex-col gap-3 h-full max-h-52 overflow-auto">
            {isLoading ? (
              <>
                {blobs?.map((Element, index) => (
                  <li className="flex items-center gap-3 w-full" key={index}>
                    <div className="w-14 h-14 bg-custom-gradient rounded-md objetic-cover">
                      <Image
                        className="w-full h-full objetic-cover"
                        src={Element.url}
                        width={14}
                        height={14}
                        alt="image"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center w-full justify-between">
                        <button type="button" id="element-listID" className="text-2xl font-semibold text-ellipsis whitespace-pre overflow-hidden max-w-sm" onClick={() => downloadImage(Element.url, Element.pathname)}>
                          {Element.pathname}
                        </button>
                        <div className="flex items-center gap-3">
                          <button type="button" id="btnDeleteID" disabled={isDeleting} onClick={async (e) => await deleteElementBlob(Element.url, e)
                            }>
                            <Image src={trashIcon.src} width={24} height={24} alt="trash"/>
                          </button>
                          <button type="button" onClick={()=> setEditText(Element.pathname)}>
                            <Image src={pencilIcon.src} width={24} height={24} alt="edit name"/>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="bg-custom-gradient text-white rounded-md px-3">image</span>
                      </div>
                    </div>
                  </li>
                ))}
              </>
            ) : (
              <>
                <li className="flex items-center gap-3 w-full">
                  <Skeleton className="w-14 h-14 bg-custom-gradient rounded-md objetic-cover"></Skeleton>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-center w-full justify-between">
                      <Skeleton className="h-7 w-[250px] bg-slate-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-4 w-[150px] bg-slate-400" />
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-3 w-full">
                  <Skeleton className="w-14 h-14 bg-custom-gradient rounded-md objetic-cover"></Skeleton>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-center w-full justify-between">
                      <Skeleton className="h-7 w-[250px] bg-slate-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-3 w-[150px] bg-slate-400" />
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-3 w-full">
                  <Skeleton className="w-14 h-14 bg-custom-gradient rounded-md objetic-cover"></Skeleton>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex items-center w-full justify-between">
                      <Skeleton className="h-7 w-[250px] bg-slate-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-3 w-[150px] bg-slate-400" />
                    </div>
                  </div>
                </li>
              </>
            )}
          </ul>
          {/* <button className="bg-custom-gradient text-white p-2 rounded-md">
            Save change
          </button> */}
        </form>
      </DialogContent>
    </Dialog>
  );
}
