// PLEASE DON'T change function name

module.exports = function makeExchange(currency) {

        let howMuchCoins = {};
        let money = currency;
        let recidue = currency; //остаток от деления

        //H: 50, Q: 25, D: 10, N: 5, P: 1

        if( currency > 10000 ){
            return howMuchCoins = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        };

        if( currency <= 0 ){
            return {};
        };

        while( money != 0 ){ // 91 - true

            if( recidue >= 50){  // 91 >= 50 - true
                recidue = money % 50; // recidue = 91 % 50 = 41
                howMuchCoins.H = (money - recidue) / 50; // ( 91 - 41 ) / 50 = 1
                money = recidue; //money = 41

            } else if( recidue >= 25 ){ // 41 - true
                recidue = money % 25; // 41 % 25 = 16
                howMuchCoins.Q = (money - recidue) / 25; // 91 - 16 =  wrong
                money = recidue; // money = 41

            } else if( recidue >= 10 ){
                recidue = money % 10;
                howMuchCoins.D = (money - recidue) / 10;
                money = recidue;

            } else if( recidue >= 5 ){
                recidue = money % 5;
                howMuchCoins.N = (money - recidue) / 5;
                money = recidue;

            } else {
                howMuchCoins.P = money;
                money = 0;

            };
        } // end while

        return howMuchCoins;

    }; // end function




