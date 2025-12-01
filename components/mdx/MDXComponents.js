export default {
  h1: (props) => <h1 className="mb-4 text-4xl font-bold" {...props} />,
  h2: (props) => <h2 className="mt-6 mb-3 text-3xl font-semibold" {...props} />,
  p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props) => <ul className="mb-4 ml-6 list-disc" {...props} />,
  code: (props) => (
    <code className="bg-secondary rounded-lg p-3 text-sm" {...props} />
  ),
  img: (props) => (
    <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...props} />
  ),
};
