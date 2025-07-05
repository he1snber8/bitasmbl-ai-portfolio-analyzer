# AI Portfolio Analyzer

## Description

AI Portfolio Analyzer is an AI-powered tool designed to help developers understand the quality and impact of their portfolios. By analyzing GitHub repositories and personal sites, it evaluates project complexity, consistency, and relevance to provide actionable insights and an overall portfolio score.

This project is ideal for developers seeking to improve their portfolios and recruiters wanting a smarter way to evaluate candidates.

## Tech Stack

- **Next.js** – React framework for building the UI and backend API routes
- **NextAuth.js** – Authentication library for secure GitHub OAuth integration
- **GitHub API** – Fetch public repository contents and metadata
- **AI Integration** – Natural language processing and code analysis for evaluation (can be OpenAI or custom AI services)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bitasmbl-ai-portfolio-analyzer.git
cd bitasmbl-ai-portfolio-analyzer
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables by creating a `.env.local` file:
```
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
NEXTAUTH_URL=http://localhost:3000
OPENAI_API_KEY=your_openai_api_key (if applicable)
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Requirements

- GitHub OAuth app credentials
- Access to GitHub public repositories
- AI API key if using an external AI evaluation service

## Usage & Implementation Steps

### 1. GitHub Repo Import
- Sign in securely via GitHub OAuth using NextAuth.js.
- Input the GitHub username or select repositories to analyze.

### 2. Recursive File Fetch & Decode
- Fetch all project files recursively from the selected GitHub repositories.
- Decode base64 content returned by GitHub's API to raw text.

### 3. AI Evaluation UI
- Display analysis results in a user-friendly interface.
- Show portfolio score based on project complexity, consistency, and relevance.
- Provide actionable feedback to improve portfolio quality.

## Contributing

Contributions and suggestions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open source under the MIT License.

---

When you are done, submit the project from your profile: [https://bitasmbl.com/home/profile](https://bitasmbl.com/home/profile)