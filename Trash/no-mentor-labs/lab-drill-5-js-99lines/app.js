let friends = ["Andrew", "Cory", "Jeff", "Bill", "Will"];
// song lyrics: 99 lines of code in a file, 99 lines of code; Andrew strikes one out, clears it all out, 98 lines of code in the file:
let none = "no more"
let lyric = {
    l1: " lines of code in a file, ",
    l2: " lines of code; ",
    l3: " strikes one out, clears it all out, ",
    l4: " lines of code in the file.",
}

for ( name of friends){
    console.log(name);
    for (i=99; i>1;i--){
        console.log(i + lyric.l1 + i + lyric.l2 + name + lyric.l3 + (i-1) + lyric.l4);
        if (i==2){console.log((i-1) + lyric.l1 + (i-1) + lyric.l2 + name + lyric.l3 + none + lyric.l4);
        }
    } 
}/* console.log("still working"); */
1
/* for( line in lyric) { console.log(lyric[line]);}

while (num > 0){console.log(num+lyric[line]);num--;}

for (let num = 99; num>90; num--){
    console.log(num);
}  console.log('It worked')

for ( let i = 0; i < friends.length; i++){
    console.log(friends[i]);
} console.log('It worked') */

