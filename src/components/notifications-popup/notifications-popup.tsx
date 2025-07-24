import React from "react";
import { cn } from "../../lib/utils";
import { PopoverClose } from "../ui/popover";

import { X } from "../../assets/x";
import { observer } from "mobx-react-lite";
import { NotificationsList } from "./notifications-list";
import { NotificationsFilters } from "./notifications-filters";
import { NotificationsPopupWrapper } from "./context";
import { NotificationsActioms } from "./notifications-actioms";
import { MOCKS } from "../../store/constants";

interface Props {
  className?: string;
}

export const NotificationsPopup: React.FC<Props> = observer(({ className }) => {
  return (
    <NotificationsPopupWrapper items={MOCKS}>
      <div className={cn("bg-neutral-800 rounded-xl p-6 flex-1", className)}>
        <div className="flex justify-between mb-4">
          <h1 className="text-neutral-0">Notifications</h1>
          <PopoverClose>
            <X className="cursor-pointer text-neutral-100" />
          </PopoverClose>
        </div>
        <NotificationsFilters />
        <div className="border-b border-neutral-500 mb-4" />
        <NotificationsList />
        <div className="flex justify-center items-center">
          <NotificationsActioms />
        </div>
      </div>
    </NotificationsPopupWrapper>
  );
});
