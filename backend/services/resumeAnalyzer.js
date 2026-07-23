import fs from "fs";
import pdfParse from "pdf-parse";

const SKILLS = [
  "java",
  "python",
  "c",
  "c++",
  "javascript",
  "typescript",
  "react",
  "node",
  "express",
  "mongodb",
  "mysql",
  "sql",
  "html",
  "css",
  "tailwind",
  "bootstrap",
  "git",
  "github",
  "docker",
  "aws",
  "azure",
  "firebase",
  "postman",
  "rest api",
];

export const analyzeResume = async (filePath) => {
  // Read PDF
  const buffer = fs.readFileSync(filePath);

  // Extract text
  const pdfData = await pdfParse(buffer);
  const text = pdfData.text.toLowerCase();

  // Find skills
  const foundSkills = SKILLS.filter((skill) =>
    text.includes(skill.toLowerCase())
  );

  // Missing skills
  const missingSkills = SKILLS.filter(
    (skill) => !foundSkills.includes(skill)
  );

  // Calculate score
  let score = 40 + foundSkills.length * 3;

  if (text.includes("project")) score += 10;
  if (text.includes("experience")) score += 10;
  if (text.includes("education")) score += 5;

  score = Math.min(score, 100);

  return {
    score,
    foundSkills,
    missingSkills,
  };
};