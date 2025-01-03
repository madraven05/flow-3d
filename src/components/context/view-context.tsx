import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type EditModes = "view" | "select" | "move";
export type FindNodePosMetadata = {
  componentId: string,
  searching: boolean,
}

interface ViewContextType {
  freezeOrbitControl: boolean;
  setFreezeOrbitControl: Dispatch<SetStateAction<boolean>>;
  componentGuuid: string | null;
  setComponentGuuid: Dispatch<SetStateAction<string | null>>;
  currEditMode: EditModes;
  setCurrEditMode: Dispatch<SetStateAction<EditModes>>;
  isPresentationMode: boolean;
  setIsPresentationMode: Dispatch<SetStateAction<boolean>>;
  findNodePos: FindNodePosMetadata | null;
  setFindNodePos: Dispatch<SetStateAction<FindNodePosMetadata | null>>;
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
  const [findNodePos, setFindNodePos] = useState<FindNodePosMetadata | null>(null);
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
        setIsPresentationMode,
        findNodePos,
        setFindNodePos
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
