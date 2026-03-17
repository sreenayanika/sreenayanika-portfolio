export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-[#f9fafb]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16">
          <p className="text-[#8b5cf6] font-medium mb-3">Portfolio</p>
          <h1 className="text-5xl font-bold mb-4">Sree Nayanika</h1>
          <h2 className="text-2xl text-[#d1d5db] mb-6">
            Senior Software Engineer | Python | GenAI | FastAPI | AWS
          </h2>
          <p className="text-lg text-[#9ca3af] max-w-3xl leading-8">
            10 years of experience building AI-driven applications, cloud-native backend
            systems, FastAPI microservices, and scalable AWS platforms across enterprise environments.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://github.com/sreenayanika"
              target="_blank"
              className="px-5 py-3 rounded-xl bg-[#8b5cf6] text-white font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              className="px-5 py-3 rounded-xl border border-[#374151] text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">About</h3>
          <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
            <p className="text-[#d1d5db] leading-8">
              I specialize in Python backend development, Generative AI systems, RAG architectures,
              FastAPI microservices, vector search, and AWS-based cloud-native deployments. My work spans
              scalable APIs, observability, CI/CD automation, and production-grade distributed systems.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3 text-[#8b5cf6]">Languages</h4>
              <p className="text-[#d1d5db]">Python, SQL, JavaScript, TypeScript, Bash</p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3 text-[#8b5cf6]">GenAI / AI</h4>
              <p className="text-[#d1d5db]">LangChain, OpenAI, Anthropic, Hugging Face, RAG, FAISS, Pinecone</p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3 text-[#8b5cf6]">Backend</h4>
              <p className="text-[#d1d5db]">FastAPI, Flask, Django, REST APIs, Microservices</p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3 text-[#8b5cf6]">Cloud / DevOps</h4>
              <p className="text-[#d1d5db]">AWS, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform</p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3 text-[#8b5cf6]">Databases / Search</h4>
              <p className="text-[#d1d5db]">PostgreSQL, MySQL, MongoDB, DynamoDB, Redis, Elasticsearch</p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3 text-[#8b5cf6]">Monitoring</h4>
              <p className="text-[#d1d5db]">Prometheus, Grafana, CloudWatch, ELK Stack, AWS X-Ray</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Featured Work</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3">Enterprise GenAI / RAG Platform</h4>
              <p className="text-[#9ca3af] leading-7">
                Built scalable GenAI and RAG-based systems using Python, FastAPI, LangChain, FAISS,
                Pinecone, OpenAI, and AWS services for knowledge retrieval and intelligent workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3">FastAPI Microservice Architecture</h4>
              <p className="text-[#9ca3af] leading-7">
                Designed and deployed cloud-native backend services with FastAPI, REST APIs, Docker,
                Kubernetes, and AWS infrastructure focused on scalability and reliability.
              </p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold mb-3">Observability and Deployment Automation</h4>
              <p className="text-[#9ca3af] leading-7">
                Improved production monitoring, CI/CD workflows, and system stability using CloudWatch,
                Prometheus, Grafana, Jenkins, and GitHub Actions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Experience Highlights</h3>
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold">Honeywell International Inc. | Software Engineer</h4>
              <p className="text-[#9ca3af] mt-2">
                Built Python/FastAPI microservices, GenAI integrations, RAG pipelines, and AWS-native services
                supporting scalable enterprise automation.
              </p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold">Morgan Stanley | Software Engineer</h4>
              <p className="text-[#9ca3af] mt-2">
                Developed backend services, semantic retrieval systems, ETL pipelines, observability tooling,
                and containerized deployments on AWS and Kubernetes.
              </p>
            </div>
            <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
              <h4 className="font-semibold">Databricks | Software Engineer</h4>
              <p className="text-[#9ca3af] mt-2">
                Designed scalable backend platforms, microservice-based applications, AWS deployments,
                database optimizations, and automated CI/CD workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Certification</h3>
          <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6">
            <p className="text-[#d1d5db]">AWS Certified Developer – Associate</p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <div className="rounded-2xl border border-[#1f2937] bg-[#111827] p-6 space-y-3">
            <p>Email: sreenayanika@gmail.com</p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/sreenayanika"
                target="_blank"
                className="text-[#8b5cf6] underline"
              >
                github.com/sreenayanika
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/YOUR-LINKEDIN"
                target="_blank"
                className="text-[#8b5cf6] underline"
              >
                linkedin.com/in/YOUR-LINKEDIN
              </a>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}