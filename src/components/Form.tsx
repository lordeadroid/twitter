type TForm = {
  children: JSX.Element[];
  handleLogin: () => void;
  style: React.CSSProperties;
};

const Form = (props: TForm) => {
  const { children, handleLogin, style } = props;

  return (
    <form onSubmit={handleLogin} style={style}>
      {children}
    </form>
  );
};

export default Form;
