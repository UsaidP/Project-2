import Buttons from '../Buttons/Buttons';
import css from './Input.module.css';
export const Inputs = () => {
  return (
    <form className={css.form_control}>
      <label htmlFor='name'>Name</label>
      <input type='text' name='Name' id='name' />
      <label htmlFor='email'>Email</label>
      <input type='text' name='Name' id='email' />
      <label htmlFor='textarea'>Text</label>
      <textarea name='text' id='textarea' cols='30' rows='10'></textarea>
      <div className={css.btn}>
        <Buttons text='Submit' />
      </div>
    </form>
  );
};
