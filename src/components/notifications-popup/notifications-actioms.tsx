import React from "react";
import { Button } from "../ui/button";
import { LinkIcon } from "../../assets/linkIcon";
import { useNotificationPopup } from "./context";
import { cn } from "../../lib/utils";
import { ListIcon } from "../../assets/listIcon";

interface Props {
  className?: string;
}

export const NotificationsActioms: React.FC<Props> = ({ className }) => {
  const { setNotifications, selectedFilter } = useNotificationPopup();

  const handleReadAll = () => {
    setNotifications((prev) => {
      return prev.map((item) => ({ ...item, isReaded: true }));
    });
  };

  const handleDeleteAll = () => {
    setNotifications((prev) => {
      return prev.filter((item) => !item.isReaded);
    });
  };

  return (
    <>
      {selectedFilter == "inbox" && (
        <Button
          onClick={handleReadAll}
          className={cn("text-accent-700 gap-1", className)}
        >
          <LinkIcon />
          Mark all as read
        </Button>
      )}
      {selectedFilter == "read" && (
        <Button
          onClick={handleDeleteAll}
          className={cn("text-neutral-50 gap-1", className)}
        >
          <ListIcon />
          Clear all
        </Button>
      )}
    </>
  );
};
