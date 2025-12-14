import { useEffect, useState } from "react";

type RepoInput = string;

interface GithubRepoState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

function parseRepo(input: RepoInput) {
  // Case 1: Full GitHub URL
  if (input.startsWith("http")) {
    const match = input.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) throw new Error("Invalid GitHub URL");
    return { owner: match[1], repo: match[2] };
  }

  // Case 2: owner/repo
  if (input.includes("/")) {
    const [owner, repo] = input.split("/");
    return { owner, repo };
  }

  throw new Error("Invalid repo format");
}

export function useGithubRepo(repoInput: RepoInput): GithubRepoState {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!repoInput) return;

    const fetchRepo = async () => {
      try {
        setLoading(true);
        setError(null);

        const { owner, repo } = parseRepo(repoInput);

        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`
        );

        if (!res.ok) {
          throw new Error("Repository not found");
        }

        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRepo();
  }, [repoInput]);

  return { data, loading, error };
}
