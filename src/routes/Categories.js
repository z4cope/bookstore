import './categories.css';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categState = useSelector((state) => state.categories.status);
  return (
    <>
      <h2>{categState}</h2>
      <button
        onClick={() => dispatch(checkStatus())}
        className="status"
        type="button"
      >
        Check status
      </button>
    </>
  );
};

export default Categories;
