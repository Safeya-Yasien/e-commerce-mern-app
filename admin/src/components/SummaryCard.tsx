interface ISummaryCardProps {
  title: string;
  length: number;
}

const SummaryCard = ({ title, length }: ISummaryCardProps) => {
  return (
    <div className="bg-white/10 p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-lg font-medium text-gray-300 mb-2">{title}</h2>
      <p className="text-4xl font-bold text-green-400">{length || 0}</p>
    </div>
  );
};
export default SummaryCard;
