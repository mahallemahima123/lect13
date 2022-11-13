
function binarySearch(arrey,item)
{

    let leftIndex=0;
    let righIndex=arrey.length-1;

    while(leftIndex<=righIndex)
    {

        let middleIndex=Math.floor((leftIndex+righIndex)/2);
        if(item===arrey[middleIndex])
        {
            return middleIndex;
        }
        if(item<=arrey[middleIndex]){
            righIndex=middleIndex-1;
        }
        else 
        {
            leftIndex=middleIndex+1;
        }
    }
    return -1;
}

let numbers=[1,2,3,4,,6,7,8,9,22]
console.log(binarySearch(numbers,22));
