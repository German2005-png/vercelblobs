import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import pencilIcon from "../../../public/svg/pencil.svg";

export function DialogDemo({getListComponent, setGetListComponent}) {
  return (
    <Dialog defaultOpen>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Edit files</DialogTitle>
          <DialogDescription>
            Make changes to your files here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3 w-full">
              <div className="w-14 h-14 bg-custom-gradient rounded-md objetic-cover"></div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center w-full justify-between">
                  <h1 className="text-2xl font-semibold">Logo Oblicua.png</h1>
                  <button>
                    <img src={pencilIcon.src} alt="edit name"/>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-custom-gradient text-white rounded-md px-3">images/png</span>
                    <span className="bg-custom-gradient text-white rounded-md px-3">5MB</span>
                    <span className="bg-custom-gradient text-white rounded-md px-3">31/7/2024</span>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3 w-full">
              <div className="w-14 h-14 bg-custom-gradient rounded-md objetic-cover"></div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center w-full justify-between">
                  <h1 className="text-2xl font-semibold">Logo Oblicua.png</h1>
                  <button>
                    <img src={pencilIcon.src} alt="edit name"/>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-custom-gradient text-white rounded-md px-3">images/png</span>
                    <span className="bg-custom-gradient text-white rounded-md px-3">5MB</span>
                    <span className="bg-custom-gradient text-white rounded-md px-3">31/7/2024</span>
                </div>
              </div>
            </li>
          </ul>
          <button className="bg-custom-gradient text-white p-2 rounded-md">Save change</button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
