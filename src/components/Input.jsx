function Input(props) {
  return (
    <input
      {...props} //pegando todas as props
      //   type={props.title}
      //   placeholder={props.placeholder}
      className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      //   value={props.title}
      //   onChange={props.onChange}
    />
  );
}

export default Input;
