import Layout from '../components/Layout'

export default function Ethics() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-16 prose prose-invert">
        <h1>Ethics Charter</h1>
        <h2>Privacy</h2>
        <p>We collect the minimum necessary data. Sensitive data will not be used for model training without explicit permission. Storage, access, and retention policies are documented and periodically reviewed. Contact: in progress.</p>
        <h2>Consent</h2>
        <p>All AI-driven personalization and data collection are opt-in with clear choices. You can withdraw consent at any time. We provide simple controls to view, export, or delete your data. Request: in progress.</p>
        <h2>Transparency</h2>
        <p>AI-assisted features and generated content are labeled. We disclose data sources, limitations, and known risks. Changes to this charter are versioned and publicly available. Feedback channel: in progress.</p>
        <h2>Accountability</h2>
        <p>Issues are tracked with clear ownership and response times. We conduct regular audits and publish summaries. Incident reporting: in progress.</p>
        <h2>Accessibility & Inclusion</h2>
        <p>We design with inclusivity in mind and test with diverse users. Accessibility improvements are prioritized alongside new features.</p>
      </section>
    </Layout>
  )
}
