type TForm = {
  handleLogin: () => void;
  style: object;
  children: JSX.Element[];
};

const Form = (props: TForm) => {
  const { style, handleLogin, children } = props;
  return (
    <form onSubmit={handleLogin} style={style}>
      {children}
    </form>
  );
};

export default Form;
