import { connect } from 'react-redux';
import { fetchDispensary } from '../../actions/dispensary_actions';
import { fetchProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';
import ProductShow from './product_show';
import { fetchOrders } from '../../actions/order_actions';

const mSTP = (state, { match }) => {

  const productId = parseInt(match.params.productId);
  const product = selectProduct(state.entities, productId);
  console.log(productId)
  const dispensaryId = product ? product.dispensaryId : "none"
  return {
    productId,
    product,
    dispensary: state.entities.dispensaries[dispensaryId]
  };
};

const mDTP = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id)),
  fetchDispensary: id => dispatch(fetchDispensary(id)),
  fetchOrders: () => dispatch(fetchOrders())
});

export default connect(mSTP, mDTP)(ProductShow);
