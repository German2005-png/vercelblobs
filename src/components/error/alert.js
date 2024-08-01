import { useContext, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AppContext } from "@/app/context/appContext";

export function AlertDialogDemo() {
  const {getErrorFile, setGetErrorFile, getErrorFileMs, setGetErrorFileMs} = useContext(AppContext);
  const [open, setOpen] = useState(true);

  const handleContinue = () => {
    window.location.href = "/"
    setGetErrorFile(!getErrorFile);
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Error File!</AlertDialogTitle>
          <AlertDialogDescription>
            {getErrorFileMs.message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
