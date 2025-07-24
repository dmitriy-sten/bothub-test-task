import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  Children,
  type ReactElement,
  type FC,
  isValidElement,
  cloneElement,
} from "react";
import { createPortal } from "react-dom";

interface PopupContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const PopoverContext = createContext<PopupContextType | null>(null);

const usePopupContext = (): PopupContextType => {
  const ctx = useContext(PopoverContext);

  if (!ctx) throw new Error("This Element shuold be  wrapped by Popover");

  return ctx;
};

type Props = {
  initialOpen?: boolean;
  children: ReactNode;
};

export const Popover: FC<Props> = ({ children, initialOpen = true }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const items = Children.toArray(children) as ReactElement[];

  const trigger = items.find((el) => el.type === PopoverTrigger);
  const content = items.find((el) => el.type === PopoverContent);

  return (
    <PopoverContext.Provider value={{ open, close, isOpen }}>
      {trigger}
      {createPortal(content, document.body)}
    </PopoverContext.Provider>
  );
};

export const Slot: FC<SlotProps> = ({ children, ...slotProps }) => {
  const childArray = Children.toArray(children);

  const child = childArray[0];
  if (!isValidElement(child)) {
    return null;
  }

  return cloneElement(child, {
    className: [slotProps.className, child.props.className]
      .filter(Boolean)
      .join(" "),
    ...slotProps,
  });
};

export const PopoverTrigger = ({
  children,
  asChild,
}: {
  children: ReactElement;
  asChild?: boolean;
}) => {
  const { isOpen, close, open } = usePopupContext();

  const Comp = asChild ? Slot : "button";

  const handleOpenChange = () => {
    if (isOpen) return close();
    else open();
  };

  return <Comp onClick={handleOpenChange}>{children}</Comp>;
};

export const PopoverContent = ({ children }: { children: ReactNode }) => {
  const { isOpen } = usePopupContext();

  return (
    isOpen && (
      <div className="flex fixed max-w-[400px] w-full bottom-1 right-10">{children}</div>
    )
  );
};

interface SlotProps {
  children: ReactElement;
}
