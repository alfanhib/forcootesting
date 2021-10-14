const data = "product.json";
const ourProduct = document.querySelector('#ourProduct');
var urlParams = new URLSearchParams(window.location.search);


const getListMhs = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.product);
            ourProduct.innerHTML = "";
            let pd = responseJson.product;
            pd.forEach(item => {
                let image = item.foto[0];
                consolt.log("isi image", image)
                ourProduct.innerHTML += `
                  
                   <div class="col-md-6 mt-5 mb-5">

                    <a href="detail-product.html?id=${item.id}"> 
                        <img src="${image}" width="90%">
                        <div class="des-product">
                        <h2 class="mt-3">${item.nama} </h2>
                        <h6 class="mt-3">${item.harga} </h6>
                        </div>
                    </a>
                    </div>
                    

                `;
            });
        }).catch(error => {
            console.error(error);
        });
}
document.addEventListener('DOMContentLoaded', getListMhs );
