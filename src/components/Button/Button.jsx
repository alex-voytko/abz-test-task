function Button({ name, className = "btn" }) {
  return <button className={className}>{name}</button>;
}

export default Button;
