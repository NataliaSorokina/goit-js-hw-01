let country = prompt(`Укажите страну`);
country = country.toLowerCase();
let costOfDelivery;

switch (country) {

    case `индия`: {
        country = 'Индию';
        costOfDelivery = 80;
        alert(`Доставка в ${country} будет стоить ${costOfDelivery} кредитов`);
        break;
    }

    case `китай`: {
        country = 'Китай';
        costOfDelivery = 100;
        alert(`Доставка в ${country} будет стоить ${costOfDelivery} кредитов`);
        break;
    }
        
    case `ямайка`: {
        country = 'Ямайку';
        costOfDelivery = 120;
        alert(`Доставка в ${country} будет стоить ${costOfDelivery} кредитов`);
        break;
    }          
        
    case `австралия`: {
        country = 'Австралию';
        costOfDelivery = 170;
        alert(`Доставка в ${country} будет стоить ${costOfDelivery} кредитов`);
        break;
    }
        
    case `чили`: {
        country = 'Чили';
        costOfDelivery = 250;
        alert(`Доставка в ${country} будет стоить ${costOfDelivery} кредитов`);
        break;
    }
    
    default: alert('В вашей стране доставка не доступна');
        
}

    
    