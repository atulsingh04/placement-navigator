import Button from "../common/Button";

export default function UploadCard() {
  return (
    <div className="w-full max-w-md bg-[#111827]/80 backdrop-blur-md border border-gray-700 rounded-3xl p-6 md:p-8 shadow-2xl">

      <h2 className="text-3xl font-bold text-white text-center">
        Upload Resume
      </h2>

      <p className="text-gray-400 mt-2 text-center">
        PDF or DOCX (Maximum 5MB)
      </p>

      <div className="mt-8 min-h-[250px] rounded-2xl border-2 border-dashed border-blue-500 flex flex-col justify-center items-center px-4">

        <div className="text-6xl">
          📄
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          Drag & Drop Resume
        </h3>

        <p className="text-gray-400 mt-2 text-center">
          or click the button below to browse
        </p>

      </div>

      <Button
        text="Choose Resume"
        className="w-full mt-8"
      />

    </div>
  );
}