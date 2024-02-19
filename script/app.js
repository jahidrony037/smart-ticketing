const seatButtons = document.querySelectorAll('.seat-btn');
let arr=[];
let totalPrice=0;
let grandTotalPrice=0;
let disCountedPrice=0;
for(const seatButton of seatButtons){
    seatButton.addEventListener('click', function(event) {
            let seatNumber = event.target.innerText;
            let availableSeat = getValue('available-seat');
            const ticketPrice = getValue('ticket-price');

            const seatDetailsContainer = document.getElementById('seat-details-container');
        // console.log(seatDetailsContainer);
        const div = document.createElement('div');
        div.setAttribute('class','flex flex-row justify-between items-center gap-6');

        const p1 = document.createElement('p');
        p1.setAttribute('class','inter lg:text-[16px] text-sm text-[#03071299] font-normal');
        const p2 = document.createElement('p');
        p2.setAttribute('class','inter lg:text-[16px] text-sm text-[#03071299] font-normal')
        const p3 = document.createElement('p');
        p3.setAttribute('class','each-ticket-price');
        p3.setAttribute('class','inter lg:text-[16px] text-sm text-[#03071299] font-normal')

        
        
        


        if(arr.length>=0 && arr.length<=4){
            if(arr.includes(seatNumber)){
                alert('sorry you already booking this seat');
                return;
                
            }
            else{
                
               
                arr.push(event.target.innerText);
                
                availableSeat-=1;
                p1.innerText=event.target.innerText;
                p2.innerText="Economy";
                p3.innerText=ticketPrice;
                div.append(p1,p2,p3);
                
                
            }

        }
        

        if(arr.length>4){
            
            alert('sorry you can only four seat booking at a time, Thank You');
            return;
        }
        
        
        
        event.target.classList.add('bg-primary','text-white');
        seatDetailsContainer.append(div);


        // total price set 
         totalPrice = arr.length*550;
        setValue('total-price',totalPrice);
        setValue('grand-total',totalPrice);

        

        setValue('available-seat', availableSeat);
        setValue('booking-number',arr.length);


        
        

    })
}

// apply button added 

document.getElementById('coupon-code').addEventListener('keyup', function (event){
    const code = event.target.value;
    const applyBtn = document.getElementById('apply');
            
    if(code==='NEW15'|| code==='Couple 20'){
        applyBtn.removeAttribute('disabled');
    }
    else{
        applyBtn.setAttribute('disabled',true);
    }
})


document.getElementById('apply').addEventListener('click', function(event){
    const code = getValueFromInput('coupon-code');
    const discountParent = document.getElementById('discount');
    const div = document.createElement('div');
    div.setAttribute('class', 'flex flex-row justify-between items-center gap-3 mt-6')
    const p1=document.createElement('p');
    p1.setAttribute('class','lg:text-[16px] text-sm inter font-medium text-base-black')
    const p2=document.createElement('p');
    p2.setAttribute('class', 'lg:text-[16px] text-sm inter font-medium text-base-black')
    p1.innerText='Discount';
   

    
    if(arr.length>=4){
        document.getElementById('coupon-box').style.display="none";
        if(code==='NEW15'){
            disCountedPrice=totalPrice*0.15;
            p2.innerText=disCountedPrice;
            grandTotalPrice =totalPrice-disCountedPrice;
            setValue('grand-total',grandTotalPrice);

        }
        else if(code==='Couple 20'){
            disCountedPrice=totalPrice*0.2;
            p2.innerText=disCountedPrice;
            grandTotalPrice=totalPrice-disCountedPrice;
            setValue('grand-total', grandTotalPrice);
        }
        else{
            setValue('grand-total',totalPrice);
        }
       
        div.append(p1,p2);
        discountParent.append(div);



    }
    else{
        alert('coupon code apply only for four tickets!');
        return;
    }
})




function getValue(idName){
    const element = document.getElementById(idName);
    const convertValueNumber =parseInt(element.innerText);
    return convertValueNumber 
}

function setValue(idName,value){
    const element = document.getElementById(idName);
    element.innerText=value;
}

function getValueFromInput(id){
    const element = document.getElementById(id);
    return element.value;
}



