/**
 * 3. Write a function that evaluates a string and returns true 
 * when the string is a palindrome and false when it is not
 */

function isPalindrome(text){
    let text1 = '';
    let text2 = '';
    //console.log(text.length);
    for(let cont = 0; cont <= (text.length - 1) ; cont++){
        //console.log(text[cont])
        if(text[cont] === ' '){
            cont++;
            text1 += text[cont];
            //console.log(cont,text[cont])
        }else{
            text1 += text[cont];
            //console.log(cont,text[cont])
        }
    }
    for(let cont = (text1.length - 1) ; cont <= (text1.length - 1) && cont >= 0 ; cont--){
        //console.log(cont,text1[cont]);
        text2 += text1[cont];
        //console.log(text2[cont]);
        //console.log(typeof(text2[cont]),text2[cont]);
    }
    console.log(text1);
    console.log(text2);
    //console.log(text1)

    if(text1 === text2){
        console.log('La palabra es un Palindromo');
    }else{
        console.log('La palabra no es un Palindromo');
    }
};
  
const value = isPalindrome('anita lava la tina');
//const value = isPalindrome('hola');