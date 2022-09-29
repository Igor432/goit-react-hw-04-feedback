import Feedback from "./feedback/Feedback.jsx";
import style from '../components/feedback/feedback.module.css'

export const App = () => {
  return (
    <div className={style.main}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >


<Feedback/>
    </div>
  );
};
