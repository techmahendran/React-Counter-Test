const Button = ({ incre, decre, plusBtn, minusBtn }) => {
  return (
    <>
      <button className="decre" onClick={minusBtn} title="Decrement">
        {decre}
      </button>
      <button className="incre" onClick={plusBtn} title="Increment">
        {incre}
      </button>
    </>
  );
};

export default Button;
