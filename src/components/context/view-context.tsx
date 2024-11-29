import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type EditModes = "view" | "select" | "move";

interface ViewContextType {
  freezeOrbitControl: boolean;
  setFreezeOrbitControl: Dispatch<SetStateAction<boolean>>;
  componentGuuid: string | null;
  setComponentGuuid: Dispatch<SetStateAction<string | null>>;
  currEditMode: EditModes;
  setCurrEditMode: Dispatch<SetStateAction<EditModes>>;
  isPresentationMode: boolean;
  setIsPresentationMode: Dispatch<SetStateAction<boolean>>;
}

export const ViewContext = createContext<ViewContextType | undefined>(
  undefined
);

interface ViewProviderProps {
  children: ReactNode;
}

export const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {
  const [freezeOrbitControl, setFreezeOrbitControl] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [currEditMode, setCurrEditMode] = useState<EditModes>("view");
  const [componentGuuid, setComponentGuuid] = useState<string | null>(null);

  return (
    <ViewContext.Provider
      value={{
        freezeOrbitControl,
        setFreezeOrbitControl,
        componentGuuid,
        setComponentGuuid,
        currEditMode,
        setCurrEditMode,
        isPresentationMode,
        setIsPresentationMode
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
