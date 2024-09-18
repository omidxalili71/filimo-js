async function FaqApi() {
    
    let data= await fetch("http://localhost:3000/faq")
    let res= await data.json()
    let faq=res.map((item)=>{
      return `<div class="accordion-single-item js-acc-item">
                  <h2 class="accordion-single-title js-acc-single-trigger">${item.question}</h2>
                  <div class="accordion-single-content">
                    <p>${item.answer}</p>
                  </div>
                </div>`
    })
    document.querySelector(".accordion-single").insertAdjacentHTML("afterbegin",faq.join(""))
  }
  export default FaqApi;
  