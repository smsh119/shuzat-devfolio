function Badge({
  className = "bg-primary text-[0.5rem] sm:text-[0.625rem]",
  children,
}) {
  return (
    <div
      className={`inline-block rounded-sm px-2 py-0.5 font-bold ${className}`}
    >
      {children}
    </div>
  );
}

export default Badge;
