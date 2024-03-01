let coinFlip
let numberFlips = parseInt(prompt('How many coin flips you want to make ? Enter the number.'))

for (let i = 0;i < numberFlips; i++){
    coinFlip = Math.round(Math.random())
    if (coinFlip < 1){
        console.log('Heads')
    }else{
        console.log('Tails')
    }
}