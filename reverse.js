
const vowels = ['a', 'e', 'i', 'o', 'u']

const reverse_consonants = (string)=>{

    let split_string = string.split('')
    const temp_vowels = []
    const temp_indexes = []

    split_string.forEach((letter, index) => {

        vowels.forEach((vowel) => {
            if (letter === vowel) {
                temp_vowels.push(letter)
                temp_indexes.push(index)
            }
        })

    })

    temp_vowels.forEach((vowel)=>{
        split_string = split_string.filter(letter => letter !== vowel)
    })

    let reversed_split_string = split_string.reverse()

    temp_vowels.forEach((vowel, index) => {
        reversed_split_string.splice(temp_indexes[index], 0, vowel)
    })

    return reversed_split_string

}

console.log(reverse_consonants('hello'))