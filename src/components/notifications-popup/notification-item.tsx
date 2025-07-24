import React from "react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Notification } from "../../assets/notification";
import type { INotificationItem } from "../../store/constants";
import { formatDistance } from "date-fns";
import { observer } from "mobx-react-lite";

interface Props {
  className?: string;
  item: INotificationItem;
}

export const NotificationItem: React.FC<Props> = observer(
  ({ className, item }) => {
    const formatedDate = formatDistance(item.date, new Date(), {
      addSuffix: true,
    });

    return (
      <div
        className={cn(
          "flex flex-col pb-4 mb-2 border-b border-neutral-500",
          className
        )}
      >
        <img src={"/" + item.image} className="object-contain" alt="" />
        <div className="py-3 flex items-start gap-2">
          <Notification className="text-neutral-50" />
          <div className="flex flex-col flex-1">
            <h2 className="text-neutral-0 mb-1 font-light ">{item.title}</h2>
            <p className="text-neutral-100 font-light mb-2 line-clamp-3">
              {item.description}
            </p>

            <p className="text-neutral-50/30 font-light">{formatedDate}</p>
          </div>
        </div>
        <Button className="flex-1 bg-neutral-500 text-neutral-0">
          Upgrade
        </Button>
      </div>
    );
  }
);
