const questions = [
  {
    question: 'Thủ đô của Việt Nam là?',
    answers: [
      { content: 'Thành phố Hồ Chí Minh', correct: false },
      { content: 'Hải Phòng', correct: false },
      { content: 'Hà Nội', correct: true },
      { content: 'Đà Nẵng', correct: false },
    ],
  },
  {
    question: 'Việt Nam có bao nhiêu tỉnh thành?',
    answers: [
      { content: '60', correct: false },
      { content: '61', correct: false },
      { content: '62', correct: false },
      { content: '63', correct: true },
    ],
  },
  {
    question: 'Năm 2022 dân số Việt Nam khoảng bao nhiêu người?',
    answers: [
      { content: 'Khoảng 99 triệu người', correct: true },
      { content: 'Khoảng 102 triệu người', correct: false },
      { content: 'Khoảng 105 triệu người', correct: false },
      { content: 'Khoảng 108 triệu người', correct: false },
    ],
  },
];

const App = function () {
  const [i, setI] = React.useState(0);
  const [countCorrect, setCountCorrect] = React.useState(0);

  const selectAnswer = function (correct) {
    // nếu correct chính xác thì tăng count lên 1 không thôi
    if (correct) setCountCorrect(countCorrect + 1);
    // set index để chuyể câu hỏi
    setI(i + 1);
  };

  // các câu trả lời
  const AnswerView = function ({ question }) {
    return (
      <div className="answer-section">
        {question.answers.map((q, index) => (
          <button key={index} onClick={() => selectAnswer(q.correct)}>
            {q.content}
          </button>
        ))}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="app">
        {/* <!-- Hiển thị kết quả người chơi --> */}
        {i >= questions.length && (
          <div className="score-section">
            You scored {countCorrect} out of {questions.length}
          </div>
        )}

        {/* <!-- Hiển thị thông tin câu hỏi --> */}
        {i < questions.length && (
          <React.Fragment>
            <div className="question-section">
              <div className="question-count">
                <span>Question {i + 1}</span>/{questions.length}
              </div>

              <div className="question-text">{questions[i].question}</div>
            </div>

            <AnswerView question={questions[i]} />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
