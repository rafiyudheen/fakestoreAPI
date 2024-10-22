let index=0
let produtsList

document.getElementById("btnLoadMore").addEventListener("click",(ev)=>{
    ev.preventDefault();
    addToDOM()
})

function loadProducts()
{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        produtsList=json
        addToDOM()
    })

}


function addToDOM(){
    let jsonSlice=produtsList.slice(index,4+index)
        
        //  alert(jsonSlice.length)
        // let product_div= 
        let html=document.getElementById("product-div").innerHTML
        //debugger           
        for(product of jsonSlice)
        {

            index++
            html+=`                
                <li class="col-12 col-md-6 col-xl-4 col-xxl-3 mb-3">
                    <div class=" product-item">
                    <div style=" align-self: center; padding: 10px;">
                        <img src="${product.image}" alt="">
                    </div>
                    <div>
                        <p class="title" style="text-align: center;">${product.title}</p>
                        <p  
                            class="description" style="text-align: center; "> ${product.description} 
                        </p>
                        
                    </div>
                    <div>
                         <p class="price" style="text-align: left;"> $${product.price}</p>
                    </div>
                </div>
            </li>
            `
        }
        // checkFinalProduct()
        

    document.getElementById("product-div").innerHTML=html
    if(index>=(produtsList.length-1))
        document.getElementById("btnLoadMore").classList.add("hidden")
}

loadProducts()

