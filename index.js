/* 
---- Algorithm -----

Task : 
a. Iterate through each member 
b. Capitalize the title( sentence)

Breakdown 
phase 1 create functions to:
-get each word and capitalize
-join the words back to a sentence
phase 2
-Iterate through the tutorials 
array and map sentence function
*/


const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function wordCapitalize (word) {

  return  word[0].toUpperCase() + word.slice(1) ;

}


function sentenceCapitalize(sentence){

  // Split sentence
  const words = sentence.split(" ");
  // Capitalize each word
  const capitalizedWords = words.map(wordCapitalize);
  // Join sentence
  const capitalizedSentence = capitalizedWords.join(" ");
  // Return capitalized sentence 

  return capitalizedSentence;

}


// Array Titles Capitalize 
function arrayStringsCapitalizer (array){

  return array.map(sentenceCapitalize);

}


const titleCased = () => {  
  
  return arrayStringsCapitalizer(tutorials);
}


