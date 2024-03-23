import { GenerateContext } from "../contexts/GenerateContext";
import DrawerContainer from "../components/organisms/Generate/DrawerContainer";
import GenerateContent from "../components/organisms/Generate/GenerateContent";
import WithMarginTop from "../components/molecules/WithMarginTop";

const Generate = () => {
  return (
    <GenerateContext.Provider value={{}}>
      <DrawerContainer />
      <WithMarginTop>
        <GenerateContent />
      </WithMarginTop>
    </GenerateContext.Provider>
  );
};

export default Generate;
