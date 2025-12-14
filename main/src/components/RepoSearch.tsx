interface Props {
  input: string;
  setInput: (v: string) => void;
  onSubmit: () => void;
}

const RepoSearch = ({ input, setInput, onSubmit }: Props) => {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="https://github.com/MohdAqdasAsim/Serava"
            className="flex-1 rounded-xl bg-gray-950 border border-gray-700 px-4 py-3
                       focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={onSubmit}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold
                       hover:bg-blue-500 transition"
          >
            Fetch Repo
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepoSearch;
