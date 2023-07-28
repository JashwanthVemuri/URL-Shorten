let btn = document.getElementById("shortern");
btn.addEventListener('click',short);

async function short(){
    let longUrl=document.getElementById("longurl").value;
    let shortUrl=document.getElementById("shorturl");
    console.log(longUrl);

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!urlPattern.test(longUrl)) {
      alert("Please enter a valid URL.");
      return;
    }

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const data =  await result.json();
    console.log(data);

    shortUrl.value=data.result.short_link2;
}

let copyButton=document.getElementById("copy");
let newurl=document.getElementById("shorturl")

copyButton.onclick = () => {
    newurl.select();

    window.navigator.clipboard.writeText(newurl.value);
}

let resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = () => {
  document.getElementById("longurl").value = "";
  document.getElementById("shorturl").value = "";
};