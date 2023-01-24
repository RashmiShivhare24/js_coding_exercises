export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
    const smallNums =[];
      for(let i = 0; i < nums.length; i++){
        if (nums[i] < 1)
        {
          smallNums.push(nums[i]);
        }
      }
  return smallNums;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
    const resultNames = [];
      for(let i = 0; i < names.length ; i++){
        if(names[i].charAt(0) === char){
            resultNames.push(names[i]);
        }
      }
   return resultNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const intArray = [];
    for(let i = 0; i < nums.length; i++){
      if(Number.isInteger(nums[i])){
          intArray.push(nums[i]);
      }
    }
  return intArray;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = [];
    for(let user of users){
       cities.push(user.data.city.displayName);
    }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
    return nums.map(number => Number((Math.sqrt(number)).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const longestSides = [];
   for(let i = 0; i < triangles.length; i++){
      longestSides.push(Math.max(triangles[i]));
   }
   return longestSides;
}
