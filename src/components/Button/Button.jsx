function Button({ name, className = "btn", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
