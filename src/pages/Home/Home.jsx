import css from './Home.module.scss';

export default function Home() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h1 className={css.title}>Simple Phonebook </h1>
        <p className={css.subtitle}>Introducing an application that allows you to save phone contacts.
          You must register to use the application. Enjoy :)</p>
        <a href='/goit-react-hw-08-phonebook/register'>
          <button className={css.btn}>Get Started</button>
          </a>
      </div>
    </div>
  );
}