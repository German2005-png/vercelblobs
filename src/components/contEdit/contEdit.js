import { AppContext } from "@/app/context/appContext"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useContext, useState } from "react"

export function EditText() {
    const {editText, setEditText, setBlobs, blobs} = useContext(AppContext);
    const [pathname, setPathname] = useState(editText);
    const [sending, setSending] = useState(false);
    function handleSubmit(e){
      e.preventDefault();
      setSending(true);
      console.log(editText);
      let changedBlob = blobs.find(a => a.pathname == editText)
      setBlobs([...blobs.filter(blob => blob !== changedBlob), {...changedBlob, pathname:pathname}])
      setEditText();
      setSending(false)
    }
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Pathname</DialogTitle>
          <DialogDescription>
            Make changes to your file here. Click save when you&lsquore done.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="font-semibold">Change Pathname</label>
          <input className="p-2 outiline-none border-solid border border-slate-600 rounded-md" type="text" placeholder="Change Pathname" onChange={(e)=> setPathname(e.target.value.trimStart())}/>
          <div className="flex items-center gap-3 justify-end">
          <button className="flex items-center bg-slate-600 text-white p-2 rounded-md" type="button" onClick={()=> {setEditText()}}>Close</button>
          <button className="flex items-center bg-custom-gradient text-white p-2 rounded-md" type="submit" disabled={sending}>Save changes</button>
          </div>
        </form>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
