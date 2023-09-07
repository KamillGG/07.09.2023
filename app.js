function changeColor(color){
    document.getElementById("mainBox").style.backgroundColor = color
}
var int = 1
var sum = 0
function addDivs(){
    const el = document.createElement('div');
    el.classList.add("scale-in-center")
    el.innerHTML = int
    int++
    const parent = document.getElementById("mainBox")
    parent.appendChild(el)
    el.classList.add("child")
    el.addEventListener('click',()=>{
        el.classList.add('scale-out-center')
        sum = sum + parseInt(el.innerHTML)
        console.log(sum)
        document.getElementById("sum").innerHTML = sum
        setTimeout(()=>{
            el.remove()
        },300)
    })
}