"use client";
import React, { useState } from "react";

interface SectionBlock {
  title: string;
  text: string;
}

interface SectionResponse {
  idea: string;
  hero: SectionBlock;
  about: SectionBlock;
  contact: SectionBlock;
  images: string[];
  brand?: string; // Added brand field
}

function SectionSkeleton() {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl h-[400px] md:h-[60vh] flex flex-col justify-end animate-pulse bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 mb-2">
      <div className="absolute inset-0 bg-slate-700/60" />
      <div className="relative z-10 p-10 flex flex-col h-full justify-end">
        <div className="w-20 h-4 bg-blue-900/40 rounded mb-4" />
        <div className="w-2/3 h-8 bg-slate-600/80 rounded mb-3" />
        <div className="w-1/2 h-8 bg-slate-700/60 rounded mb-6" />
        <div className="w-full h-4 bg-slate-700/50 rounded mb-2" />
        <div className="w-5/6 h-4 bg-slate-800/40 rounded mb-2" />
        <div className="w-2/3 h-4 bg-slate-700/30 rounded" />
      </div>
    </div>
  );
}

function generateOnePageHTML(section: SectionResponse & { brand?: string }) {
  const brandName = section.brand || section.idea;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${brandName} - AI Generated Site</title>
  <style>
    html { scroll-behavior: smooth; }
    body { margin: 0; font-family: 'Segoe UI', Arial, sans-serif; background: #181e29; color: #fff; }
    .container { max-width: 1200px; margin: 0 auto; width: 100%; }
    .navbar { position: fixed; top: 0; left: 0; width: 100%; z-index: 100; background: rgba(24,30,41,0.95); backdrop-filter: blur(8px); display: flex; justify-content: space-between; align-items: center; height: 64px; box-shadow: 0 2px 16px 0 rgba(0,0,0,0.12); }
    .navbar .container { display: flex; justify-content: space-between; align-items: center; padding: 0 2rem; }
    .logo { font-size: 1.5rem; font-weight: 900; letter-spacing: 0.04em; color: #60a5fa; text-shadow: 0 2px 8px #0004; }
    .nav-links { display: flex; gap: 2rem; }
    .nav-link { color: #fff; text-decoration: none; font-weight: 600; font-size: 1.1rem; letter-spacing: 0.05em; padding: 0.5rem 1.2rem; border-radius: 999px; transition: background 0.2s, color 0.2s; }
    .nav-link:hover, .nav-link.active { background: linear-gradient(90deg, #3b82f6 0%, #a78bfa 100%); color: #fff; }
    .section { min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; position: relative; overflow: hidden; }
    .section-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
    .section-gradient { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.2) 100%); z-index: 1; }
    .section-content { position: relative; z-index: 2; padding: 3rem 2rem 4rem 2rem; }
    .section-content .container { max-width: 800px; }
    .section-type { text-transform: uppercase; letter-spacing: 0.1em; color: #60a5fa; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem; }
    .section-title { font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem; }
    .section-text { font-size: 1.25rem; color: #e5e7eb; line-height: 1.6; }
    #hero { scroll-margin-top: 64px; }
    #about { scroll-margin-top: 64px; }
    #contact { scroll-margin-top: 64px; }
    @media (max-width: 1200px) {
      .container { max-width: 95%; }
    }
    @media (max-width: 700px) {
      .section-title { font-size: 2rem; }
      .section-content { padding: 2rem 1rem 3rem 1rem; }
      .nav-links { gap: 1rem; }
      .nav-link { font-size: 1rem; padding: 0.5rem 0.8rem; }
      .navbar .container { padding: 0 1rem; }
      .logo { font-size: 1.1rem; }
    }
    body { padding-top: 64px; }
  </style>
  <script>
    // Handle navigation and scroll highlighting
    window.addEventListener('DOMContentLoaded', function() {
      const links = document.querySelectorAll('.nav-link');
      const sections = ['hero', 'about', 'contact'].map(id => document.getElementById(id));
      
      // Handle navigation clicks
      links.forEach((link, idx) => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
      
      // Highlight active nav link on scroll
      function onScroll() {
        const scrollY = window.scrollY + 80;
        let activeIdx = 0;
        for (let i = 0; i < sections.length; i++) {
          if (sections[i] && scrollY >= sections[i].offsetTop) {
            activeIdx = i;
          }
        }
        links.forEach((link, idx) => link.classList.toggle('active', idx === activeIdx));
      }
      
      window.addEventListener('scroll', onScroll);
      onScroll();
    });
  </script>
</head>
<body>
  <nav class="navbar">
    <div class="container">
      <div class="logo">${brandName}</div>
      <div class="nav-links">
        <a class="nav-link" href="#hero">Hero</a>
        <a class="nav-link" href="#about">About</a>
        <a class="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>
  <div class="section" id="hero">
    <img class="section-img" src="${section.images[0]}" alt="Hero" />
    <div class="section-gradient"></div>
    <div class="section-content">
      <div class="container">
        <div class="section-type">Hero</div>
        <div class="section-title">${section.hero.title}</div>
        <div class="section-text">${section.hero.text}</div>
      </div>
    </div>
  </div>
  <div class="section" id="about">
    <img class="section-img" src="${section.images[1]}" alt="About" />
    <div class="section-gradient"></div>
    <div class="section-content">
      <div class="container">
        <div class="section-type">About</div>
        <div class="section-title">${section.about.title}</div>
        <div class="section-text">${section.about.text}</div>
      </div>
    </div>
  </div>
  <div class="section" id="contact">
    <img class="section-img" src="${section.images[2]}" alt="Contact" />
    <div class="section-gradient"></div>
    <div class="section-content">
      <div class="container">
        <div class="section-type">Contact</div>
        <div class="section-title">${section.contact.title}</div>
        <div class="section-text">${section.contact.text}</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

export default function Home() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [section, setSection] = useState<SectionResponse | null>(null);
  const [showCode, setShowCode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSection(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/section`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      if (!res.ok) throw new Error("Failed to generate sections. Try again.");
      const data = await res.json();
      setSection(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (section) {
      navigator.clipboard.writeText(generateOnePageHTML(section));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const sections = section
    ? [
        { ...section.hero, image: section.images[0], type: "Hero" },
        { ...section.about, image: section.images[1], type: "About" },
        { ...section.contact, image: section.images[2], type: "Contact" },
      ]
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
        Stunning AI Site Builder
      </h1>
      <p className="text-lg text-slate-300 mb-8 text-center max-w-xl">
        Instantly generate beautiful website sections for any idea. Powered by AI and Unsplash.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col md:flex-row gap-4 mb-10"
      >
        <input
          type="text"
          className="flex-1 px-5 py-3 rounded-lg bg-slate-800 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow"
          placeholder="Type your website idea (e.g. Bakery)"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg relative overflow-hidden transition-transform duration-200 disabled:opacity-60 disabled:cursor-not-allowed animate-gradient-move bg-[length:200%_200%] hover:scale-105"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {error && (
        <div className="bg-red-600/80 text-white px-6 py-3 rounded-lg mb-6 font-semibold animate-pulse shadow-lg">
          {error}
        </div>
      )}
      {loading && !error && (
        <div className="w-full flex flex-col items-center gap-10 mt-4">
          {[1, 2, 3].map((i) => (
            <SectionSkeleton key={i} />
          ))}
        </div>
      )}
      {sections.length > 0 && (
        <>
          <div className="w-full flex flex-col items-center gap-10 mt-4">
            {sections.map((sec, idx) => (
              <div
                key={sec.type}
                className="relative rounded-3xl overflow-hidden shadow-2xl group w-full max-w-4xl h-[400px] md:h-[60vh] flex flex-col justify-end"
                style={{ minHeight: 300 }}
              >
                <img
                  src={sec.image}
                  alt={sec.type + " image"}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 p-10 flex flex-col h-full justify-end">
                  <span className="uppercase tracking-widest text-xs text-blue-300 font-bold mb-2 drop-shadow">
                    {sec.type}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
                    {sec.title}
                  </h2>
                  <p className="text-slate-200 text-lg font-medium drop-shadow">
                    {sec.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setShowCode(true)}
            >
              View Code
            </button>
            <button
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setShowPreview(true)}
            >
              View Full Page
            </button>
          </div>
          {showCode && section && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
              <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 relative flex flex-col">
                <button
                  className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl font-bold"
                  onClick={() => setShowCode(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <h3 className="text-xl font-bold text-white mb-4">One-Page Website Code</h3>
                <textarea
                  className="w-full h-96 bg-slate-800 text-slate-100 rounded-lg p-4 font-mono text-xs resize-none mb-4 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={generateOnePageHTML(section)}
                  readOnly
                />
                <button
                  className="self-end px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={handleCopy}
                >
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </button>
              </div>
            </div>
          )}
          {showPreview && section && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
              <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full mx-4 p-4 relative flex flex-col items-center">
                <button
                  className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl font-bold"
                  onClick={() => setShowPreview(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <h3 className="text-xl font-bold text-white mb-4">Live Preview</h3>
                <div className="w-full h-[80vh] max-w-4xl rounded-lg overflow-hidden border-2 border-slate-700 shadow-lg">
                  <iframe
                    title="Live Preview"
                    srcDoc={generateOnePageHTML(section)}
                    className="w-full h-full bg-white"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <footer className="mt-16 text-slate-500 text-sm text-center opacity-70">
        Built with Next.js, NestJS, Together.ai, Unsplash, and MongoDB.
      </footer>
    </div>
  );
}
