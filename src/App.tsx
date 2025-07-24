import { NotificationsPopup } from "./components/notifications-popup/notifications-popup";
import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-neutral-600">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-accent-700 text-neutral-700 hover:bg-accent-300">
            Open/Close
          </Button>
        </PopoverTrigger>
        <PopoverContent>
         <NotificationsPopup/>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default App;
