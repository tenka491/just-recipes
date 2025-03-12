import axios from "axios";

export const urlValidator = (input): Boolean => {

  console.log(`input from urlValidator: ${input}`)
  return true;
}

export const getRawRecipeHtml = async (url) => {
  const response = await fetch(url, {
    mode: 'no-cors', 
    method: 'GET',
  })

  console.log({response})
}