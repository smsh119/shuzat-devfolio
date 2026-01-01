export default {
  h1: (props) => <h1 className="mb-4 text-3xl font-bold" {...props} />,
  h2: (props) => <h2 className="mt-6 mb-3 text-2xl font-semibold" {...props} />,
  h3: (props) => <h3 className="mt-6 mb-3 text-xl font-semibold" {...props} />,
  p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
  a: (props) => (
    <a className="text-accent mb-4 leading-relaxed font-bold" {...props} />
  ),
  ul: (props) => <ul className="mb-4 ml-6 list-disc" {...props} />,
  ol: (props) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
  code: (props) => (
    <pre className="bg-secondary my-2 overflow-x-auto rounded-lg p-4 text-sm">
      <code {...props} />
    </pre>
  ),
  img: (props) => (
    <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="m-10 border-l-4 border-gray-300 pl-4 text-gray-200 italic"
      {...props}
    />
  ),
  LinkBlank: (props) => (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent mb-4 leading-relaxed font-bold"
    />
  ),
};
