import css from './FormContent.module.css';
import Buttons from './Buttons/Buttons';
import { IoMdCall } from 'react-icons/Io';
import { MdMessage, MdEmail } from 'react-icons/md';

const FormContent = () => {
  return (
    <div>
      <div className={css.heading}>
        <h1>Contact US</h1>
      </div>
      <div className={css.content}>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className={css.btn}>
        <Buttons text='VIA SUPPORT CHAT' icon={<MdMessage />} />
        <Buttons text='VIA CALL' icon={<IoMdCall />} />
      </div>
      <div>
        <Buttons
          btn_secondry={true}
          text='VIA EMAIL FORM '
          icon={<MdEmail />}
        />
      </div>
    </div>
  );
};

export default FormContent;
