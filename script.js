const quotes=[
    {
        quote:"\"Don't cry because it's over. Smile because it happened\"",
        author: "-Dr. Seuss"
    },
    {
        quote:"\"Everything is hard before it is easy.\"",
        author:"-Johann Wolfgang von Goethe"
    },
    {
        quote:"\"Anyone who has never made a mistake has never tried anything new.\"",
        author:"-Albert Einstein"
    },
    {
        quote:"\"Don't let your happiness depend on something you may lose.\"",
        author:"-C.S.Lewis"
    },
    {
        quote:"\"We are all broken,that's how the light gets in.\"",
        author:"-Ernest Hemingway"
    }
]
var x=quotes.length;
console.log(x);
const quote1= document.getElementById("quote_button");
const author1= document.getElementById("author");
const button= document.getElementById("btn");
function display(){
    let random= Math.floor(Math.random()*quotes.length);
    console.log(random);
    quote1.innerHTML=quotes[random].quote;
    author1.innerHTML=quotes[random].author;
}