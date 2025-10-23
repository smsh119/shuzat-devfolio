function LinksGroup({ title, children }) {
  return (
    <div className="bg-secondary mb-3 rounded-[10px] text-xs sm:text-base">
      {title && <h2 className="-mb-2 pt-2 text-base sm:text-2xl">{title}</h2>}
      <div className="flex justify-center gap-5 py-3">{children}</div>
    </div>
  );
}

export default LinksGroup;
