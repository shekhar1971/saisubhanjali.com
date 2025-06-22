export default function ContactPage() {
  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h1 className="mb-4 text-3xl font-extrabold text-brand-700">Contact Us</h1>
      <p className="mb-6 text-lg">
        Send blessings, feedback, or collaboration ideas — we’d love to hear from you!
      </p>

      <a
        href="mailto:info@saisubhanjali.com"
        className="block rounded-xl bg-brand-600 py-3 text-center font-medium text-white hover:bg-brand-700"
      >
        📧 info@saisubhanjali.com
      </a>

      <p className="mt-4 text-sm text-gray-600 text-center">
        This is our official contact email. All messages are forwarded directly to the family team.
      </p>
    </div>
  );
}
