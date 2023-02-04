const getNewQuote = async() =>
{
    var url="https://type.fit/api/quotes"; 

    const response=await fetch(url);

const allQuote = await response.json();
const indx = Math.floor(Math.random()*allQuote.length);

const quote=allQuote[indx].text;
const auth=allQuote[indx].author;

const text=document.getElementById("quote");
const author=document.getElementById("author");

text.innerHTML=quote;
author.innerHTML="~ "+auth;

const tweetButton=document.getElementById("tweet");
tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
}
getNewQuote();