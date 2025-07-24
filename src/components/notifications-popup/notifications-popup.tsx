import React from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface Props {
  className?: string;
}

export const NotificationsPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("bg-neutral-800 rounded-xl p-6 flex-1", className)}>
      <div className="flex justify-between mb-4">
        <h1 className="text-white">Notifications</h1>
      </div>

      <div className=" flex border border-neutral-500 p-1  ">
        <Button className="flex-1">Inbox</Button>
        <Button className="flex-1">Read</Button>
      </div>
    </div>
  );
};
