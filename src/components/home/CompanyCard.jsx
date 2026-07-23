export default function CompanyCard({ company }) {
  return (
    <div className="flex items-center justify-center bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:scale-105">
      <img
        src={company.logo}
        alt={company.name}
        className="h-10 object-contain"
      />
    </div>
  );
}