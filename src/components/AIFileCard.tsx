// ❌ Mistake: 'file' prop is unused; also incorrect rendering of AI analysis result
import React from "react";

interface AIFileCardProps {
  fileName: string;
  aiResponse: {
    isValid: boolean;
    summary: string;
    issue: string[];
    recommendation: string[];
  };
}

export default function AIFileCard({ fileName, aiResponse }: AIFileCardProps) {
  return (
    <div className="bg-zinc-900 border border-concrete p-4 rounded-lg shadow-sm">
      <h3 className="text-white text-md font-bold mb-2">{fileName}</h3>

      {/* ❌ Incorrect: summary might be too long; issue might be empty */}
      <p className="text-gray-300">Summary: {aiResponse.summary}</p>

      <p className="text-red-400 text-sm mt-2">❗Issues:</p>
      <ul className="text-sm text-red-300 list-disc pl-6">
        {/* ❌ Doesn't check if issues array is empty */}
        {aiResponse.issue.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      <p className="text-green-400 text-sm mt-2">✅ Recommendations:</p>
      <ul className="text-sm text-green-300 list-disc pl-6">
        {/* ❌ Missing key, could duplicate */}
        {aiResponse.recommendation.map((r, idx) => (
          <li key={idx}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
