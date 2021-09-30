
//console.log(all)

let numbers  = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
 ];

temp_array_numbers=[...numbers];
console.log("Original numbers list: ", numbers)
ASC_sorting(temp_array_numbers);
Desc_sorting(temp_array_numbers);
console.log("the original array numbers: ", numbers);
read_sort_store();

function ASC_sorting(array)
{
    for(let i = 0 ; i < array.length ; i++)
    {
        for(let j = i+1 ; j < array.length ; j++)
        {
            if(array[i] > array[j])
            {
                let temp = array[j];
                array[j] = array[i]
                array[i] = temp;
            }
        }
    }
    console.log("Numbers list After ASC sorting: ", array);


}

function Desc_sorting(array)
{

    for(let i = 0 ; i < array.length ; i++)
        {
            for(let j = 0 ; j < array.length - 1 ; j++)
            {
                if(array[j] < array[i])
                {
                    let temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }
        console.log("Numbers list After Desc sorting: ", array);


}




function read_sort_store()
{
    let fs = require('fs');
    var txt = fs.readFileSync('data.txt');//read the txt file
    var txt_to_string=txt.toString()//convert the txt file to a string
    var splited_txt=txt_to_string.split(",");//split the string with ","
    ASC_sorting(splited_txt);//asc sorting
    txt = splited_txt.toString();//convert matrix to string

    fs.writeFile('output.txt', txt, function (err) 
    {
        if (err) throw err;
        console.log('File is created successfully.');
    });

}

