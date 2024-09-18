let cases = document.getElementById('cases')
let services = document.getElementById('services')
let agent = document.getElementById('agent')
let click = document.getElementById('click')
let click_modal = document.getElementById('click_modal')
let cases_blog = document.getElementById('cases_blog')
let services_modal = document.getElementById('services_modal')
let agenstvo = document.getElementById('agenstvo')
cases.onclick=function(){
    cases_blog.style.display = 'block'
}
services.onclick=function(){
    services_modal.style.display = 'block'
}
agent.onclick=function(){
    agenstvo.style.display = 'block'
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
    