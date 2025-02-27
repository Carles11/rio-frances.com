export const getExperienceYears = () => {
  const myCodingStartingDate = new Date(2019, 3) // April 2019
  const currentDate = new Date()

  const yearsOfExperience: number =
    currentDate.getFullYear() -
    myCodingStartingDate.getFullYear() +
    (currentDate.getMonth() - myCodingStartingDate.getMonth()) / 12

  const roundedYears = Math.round(yearsOfExperience)

  const realYears =
    yearsOfExperience < roundedYears ? roundedYears - 1 : roundedYears

  const postFix = realYears < roundedYears ? '+' : ''

  return { years: realYears, postfix: postFix }
}
