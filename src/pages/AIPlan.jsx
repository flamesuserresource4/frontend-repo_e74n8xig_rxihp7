import Layout from '../components/Layout'

export default function AIPlan() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-16 prose prose-invert">
        <h1>AI Integration Plan</h1>
        <p><strong>Objective:</strong> Integrate AI responsibly to enhance learning, creativity, and accessibility on trainingpshyco.</p>
        <h2>Tools & Capabilities</h2>
        <ul>
          <li>Language Models for drafting content, summaries, and tutoring assistance. Vendor: in progress.</li>
          <li>Computer Vision for image tagging, alt-text generation, and visual search. Vendor: in progress.</li>
          <li>Recommendation Systems to personalize tutorials and project suggestions based on behavior. Vendor: in progress.</li>
          <li>Analytics & A/B Testing for iterative UX improvements. Vendor: in progress.</li>
        </ul>
        <h2>Responsible Use</h2>
        <ul>
          <li>Human-in-the-loop review for any AI-generated public content.</li>
          <li>Clear labeling of AI-assisted outputs and features.</li>
          <li>Data minimization and privacy-first data handling.</li>
          <li>Opt-in consent for data collection and AI personalization.</li>
        </ul>
        <h2>Implementation Roadmap</h2>
        <ol>
          <li>Phase 1: Prototype (local simulation, non-persistent data, disclosure). Status: in progress.</li>
          <li>Phase 2: Connect to managed AI APIs with usage limits, logging, and safeguards. Status: in progress.</li>
          <li>Phase 3: Evaluate model performance and bias; publish transparency report. Status: in progress.</li>
        </ol>
        <h2>Risks & Mitigations</h2>
        <ul>
          <li>Bias and fairness: regular audits, diverse test sets, and feedback loops.</li>
          <li>Privacy: encryption in transit and at rest; strict access controls.</li>
          <li>Over-reliance on automation: maintain manual pathways and human support.</li>
        </ul>
        <p><em>Contact for more details: in progress</em></p>
      </section>
    </Layout>
  )
}
