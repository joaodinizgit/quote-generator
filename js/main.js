const msgQuote = document.getElementById('msg-quote');
const author = document.getElementById('author')
const btn = document.getElementById('btn-gen');
const quoteBox = document.querySelector('.quote-box')

async function logJSONData() {
    //Api shared by ssukurenko, thank you.
    const response = await fetch("https://type.fit/api/quotes");
    const jsonData = await response.json();
    const randomQuote = Math.round(Math.random() * jsonData.length + 1)

    msgQuote.animate([{opacity:0}, {opacity:1}], 3000);
    author.animate([{opacity:0}, {opacity:1}], 3000);
    msgQuote.textContent = `"${jsonData[randomQuote].text}"`;
    author.textContent = jsonData[randomQuote].author;
}

logJSONData();
btn.addEventListener('click', () => logJSONData());
  