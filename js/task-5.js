let country = prompt(`Укажите страну`);
country = country.toLowerCase();
let costOfDelivery;
let countryName;

switch (country) {

    case `индия`: {
        countryName = 'Индию';
        costOfDelivery = 80;
        alert(`Доставка в ${countryName} будет стоить ${costOfDelivery} кредитов`);
        break;
    }

    case `китай`: {
        countryName = 'Китай';
        costOfDelivery = 100;
        alert(`Доставка в ${countryName} будет стоить ${costOfDelivery} кредитов`);
        break;
    }
        
    case `ямайка`: {
        countryName = 'Ямайку';
        costOfDelivery = 120;
        alert(`Доставка в ${countryName} будет стоить ${costOfDelivery} кредитов`);
        break;
    }          
        
    case `австралия`: {
        countryName = 'Австралию';
        costOfDelivery = 170;
        alert(`Доставка в ${countryName} будет стоить ${costOfDelivery} кредитов`);
        break;
    }
        
    case `чили`: {
        countryName = 'Чили';
        costOfDelivery = 250;
        alert(`Доставка в ${countryName} будет стоить ${costOfDelivery} кредитов`);
        break;
    }
    
    default: alert('В вашей стране доставка не доступна');
        
}

    
    