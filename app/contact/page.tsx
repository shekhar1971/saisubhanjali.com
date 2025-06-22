export default function ContactPage() {
  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
      <h1 className="mb-4 text-3xl font-extrabold text-brand-700">Contact Us</h1>
      <p className="mb-6 text-lg">
        Send blessings, feedback, or collaboration ideas — we’d love to hear from you!
      </p>

      <a
        href="mailto:info@saisubhanjali.com"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-white font-semibold shadow hover:bg-brand-700 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z M4 4l8 8 8-8" />
        </svg>
        info@saisubhanjali.com
      </a>

      <p className="mt-4 text-sm text-gray-600">
        This is our official contact email. All messages are forwarded directly to the family team.
      </p>
    </div>
  );
}
