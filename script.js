
let services = document.getElementById('services')
let agent = document.getElementById('agent')
let click = document.getElementById('click')
let click_modal = document.getElementById('click_modal')
let cases_blog = document.getElementById('cases_blog')
let services_modal_show = false
let agenstvo_show = false
let services_modal = document.getElementById('services_modal')
let agenstvo = document.getElementById('agenstvo')
services.onclick=function(){
    services_modal_show = !services_modal_show
    if (services_modal_show ){
        services_modal.style.display = 'block'

    }
    else{
        services_modal.style.display = 'none'
    }
    
}
agent.onclick=function(){
    agenstvo_show = !agenstvo_show
    if(agenstvo_show){
        agenstvo.style.display = 'block'

    }
    else{
        agenstvo.style.display = 'none'
    }
    

}
click.onclick=function(){
    click_modal.style.display = 'block'
}
click_modal.onclick=function(){
    click_modal.style.display = 'none'
``
}
click_modal.children[0].onclick = function (event) {
    event.stopPropagation()
}
    