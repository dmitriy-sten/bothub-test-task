import React from "react";
import { NotificationItem } from "./notification-item";
import { observer } from "mobx-react-lite";
import { useNotificationPopup } from "./context";

interface Props {}

export const NotificationsList: React.FC<Props> = observer(() => {
  const { notifications, selectedFilter } = useNotificationPopup();

  const filtered = notifications.filter((item) => {
    if (selectedFilter === "inbox") return !item.isReaded;
    if (selectedFilter === "read") return item.isReaded;
  })

  return (
    <div className="max-h-[500px] overflow-auto pr-2 scrollbar">
      {filtered.length === 0 ? (
        <div className="h-[200px]  w-full flex items-center justify-center">
          <h1 className="text-neutral-50">
              Empty list
          </h1>
        </div>
      ) : (
        filtered?.map((item) => <NotificationItem item={item} key={item.id} />)
      )}
    </div>
  );
});
