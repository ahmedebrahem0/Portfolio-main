import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { projects, experiences, education, internships, memberships } from "@/data/portfolio";
import { arabic } from "./ar";

const translations: Record<string, string> = arabic;

describe("Arabic portfolio coverage", () => {
  it("translates every data-driven description and achievement", () => {
    const content = [
      ...projects.map((entry) => entry.description),
      ...experiences.flatMap((entry) => [entry.title, entry.description, ...entry.achievements]),
      ...education.flatMap((entry) => [entry.degree, entry.description]),
      ...internships.flatMap((entry) => [entry.title, entry.description, ...entry.achievements]),
      ...memberships.flatMap((entry) => [entry.title, entry.description, ...entry.achievements]),
    ];
    for (const value of content) {
      expect(translations[value], `Missing translation: ${value}`).toBeTruthy();
      expect(translations[value]).not.toBe(value);
    }
  });

  it("keeps project names unchanged", () => {
    for (const project of projects) expect(translations[project.title]).toBeUndefined();
  });

  it("covers static translated text in portfolio components", () => {
    for (const file of ["pages/Portfolio.tsx", "pages/ProjectChapters.tsx", "components/ArchitectureTree.tsx", "components/ExperienceTimeline.tsx"]) {
      const source = readFileSync(resolve(__dirname, "..", file), "utf8");
      for (const match of source.matchAll(/<T>([^<]+)<\/T>/g)) {
        expect(translations[match[1]], `Missing translation in ${file}: ${match[1]}`).toBeTruthy();
      }
    }
  });
});
