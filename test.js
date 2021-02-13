let arra = [1, 5, 3,1,1, 2, 66, 44, 3, 6, 45, 23, 43, 12, 21, 7]
function mergeSort(array)
{
	if (array.length>1)
	{
		let mid = Math.floor(array.length/2),
		lefthalf = array.slice(0,mid),
		righthalf = array.slice(mid);
		mergeSort(lefthalf)
		mergeSort(righthalf)

		let i = j = k = 0 //к array j-right i-left
		while (i<lefthalf.length && j<righthalf.length)
		{
			if (lefthalf[i]<righthalf[j])
			{
				array[k]=lefthalf[i]
				i++;
			}
			else
			{
				array[k]=righthalf[j]
				j++
			}
			k++
		}
		while (i<lefthalf.length)
		{
			array[k]=lefthalf[i]
			i++
			k++
		}
		while( j<righthalf.length)
		{
			array[k]=righthalf[j]
			j++
			k++
		}
	}
	return array
}

mergeSort(arra);
console.log(arra)