import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import css from './Register.module.scss';

export default function Register() {
  return (
    <div className={css.container}>
      <RegisterForm />
    </div>
  );
}