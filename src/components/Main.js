const Main = ({ count }) => {
  return (
    <>
      <h1 style={{ color: count > 0 ? "green" : count < 0 ? "red" : "white" }}>
        {count}
      </h1>
    </>
  );
};

export default Main;
