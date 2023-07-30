
var h1=document.createElement("h1");
h1.setAttribute("class","head");
h1.innerHTML="VISIT THIS PAGE TO BUY YOUR FAVOURITE BOOKS"
document.body.append(h1);
var res=fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pPMQAfNU1ynI8OKb3gmH91XDh6mc56Ke");
res.then((data)=>data.json()).then((data1)=>//console.log(data1.results.books));
{
    for(var i=0;i<data1.results.books.length;i++)
    {
        //console.log(data1.results.books[i].author);
        
        var div=document.createElement("div");
        div.innerHTML=`<div class="card mb-3" style="max-width: 940px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${data1.results.books[i].book_image}" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="card-title">${data1.results.books[i].title}</h1>
              <p class="card-text">Author: ${data1.results.books[i].author}</p>
              <p class="card-text">Publisher: ${data1.results.books[i].publisher}</p>
              <p class="card-text">Rank: ${data1.results.books[i].rank}</p>
              <p class="card-text">Description: ${data1.results.books[i].description}</p>
              <a href="${data1.results.books[i].amazon_product_url}" class="btn btn-primary">Click here to buy</a>
            </div>
          </div>
        </div>
      </div>`;
        document.body.append(div);
    }

})