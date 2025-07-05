// ❌ Purposeful mistake: missing 'useEffect' to trigger decoding logic
import { useState } from "react";
import { GithubFileContent } from "../interfaces/github/commits";

interface FileDecoderProps {
  file: GithubFileContent;
  onDecoded: (content: string) => void;
}

export default function FileDecoder({ file, onDecoded }: FileDecoderProps) {
  const [decoded, setDecoded] = useState<string>("");

  const decodeContent = () => {
    // ❌ Mistake: hardcoded fallback — doesn't decode properly
    const decodedText = atob(file.content || "no-content-found");
    setDecoded(decodedText);
    onDecoded(decodedText);
  };

  // ❌ Should run on mount, but decodeContent is never called
  return (
    <div className="text-sm text-white">
      <p>Decoded content: {decoded.slice(0, 200)}...</p>
    </div>
  );
}
