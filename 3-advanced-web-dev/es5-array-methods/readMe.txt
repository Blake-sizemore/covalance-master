Array methods of es5

every = look at all array let you know if the argument if true or false
    arr.every((var)=>{
        return var = argument
    })

filter = returns each arr index value that is true to the argument
    arr.filter((var)=>{
        return var = argument
    })

forEach = use instaed of a for Loop, and doe  something to each array item.
    
    arr.forEach((arr, index)=>{
        console.log(arr, index);
    })

indexOf = looks to see what index has the said value, if the return is -1 it means the index seach does not exist.

    arr.indexOf(searchElement[, fromIndex])
    searchElement: The Element to locate in the array.
    fromIndex: An optional (default is 0) index to start the search at. 

        const nums = [1, 2, 3, 2, 5];

        const has2 = nums.indexOf(2);
        const has2Twice = nums.indexOf(2, 2);
        const has6 = nums.indexOf(6);

        console.log(has2); // 1
        console.log(has2Twice); // 3
        console.log(has6); // -1

lastIndexOf:'
    searchElement: The Element to locate in the array.
    fromIndex: An optional (default is arr.length - 1) index to start the search at.

        const nums = [1, 2, 3, 2, 5];

        const has2 = nums.lastIndexOf(2);
        const has2Twice = nums.lastIndexOf(2, 2);
        const has6 = nums.lastIndexOf(6);

        console.log(has2); // 3
        console.log(has2Twice); // 1
        console.log(has6); // -1

map = preforms a function on all the items

    arr.map(callback(element[, index[, array]]))
    
        const doubles = nums.map((num) => {
            return num * 2;
        });

        console.log(nums); // [1, 3, 5, 7, 9]
        console.log(doubles); // [2, 6, 10, 14, 18]

reduce = does a function from left to right

reduceRight = does a function from the right side moveing left
    arr.reduceRight(callback[, initialValue])
        const users = [
    left Side  { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Smith' },
        { firstName: 'Jack', lastName: 'Nimble' },
        { firstName: 'James', lastName: 'Trickington' },Right Side
    ];

    console.log(
        users.reduceRight((names, user) => {
            return names.concat(`${user.firstName} ${user.lastName}`);
        }, [])
    ); // ["James Trickington", "Jack Nimble", "Jane Smith", "John Doe"]

some =  test whether at least one of items in an array passes a specified test
    arr.some(callback(element[, index[, array]]))