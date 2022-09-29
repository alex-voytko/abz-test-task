function Button({
  name,
  className = "btn",
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;
