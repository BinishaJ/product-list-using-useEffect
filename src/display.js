function displayProducts(data) {
  Object.keys(data.products).forEach((products, i) => {
    const product = data.products[i];
    const grids = document.getElementById("home");
    //product
    const productDiv = document.createElement("div");
    grids.appendChild(productDiv);
    //link
    const productLink = document.createElement("a");
    productLink.href = product.thumbnail;
    productLink.target = "_blank";
    productDiv.appendChild(productLink);
    //image
    const productImg = document.createElement("img");
    productImg.src = product.thumbnail;
    productLink.appendChild(productImg);
    //info
    const span = document.createElement("span");
    productDiv.appendChild(span);
    //title
    const heading = document.createElement("h4");
    const productName = product.title;
    heading.innerHTML = productName;
    span.appendChild(heading);
    //price
    const money = document.createElement("h4");
    const price = product.price;
    money.innerHTML = "$" + price;
    span.appendChild(money);
    //description
    const paragraph = document.createElement("p");
    const describe = product.description;
    paragraph.innerHTML = describe;
    productDiv.appendChild(paragraph);

    productDiv.setAttribute("class", "product");
    productImg.setAttribute("class", "image");
    productLink.setAttribute("class", "link");
    span.setAttribute("class", "span");
    heading.setAttribute("class", "heading");
    money.setAttribute("class", "money");
    paragraph.setAttribute("class", "para");
  });
}
export default displayProducts;
