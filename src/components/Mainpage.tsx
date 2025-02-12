import "./Mainpage.css";
const Mainpage = () => {
  return (
    <div className="container">
      <h1>Dear Hayatim, Will you be my forever valentine?</h1>
      <div className="buttons">
        <button className="yes-button">Yes</button>
        <button className="no-button">No</button>
      </div>
      <div className="gif_container">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif"
          alt="Cute GIF"
        />
      </div>
    </div>
  );
};

export default Mainpage;
