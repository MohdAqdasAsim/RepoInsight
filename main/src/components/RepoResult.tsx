import "../styles.css";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

interface Props {
  loading: boolean;
  error: string | null;
  analysis: string | null;
}

const RepoResult = ({ loading, error, analysis }: Props) => {
  if (loading) {
    return (
      <p className="text-center text-blue-400 mt-10 animate-pulse">
        Analyzing repository…
      </p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  if (!analysis) return null;

  return (
    <div className="mx-auto max-w-4xl mt-10 rounded-2xl border border-gray-800 bg-gray-900 shadow-lg">
      <div className="border-b border-gray-800 px-6 py-3 text-sm text-gray-400">
        AI Mentor Evaluation
      </div>

      <div className="max-h-125 no-scrollbar overflow-auto p-6 text-sm text-gray-200">
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            p: ({ ...props }) => (
              <p className="mb-2 text-gray-200" {...props} />
            ),
            ul: ({ ...props }) => (
              <ul className="list-disc list-inside ml-4 mb-2" {...props} />
            ),
            li: ({ ...props }) => <li className="mb-1" {...props} />,
            code: ({ ...props }) => (
              <code className="bg-gray-800 px-1 rounded" {...props} />
            ),
          }}
        >
          {analysis}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default RepoResult;
