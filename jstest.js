// Array Filter
a = [1, 2, 4, 5]

let newArr
newArr = a.filter((b)=>b!==1)
console.log('filter: ', newArr)

newArr = a.filter((b)=>b===34)
console.log('filter emp: ', newArr)


let centeredText = {
    textAlign: 'left',
    textDecorationLine: 'underline',
    margin: 10,
    ...{
        textShadowColor:'red',
        textShadowOffset: {width: -2, heighSSSt: -2},
        textShadowRadius: 4
    }
    //backgroundColor: 'blue'

}
console.log(centeredText)
//git test
