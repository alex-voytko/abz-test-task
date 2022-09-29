function Title({ priority = 2, className = "title", children, id = "" }) {
  const H = `h${priority}`;
  return (
    <H className={className} id={id}>
      {children}
    </H>
  );
}

export default Title;
