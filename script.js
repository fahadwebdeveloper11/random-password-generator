
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const nums = "0123456789"
const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

let pass;
function randomPassGenerate() {
    pass = ""
    for (let i = 0; i < 3; i++) {
        pass += uppercase[Math.floor(Math.random() * uppercase.length)]
        pass += lowercase[Math.floor(Math.random() * lowercase.length)]
        pass += nums[Math.floor(Math.random() * nums.length)]
        pass += specialChars[Math.floor(Math.random() * specialChars.length)]

    }
    console.log(pass);
    return pass
}

// randomPassGenerate()

const generateBtn = document.querySelector('#generate-btn')
const passHere = document.querySelector('.pass')

generateBtn.addEventListener('click', function () {
    passHere.value = randomPassGenerate()
})

const copyBtn = document.querySelector('.copy-btn')
copyBtn.addEventListener('click', function () {
    // console.log("Clicked");
    passHere.select();
    document.execCommand("copy")
})
