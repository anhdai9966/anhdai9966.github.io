export default function AnswerView ({ answers, handlerClick }) {
  return (
    <div className="answer-section">
      {answers.map((a, index) => (
        <button key={index} onClick={() => handlerClick(a.correct)}>
          {a.content}
        </button>
      ))}
    </div>
  );
};