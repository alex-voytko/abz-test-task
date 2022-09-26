function Button({ name, className = "btn", onClick, type = "button" }) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;
