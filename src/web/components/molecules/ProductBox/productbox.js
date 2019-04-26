import { styled, React, injectObjectIntoStyledComponents } from 'shared/shared_imports'
import AddToCartButton from '../../atoms/AddToCartButton/'
import Image from './Image'
import Name from './Name'
import Price from './Price'

const Div = styled.div`
    border: 2px solid green;
    ${props => injectObjectIntoStyledComponents(props.styles)};
`
const ProductBox = (props) => {
  const styles = { background: 'red', color: 'blue' };
  
  if (props.product === undefined)
    return (<Div>
      TODO
    </Div>)
  else
    return (
      <Div styles={styles}>
        <Image image={props.product.image} />
        <Name name={props.product.name} />
        <AddToCartButton product={props.product} addItemToCart={props.addItemToCart} />
        <Price price={props.product.price} />
      </Div>
    )
}
//export default ProductBox
export default ProductBox
