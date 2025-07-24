import React from "react";
import { Button } from "../ui/button";
import { LinkICon } from "../../assets/linkIcon";
import { useNotificationPopup } from "./context";
import { cn } from "../../lib/utils";

interface Props {
  className?: string;
}

export const NotificationsActioms: React.FC<Props> = ({ className }) => {
  const { setNotifications } = useNotificationPopup();

  const handleReadAll = () => {
    setNotifications((prev) => {
      return prev.map((item) => ({ ...item, isReaded: true }));
    });
  };

  return (
    <Button
      onClick={handleReadAll}
      className={cn("text-accent-700 gap-1", className)}
    >
      <LinkICon />
      Mark all as read
    </Button>
  );
};
