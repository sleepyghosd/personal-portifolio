interface SectionCardProps {
  title: string;
  content: string;
}

export default function SectionCard({ title, content }: SectionCardProps) {
  return (
    <div className="bg-black/70 border border-gray-700 rounded-xl p-4 w-full max-w-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-blue-300">{title}</h2>
      <p className="text-gray-200 whitespace-pre-line">{content}</p>
    </div>
  );
}
