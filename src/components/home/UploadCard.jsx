import { UploadCloud, FileText } from "lucide-react";
import Button from "../common/Button";

export default function UploadCard() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

      <div className="flex items-center gap-3">

        <UploadCloud size={34} className="text-blue-500" />

        <h2 className="text-3xl font-bold">

          Upload Resume

        </h2>

      </div>

      <p className="text-gray-400 mt-3">

        PDF • DOCX • Maximum 5MB

      </p>

      <div className="mt-8 border-2 border-dashed border-blue-500 rounded-2xl min-h-[260px] flex flex-col justify-center items-center">

        <FileText size={70} className="text-blue-500" />

        <h2 className="mt-5 text-xl font-semibold">

          Drag & Drop Resume

        </h2>

        <p className="text-gray-400 mt-2">

          AI will analyze your profile

        </p>

      </div>

      <Button
        text="Choose Resume"
        className="w-full mt-8"
      />

    </div>
  );
}