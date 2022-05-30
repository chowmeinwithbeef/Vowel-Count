function getCount(str) {
  let vowelsCount = 0;
  
  for (let j = 0; j<str.length; j++) {
    if (str[j] == "a" || 
        str[j] == "e" ||
        str[j] == "i" ||
        str[j] == "o" ||
        str[j] == "u" ){
      vowelsCount++
    }
  }
  return vowelsCount;
  // The || does not mean vowel = a||e||i||o||u, rather vowel = a || vowel = e
}
