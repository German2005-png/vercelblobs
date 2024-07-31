'use client'
import CardImg from "@/components/cardImg/cardImg";
import { AlertDestructive, AlertDialogDemo } from "@/components/error/alert";
import Image from "next/image";
import { useContext } from "react";
import { Toaster } from "sonner";
import { AppContext } from "./context/appContext";
import { DialogDemo } from "@/components/contList/contList";

export default function Home() {
  const {getErrorFile, setGetErrorFile, getErrorFileMs, setGetErrorFileMs, getListComponent, setGetListComponent} = useContext(AppContext);
  return (
    <main className="flex w-full h-screen justify-center items-center px-3">
      <CardImg getErrorFile={getErrorFile} setGetErrorFile={setGetErrorFile} getErrorFileMs={getErrorFileMs} setGetErrorFileMs={setGetErrorFileMs} getListComponent={getListComponent} setGetListComponent={setGetListComponent}/>
      {getErrorFile && (
        <AlertDialogDemo getErrorFile={getErrorFile} setGetErrorFile={setGetErrorFile} getErrorFileMs={getErrorFileMs} setGetErrorFileMs={setGetErrorFileMs} getListComponent={getListComponent} setGetListComponent={setGetListComponent}/>
      )}
      {getListComponent && (
        <DialogDemo />
      )}
    </main>
  );
}
