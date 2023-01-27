function findPair(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j]===target){
                return [nums[i], nums[j]];
            }
        }
    }
    return null;
}

const nums =[3,5,7,9,11];
const target = 16;
console.log(findPair(nums,target));