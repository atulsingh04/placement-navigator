import companies from "../../data/companies";
import CompanyCard from "./CompanyCard";

export default function Companies() {
  return (
    <section
      id="companies"
      className="bg-[#030712] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold">
          Trusted Companies
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Prepare for interviews at the world's top companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {companies.map((company) => (
            <CompanyCard
              key={company.name}
              company={company}
            />
          ))}
        </div>

      </div>
    </section>
  );
}