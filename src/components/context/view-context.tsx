import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ViewContextType {
  isViewMode: boolean;
  setIsViewMode: Dispatch<SetStateAction<boolean>>;
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

export const ViewContext = createContext<ViewContextType | undefined>(
  undefined
);

interface ViewProviderProps {
  children: ReactNode;
}

export const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {
  const [isViewMode, setIsViewMode] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <ViewContext.Provider
      value={{ isViewMode, setIsViewMode, isEditMode, setIsEditMode }}
    >
      {children}
    </ViewContext.Provider>
  );
};
