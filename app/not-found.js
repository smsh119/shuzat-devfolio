import Button from "@/components/Button";

function NotFoundPage() {
  return (
    <section className="layout-container mb-32 scroll-mt-20 text-center select-none">
      <div className="mt-20">
        <p className="text-8xl">404</p>
        <p className="mb-20 text-lg">Page not found</p>
        <Button type="link" href="/">
          Return to Home
        </Button>
      </div>
    </section>
  );
}

export default NotFoundPage;
