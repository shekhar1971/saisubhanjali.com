export default function ContactPage() {
  return (
    <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow">
      <h1 className="mb-4 text-2xl font-bold text-brand-700">Get in Touch</h1>
      <p className="mb-6">We’d love to hear your blessings, feedback, or collaborations.</p>
      <a
        href="mailto:shekhar72@hotmail.com"
        className="block rounded bg-brand-700 py-3 text-center font-medium text-white hover:bg-brand-600"
      >
        📧 Email us: shekhar72@hotmail.com
      </a>
    </div>
  );
}
