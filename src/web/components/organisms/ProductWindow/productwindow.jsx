import {gql, React} from 'shared/shared_imports';
import ProductBox from 'web/components/molecules/ProductBox/productbox';
import {Flex, Box} from '@rebass/grid';
import {DefaultDiv} from './productwindow_style';
import {useQuery} from 'react-apollo-hooks';
const GET_PRODUCTS = gql`
  query {
    allProducts {
      price
      image
    }
  }
`;

const ProductWindow = props => {
  const {
    data: {allProducts},
    loading,
    error
  } = useQuery(GET_PRODUCTS, {suspend: false});

  if (loading) return <h1>loading</h1>;
  else if (error) return <h1>error</h1>;
  else return <DefaultDiv>{AddProductBoxes(allProducts)}</DefaultDiv>;
};

function AddProductBoxes(allProducts) {
  var numberOfColumns = 4;
  var productBoxes = [];
  for (let i = 0; i < allProducts.length; ) {
    var productRow = [];
    for (let j = 0; j < numberOfColumns; i++, j++)
      productRow.push(addBoxToProductBoxes(allProducts, i, j));
    productBoxes.push(<Flex flexWrap="wrap">{productRow}</Flex>);
  }
  return productBoxes;
}

function addBoxToProductBoxes(allProducts, i, j) {
  return (
    <Box width={[1, 1 / 2, 1 / 4]}>
      <ProductBox product={allProducts[i]} />
    </Box>
  );
}
export default ProductWindow;
