export const getExperienceYears = () => {
  const myCodingStartingDate = new Date(2019, 3) // April 2019
  const currentDate = new Date()

  const yearsOfExperience: number =
    currentDate.getFullYear() -
    myCodingStartingDate.getFullYear() +
    (currentDate.getMonth() - myCodingStartingDate.getMonth()) / 12

  const realYears = Math.floor(yearsOfExperience)
  const postFix = yearsOfExperience > realYears ? '+' : ''

  return { years: realYears, postfix: postFix }
}
