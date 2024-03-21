import { GenerateContext } from "../contexts/GenerateContext";
import DrawerContainer from "../components/organisms/Generate/DrawerContainer";

const Generate = () => {
  return (
    <GenerateContext.Provider value={{}}>
      <DrawerContainer />
    </GenerateContext.Provider>
  );
};

export default Generate;
