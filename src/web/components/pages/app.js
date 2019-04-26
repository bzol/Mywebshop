import {Flex, Box} from '@rebass/grid';
import ProductWindow from '../organisms/ProductWindow/productwindow';
import {styled, React} from 'shared/shared_imports';
import {Sidebar} from '../../web_imports.js';
export const Div = styled.div`
  color: red;
`;

const App = () => {
  return (
    <Div>
      <Sidebar />
      <Flex>
        <Box width={10 / 10}>
          <ProductWindow />
        </Box>
      </Flex>
    </Div>
  );
};

export default App;
