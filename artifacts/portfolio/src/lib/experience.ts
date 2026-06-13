const CAREER_START = new Date(2022, 0, 1); // January 2022

/** Returns whole years of experience since career start date. */
export function getYearsOfExperience(): number {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START.getFullYear();
  const hasHadBirthday =
    now.getMonth() > CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() &&
      now.getDate() >= CAREER_START.getDate());
  return hasHadBirthday ? years : years - 1;
}

/** Returns a display string like "4+" */
export function yearsLabel(): string {
  return `${getYearsOfExperience()}+`;
}
