import { useAppSelector } from "./use-app-dispatch";

export const useFlow3D = () => {
  const nodes = useAppSelector((state) => state.nodes);
  const scene = useAppSelector((state) => state.scene);
  const edges = useAppSelector((state) => state.edges);
  return {nodes, scene, edges}
};
