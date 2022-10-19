function(properties, context) {

    let rg = document.getElementById(properties.element_id);
    rg.style.maxHeight = rg.parentNode.offsetHeight + "px";

}