
let services = document.getElementById('services')
let agent = document.getElementById('agent')
let click = document.getElementById('click')
let click1 = document.getElementById('click1')
let click2 = document.getElementById('click2')
let click3 = document.getElementById('click3')
let click_modal = document.getElementById('click_modal')
let cases_blog = document.getElementById('cases_blog')
let services_modal_show = false
let agenstvo_show = false
let services_modal = document.getElementById('services_modal')
let agenstvo = document.getElementById('agenstvo')
services.onclick = function () {
    services_modal.style.display = 'block'
    agenstvo.style.display = 'none'

    services_modal_show = !services_modal_show
    if (services_modal_show) {
        services_modal.style.display = 'block'

    }
    else {
        services_modal.style.display = 'none'
    }

}
agent.onclick = function () {
    services_modal.style.display = 'none'
    agenstvo.style.display = 'block'
    agenstvo_show = !agenstvo_show
    if (agenstvo_show) {
        agenstvo.style.display = 'block'

    }
    else {
        agenstvo.style.display = 'none'
    }


}
click.onclick = function () {
    click_modal.style.display = 'block'
}
click1.onclick = function () {
    click_modal.style.display = 'block'
}
click2.onclick = function () {
    click_modal.style.display = 'block'
}
click3.onclick = function () {
    click_modal.style.display = 'block'
}
click_modal.onclick = function () {
    click_modal.style.display = 'none'
        
}
click_modal.children[0].onclick = function (event) {
    event.stopPropagation()
}
