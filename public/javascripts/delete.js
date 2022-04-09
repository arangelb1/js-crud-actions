document.getElementById("delete").onclick = function(evt) {
  evt.preventDefault();
 
  const productId = document.getElementById("product-id").value;
  console.log(`${productId}`);
    // if (input === productId.id) {
  //   axios.delete(`/api/products/${productId}`)
  //   .then(processResult);
  // } else {
  //   window.alert("Product does not exist");
  // };
  axios.delete(`/api/products/${productId}`)
  .catch((err) =>{
    if (err.response.status === 404){
      window.alert("Product not Found");
    } else (processResult);
  })
    // .then(processResult);

function processResult() {
  window.alert(productId + " deleted!");
};
}
