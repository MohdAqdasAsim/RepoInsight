import { useState, useEffect } from "react";
import { useGithubRepo } from "../hooks/useGithubRepo";
import { useAIEvaluation } from "../hooks/useAIEvaluation";
import { Header, Footer, Hero, RepoSearch, RepoResult } from "../components";

const Home = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");

  // Fetch repo data
  const { data, loading: repoLoading, error: repoError } = useGithubRepo(query);

  // AI evaluation
  const {
    analysis,
    loading: aiLoading,
    error: aiError,
    runAIAnalysis,
  } = useAIEvaluation();

  // When repo data is ready, send to AI
  useEffect(() => {
    if (data) runAIAnalysis(data);
  }, [data]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      <Header />
      <Hero />

      <RepoSearch
        input={input}
        setInput={setInput}
        onSubmit={() => setQuery(input.trim())}
      />

      <RepoResult
        loading={repoLoading || aiLoading}
        error={repoError || aiError}
        analysis={analysis}
      />

      <Footer />
    </div>
  );
};

export default Home;
