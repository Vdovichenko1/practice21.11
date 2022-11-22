import { useDispatch } from 'react-redux';
import { authByGoogle } from 'redux/auth/authOperations';

export default function Auth() {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(authByGoogle())}>
      Register
    </button>
  );
}
