// pages/index.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <section className="max-w-4xl mx-auto text-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Kartik Sharma
        </motion.h1>
        <p className="text-xl mb-6">Software Developer | Full-Stack Engineer</p>
        <div className="flex justify-center gap-4 mb-8">
          <Link href="mailto:kartik8569@gmail.com">
            <Button>Email Me</Button>
          </Link>
          <Link href="https://www.linkedin.com/in/kartiksh07" target="_blank">
            <Button variant="outline">LinkedIn</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto grid gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              Full-stack developer driving finance-grade analytics and SaaS platforms with Python, Node.js, and React—delivering 40 analyst-hours/month savings and 15% revenue wins.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>Git</li>
              <li>AWS</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li><strong>Deep Learning Image Classifier:</strong> Reduced misclassification by 70% using ReLU and NumPy.</li>
              <li><strong>Real Estate Price Prediction:</strong> Boosted accuracy by 60% and built interactive visualizations.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <ul className="text-sm space-y-2">
              <li><strong>Application Developer, Sterlite Technologies</strong> (Nov 2024–Present)</li>
              <li><strong>Software Developer Intern, Sterlite Technologies</strong> (Nov 2023–Oct 2024)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p>B.Tech CSE, Chitkara University (2019–2023) — CGPA: 8.78/10</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}