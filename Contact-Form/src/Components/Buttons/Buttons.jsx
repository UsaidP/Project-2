import css from '../FormContent.module.css';
const Buttons = (props) => {
  return (
    <div>
      <button
        className={props.btn_secondry ? css.btn_secondry : css.btn_primary}
      >
        {props.icon}
        {props.text}
      </button>
    </div>
  );
};

export default Buttons;
