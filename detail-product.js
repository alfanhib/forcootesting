const data = "product.json";
const ourProduct = document.querySelector('#product');
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');


const detailProduct = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.product);
            ourProduct.innerHTML = "";
            var product = responseJson.product.find( product => product.id == myParam)
           
                ourProduct.innerHTML += `

                    <div class="col-md-6" class="screen" >
                    <img src="${product.foto}" width="100%">
                    <img src="${product.foto}" width="100%">
                    <img src="${product.foto}" width="100%">
                    </div>

                    <div class="col-md-6 mt-5">
                        <div class="description mt-5"">
                  
                        <h2 class="mt-3">${product.nama} </h2>
                        <h6 class="mt-3">${product.harga} </h6>

                        <h5 class="mt-5">Materials</h5>
                        <p>${product.materials} </p>
                        <div class="button-buy">
                        <button class="btn-buy mt-5 "><img src="assets/Icon/shopping-cart.png" alt="" width="25px" class="mr-2"> Tokopedia</button>
                        <button class="btn-buy mt-5 ml-3"><img src="assets/Icon/shopping-cart.png"" alt="" width="25px" class="mr-2"> Shoope</button>
                        </div>
                        </div>
                    </div>
                    

                `;
        
        }).catch(error => {
            console.error(error);
        });
}
document.addEventListener('DOMContentLoaded', detailProduct );
