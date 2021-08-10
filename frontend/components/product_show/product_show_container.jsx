import { connect } from 'react-redux';

import { fetchProduct } from '../../actions/product_actions';
import { selectProduct } from '../../reducers/selectors';
import ProductShow from './product_show';

const mSTP = (state, { match }) => {

  const productId = parseInt(match.params.productId);
  const product = selectProduct(state.entities, productId);
  return {
    productId,
    product,
  };
};

const mDTP = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
});

export default connect(mSTP, mDTP)(ProductShow);
