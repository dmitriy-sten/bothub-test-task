import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { type INotificationItem } from "./../../store/constants";

type Filters = "inbox" | "read";

interface NotificationPopupContextType {
  selectedFilter: Filters;
  setSelectedFilters: React.Dispatch<React.SetStateAction<Filters>>;

  notifications: INotificationItem[];
  setNotifications: React.Dispatch<React.SetStateAction<INotificationItem[]>>;
}

const NotificationPopupContext =
  createContext<NotificationPopupContextType | null>(null);

export const useNotificationPopup = (): NotificationPopupContextType => {
  const ctx = useContext(NotificationPopupContext);

  if (!ctx)
    throw new Error(
      "This Element shuold be  wrapped by NotificationsPopupWrapper"
    );

  return ctx;
};

interface Props {
  className?: string;
  children: ReactNode;
  items: INotificationItem[];
}

export const NotificationsPopupWrapper: React.FC<Props> = ({
  children,
  items,
}) => {
  const [selectedFilter, setSelectedFilters] = useState<Filters>("inbox");
  const [notifications, setNotifications] =
    useState<INotificationItem[]>(items);

  return (
    <NotificationPopupContext.Provider
      value={{ selectedFilter, setSelectedFilters, notifications, setNotifications }}
    >
      {children}
    </NotificationPopupContext.Provider>
  );
};
