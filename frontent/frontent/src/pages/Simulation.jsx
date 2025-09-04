import { useState, useEffect } from "react";
import { runSimulation, fetchSimulations } from "../services/simulationService";
import ReactMarkdown from "react-markdown";
import {
  Loader2,
  Clipboard,
  CheckCircle2,
  RefreshCcw,
  History,
  Trash2,
} from "lucide-react";

export default function Simulation() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);

  // Fetch history from backend
  useEffect(() => {
    async function loadHistory() {
      try {
        const sims = await fetchSimulations();
        // ✅ Always ensure array
        setHistory(Array.isArray(sims) ? sims : []);
      } catch (err) {
        console.error("❌ Failed to load history:", err);
        setHistory([]);
      }
    }
    loadHistory();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!result) return;
    setDisplayedText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(result.substring(0, i + 1));
      i++;
      if (i >= result.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [result]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setDisplayedText("");

    try {
      const aiResult = await runSimulation(prompt);
      setResult(aiResult);

      // refresh history
      const sims = await fetchSimulations();
      setHistory(Array.isArray(sims) ? sims : []);
    } catch (err) {
      setResult("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRetry = () => {
    setPrompt("");
    setResult("");
    setDisplayedText("");
  };

  const handleDelete = async (id) => {
    try {
      // TODO: call backend DELETE /api/simulations/:id
      setHistory((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("❌ Failed to delete:", err);
    }
  };

  const handleClearAll = async () => {
    try {
      // TODO: call backend DELETE /api/simulations
      setHistory([]);
    } catch (err) {
      console.error("❌ Failed to clear history:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Sidebar History */}
      <aside className="w-72 bg-white/70 backdrop-blur-lg border-r p-4 hidden md:flex flex-col shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2 text-blue-700">
            <History className="w-5 h-5" /> History
          </h2>
          {history.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs text-red-500 hover:text-red-700"
            >
              Clear All
            </button>
          )}
        </div>
        <ul className="space-y-3 overflow-y-auto flex-1">
          {Array.isArray(history) && history.length > 0 ? (
            history.map((item) => (
              <li
                key={item._id}
                className="p-3 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer group relative"
                onClick={() => {
                  setPrompt(item.prompt);
                  setResult(item.result);
                }}
              >
                <p className="text-sm font-medium text-gray-800 truncate">
                  {item.prompt}
                </p>
                <p className="text-xs text-gray-500 truncate">{item.result}</p>

                {/* Delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item._id);
                  }}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <Trash2 className="w-4 h-4 text-red-500 hover:text-red-700" />
                </button>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No history yet</p>
          )}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Hero + Input */}
        {!result && (
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              What-If Simulator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Type in a “what-if” scenario and explore an alternative future.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g. What if I become an engineer?"
                className="flex-1 border p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition flex items-center gap-2"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5" />
                ) : (
                  "Simulate"
                )}
              </button>
            </form>
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 bg-white/80 backdrop-blur-lg border rounded-2xl shadow-xl p-6 relative">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-800">
              ✨ Simulation Result
            </h2>
            <div className="prose prose-blue max-w-none mb-6">
              <ReactMarkdown>{displayedText}</ReactMarkdown>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium transition"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Clipboard className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>

              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-sm font-medium transition"
              >
                <RefreshCcw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
