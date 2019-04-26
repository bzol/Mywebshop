import { styled, React } from 'shared/shared_imports'

const Div = styled.div`
  
`

const AddToCartButton = (props) => {

  return (
    <Div>
      <button
        onClick={() => { props.addItemToCart(props.product) }}
      >AddToCart</button>
    </Div>
  )
}
export default AddToCartButton
