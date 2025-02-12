import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Yes = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="container">
      <h1 className="header_text">Knew you would say yes..!😘</h1>
      <h1 className="header_text">I love you more baby...💖</h1>
      <h1 className="header_text">Never ever leave me my Love...🥰</h1>
      <div className="gif_container">
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6NHhhaDE2Mjg1ZjkwOXczdDFxbWM3dTBtaW9zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif"
          alt="Love Gif"
        />
      </div>
      <Confetti width={width} height={height} />
    </div>
  );
};

export default Yes;
