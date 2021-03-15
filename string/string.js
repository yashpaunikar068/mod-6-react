//function that counts B's
function countBs(str){
    var count = 0; 
    for (let index = 0; index < str.length; index++) {
        if(str[index] === 'B') count++;
    }
    console.log(`the count of B is ` + count);
}

//modified function that counts any character
function counts(str, chr){
    var count = 0; 
    for (let index = 0; index < str.length; index++) {
        if(str[index] === chr) count++;
    }
    console.log( `the count of ${chr} is ` + count);
}

countBs("dhsBBBBB");
counts("ehufbsyfvssh ysvcs", 's');

