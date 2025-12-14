# RepoInsight

This is a web app that helps you **analyze GitHub repositories** using AI. It gives you a **score, summary, and roadmap** for any public repo you provide.

## How It Works

1. **Enter a repo**
   You can enter a GitHub repository in either format:

   * Full URL: `https://github.com/owner/repo`
   * Owner/repo: `owner/repo`

2. **Fetch data**
   The app fetches **raw data from GitHub** using their API.

3. **Analyze with AI**
   The raw data is sent to **Google Gemini AI**, which evaluates:

   * Code quality
   * Project structure
   * Documentation
   * Tests
   * Commit history

4. **Get results**
   The AI outputs:

   * **Score:** A number from 0–100
   * **Summary:** Short evaluation of the repo
   * **Roadmap:** Steps to improve the project

## Tech Used

* **React + TypeScript** – For building the web app
* **TailwindCSS** – For styling
* **React Markdown** – To display AI output properly
* **Google Gemini AI** – For evaluating repositories
* **GitHub API** – To fetch repository data

## How to Run

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Add your Gemini API key in `.env`:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. Start the app:

```bash
npm run dev
```

5. Open your browser at `http://localhost:5173` and test a GitHub repo.