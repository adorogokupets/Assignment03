let iteration = 100

for (let i = 1; i <= iteration; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('Marco! Polo!')

    }else if (i % 3 === 0){
        console.log('Marco!')
    }else if (i % 5 === 0){
        console.log('Polo!')
    }else {
        console.log(i)
    }
}