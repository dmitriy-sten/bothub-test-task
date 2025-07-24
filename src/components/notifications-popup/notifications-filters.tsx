import React from "react";
import { Button } from "../ui/button";
import { observer } from "mobx-react-lite";
import { useNotificationPopup } from "./context";
import { cn } from "../../lib/utils";

interface Props {}

export const NotificationsFilters: React.FC<Props> = observer(() => {
  const { setSelectedFilters, notifications, selectedFilter } = useNotificationPopup();

  const inboxItemsCount = notifications.filter((item) => !item.isReaded).length;
  const readItemsCount = notifications.filter((item) => item.isReaded).length;

  return (
    <div className=" flex border border-neutral-500 p-1  gap-1 rounded-lg mb-4">
      <Button
        onClick={() => setSelectedFilters("inbox")}
        className={cn(
          "flex-1 bg-accent-500 text-xs",
          selectedFilter === "inbox"
            ? "bg-accent-500"
            : "bg-transparent text-neutral-100"
        )}
      >
        Inbox ({inboxItemsCount})
      </Button>
      <Button
        onClick={() => setSelectedFilters("read")}
        className={cn(
          "flex-1 text-xs",
          selectedFilter === "read"
            ? "bg-accent-500"
            : "bg-transparent text-neutral-100"
        )}
      >
        Read ({readItemsCount})
      </Button>
    </div>
  );
});
