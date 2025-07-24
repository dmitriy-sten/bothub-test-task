import React from "react";
import { NotificationItem } from "./notification-item";
import { observer } from "mobx-react-lite";
import { useNotificationPopup } from "./context";

interface Props {
  className?: string;
}

export const NotificationsList: React.FC<Props> = observer(({ className }) => {
  const { notifications, selectedFilter } = useNotificationPopup();

  const filtered = notifications.filter((item) => {
    if (selectedFilter === "inbox") return !item.isReaded;
    if (selectedFilter === "read") return item.isReaded;
  });

  return (
    <div className="max-h-[500px] overflow-auto pr-2 scrollbar">
      {filtered?.map((item) => (
        <NotificationItem item={item} key={item.id} />
      ))}
    </div>
  );
});
