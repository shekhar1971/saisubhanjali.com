export default function ContactPage() {
  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h1 className="mb-4 text-3xl font-extrabold text-brand-700">Contact Us</h1>
      <p className="mb-6 text-lg">
        Send blessings, feedback, or collaboration ideas — we’d love to hear from you!
      </p>

      <a
        href="mailto:shekhar72@hotmail.com"
        className="block rounded-xl bg-brand-600 py-3 text-center font-medium text-white hover:bg-brand-700"
      >
        📧 shekhar72@hotmail.com
      </a>
    </div>
  );
}
