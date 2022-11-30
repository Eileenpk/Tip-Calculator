// started html + css @ 12:30 pm - 3:00pm = 2.5hr
// started js @ 4pm - 7pm 
const reset = document.getElementById('reset')

// gets the amount of the bill from input field
const billAmount = document.getElementById('bill')
const getBillAmount = () => {
    const bill = billAmount.value
    const billAsNum = parseInt(bill)
    return billAsNum
}

// gets number of people
const people = document.getElementById('num-of-people')
const numPeople = () => {
    const numberOfPeople = people.value
    return numberOfPeople
}

// adds a selected class to change color of selected tip btn background for better useablity 
const addSelectedClass = (element) => {
    tipPercentAmount.forEach(btn => {
        if(btn.classList.contains('selected')) {
            btn.classList.remove('selected')
        }
    })
        element.classList.add('selected')
}

// sets the tip precent
let tipPrecent = 0
const tipPercentAmount = document.querySelectorAll('.tip-btn')

tipPercentAmount.forEach(btn => {
    btn.addEventListener('click', () => {
        addSelectedClass(btn)
        if(btn.classList.contains('_5')) {
            tipPrecent = 5
        } else if (btn.classList.contains('_10')) {
            tipPrecent = 10
        } else if (btn.classList.contains('_15')) {
            tipPrecent = 15
        } else if (btn.classList.contains('_25')) {
            tipPrecent = 25
        } else if (btn.classList.contains('_50')) {
            tipPrecent = 50
        }
        calcTip(getBillAmount(), tipPrecent)
    })
})

// sets the bill total 
const totalBill = () => {
    const total = getBillAmount() + calcTip()
    return total
}

// calc the amout of tip
const calcTip = () => {
   const tip =  (getBillAmount() * tipPrecent) / 100 
   return tip
}

// divide bill by number of people
const costPerPerson = () => {
    let costForEachPerson = totalBill() / numPeople()
    costForEachPerson = costForEachPerson.toFixed(2)
    return costForEachPerson
}

// display html
const displayAmounts = () => {
   const outPut = document.querySelector('.tip-info-container')
    outPut.innerHTML = `
    
    <div class="tip-amount">
        <h3>Tip Amount <span>/ person</span> </h3>
        <p>$${calcTip() / numPeople()}</p>
    </div>

    <div class="total">
        <h3>Total <span>/ person</span> </h3>
        <p>$${costPerPerson()}</p>
    </div>
    
    `
}

// event listeners
reset.addEventListener('click', displayAmounts)


