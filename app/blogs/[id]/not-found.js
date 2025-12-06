import Button from "@/components/Button";

function BlogNotFoundPage() {
  return (
    <section className="layout-container mb-32 scroll-mt-20 text-center select-none">
      <div className="mt-20">
        <p className="text-8xl">404</p>
        <p className="mb-20 text-lg">Sorry! The requested blog is not found.</p>
        <div className="flex justify-center gap-2">
          <Button type="link" href="/blogs">
            View other blogs
          </Button>
          <Button type="link" href="/">
            Return to Home
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BlogNotFoundPage;
