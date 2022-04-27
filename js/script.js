let massName = []
let massCount = []


function sbor(name, count){
    massName.push(name)
    massCount.push(count)
    console.log('Наименования: ' + massName + ', Цены: ' + massCount)
    var sum = 0; 
    for(var i = 0; i < massCount.length; i++){ sum += massCount[i];console.log(sum)}
    alert('Вы положили в корзину ' + name + '. Теперь цена Вашей корзины составляет ' + sum + 'руб.')
    let block = document.getElementById('itog')
    block.textContent = massName + ' по цене ' + massCount + 'рублей соответственно. Итоговая цена:' + sum

}

