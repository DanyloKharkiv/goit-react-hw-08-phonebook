import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './Login.module.scss';

export default function Login() {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
}