function Title({ priority = 2, className = "title", children }) {
  const H = `h${priority}`;
  return <H className={className}>{children}</H>;
}

export default Title;
