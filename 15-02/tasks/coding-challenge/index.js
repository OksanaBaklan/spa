function printr(elem, results) {
    results.push(elem.tagName)
    
    for (let i = 0; i < elem.children.length; i++) {
        const child = elem.children[i];
        printr(child, results)
    }
}

const elementNames = []
printr(document.body, elementNames)

const out = document.querySelector("#output")
elementNames.forEach(n => {
    out.innerHTML = out.innerHTML + "<div>"+n+"</div>"
})

// Solution to the BONUS coding challenge

function printr(elem, results, level = 0) {
    results.push({ name: elem.tagName, level })
    for (let i = 0; i < elem.children.length; i++) {
        const child = elem.children[i]
        printr(child, results, level+1)
    }
}

const elements = []
printr(document.body, elements)

const out = document.querySelector("#output")
elements.forEach(element => {
    out.innerHTML = out.innerHTML + "<div style='padding-left:"+element.level*20+"px'>"+element.name+"</div>"
})