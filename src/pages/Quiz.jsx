import React, {useState} from 'react';
import questions from '../data/questions';
import { useNavigate } from 'react-router-dom';

export default function Quiz(){
  const [index, setIndex] = useState(0);
  const [scores, setScores] = useState({vata:0,pitta:0,kapha:0});
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const q = questions[index];

  function choose(opt){
    setAnswers(prev => ({...prev, [q.id]: opt.id}));
    setScores(prev => ({
      vata: prev.vata + (opt.score.vata||0),
      pitta: prev.pitta + (opt.score.pitta||0),
      kapha: prev.kapha + (opt.score.kapha||0),
    }));
    if(index < questions.length - 1){
      setIndex(i => i+1);
    } else {
      // finish
      // pass scores via state
      navigate('/result', { state: { scores: {...scores, vata: scores.vata + (opt.score.vata||0), pitta: scores.pitta + (opt.score.pitta||0), kapha: scores.kapha + (opt.score.kapha||0) }, answers } });
    }
  }

  return (
    <section className="quiz">
      <div className="quiz-card">
        <h3>Question {index+1} / {questions.length}</h3>
        <p className="q-text">{q.q}</p>
        <div className="opts">
          {q.opts.map(o=> (
            <button key={o.id} className="opt-btn" onClick={()=>choose(o)}>
              {o.text}
            </button>
          ))}
        </div>
        <div className="progress">
          <div className="bar" style={{width: `${((index+1)/questions.length)*100}%`}} />
        </div>
      </div>
    </section>
  );
}