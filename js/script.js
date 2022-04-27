let Count = []


function bye(count){
    Count.push(count)
    var sum = 0; 
    for(var i = 0; i < Count.length; i++){ sum += Count[i];console.log(sum)}
    let block = document.getElementById('count')
    block.textContent = 'Итоговая цена:' + sum

}

