function addObjectValue(arra){

    let result = {
        a:0,
        b:0,
        c:0
    }


    arra.forEach(element => {
        result.a += element.a
        result.b += element.b
        result.c += element.c
    });

    return result;


}


console.log(addObjectValue([{a:5,b:5,c:25},{a:10,b:20,c:30}]));