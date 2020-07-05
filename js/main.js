let button = document.getElementById('start');
    budget = document.getElementsByClassName('budget-value')[0];
    daybudget = document.getElementsByClassName('daybudget-value')[0];
    level = document.getElementsByClassName('level-value')[0];
    expenses = document.getElementsByClassName('expenses-value')[0];
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
    incomeValue = document.getElementsByClassName('income-value')[0];
    monthSavings = document.getElementsByClassName('monthsavings-value')[0];
    yearSavings = document.getElementsByClassName('yearsavings-value')[0];

    expensesItem = document.getElementsByClassName('expenses-item');
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudget = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


    console.log(button);
    console.log(budget);
    console.log(daybudget);
    console.log(level);
    console.log(expenses);
    console.log(expensesItem);
    console.log(countBudget);
    console.log(expensesItemBtn);
    console.log(savings);
    console.log(percent);


    let money, 
        time;

    button.addEventListener('click', function(){
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        money = +prompt('Ваш бюджет на месяц?', '');

        while(isNaN(money) || money == '' || money == null){
            money = prompt('Ваш бюджет на месяц?', '');
        }
        appData.budget = money;
        appData.timeData = time;
        budget.textContent = money.toFixed(0);
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDay();
    });

    expensesItemBtn.addEventListener('click', function(){
        let sum = 0;
          
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value;
                b = expensesItem[++i].value;
        if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
                i = i - 1;
        }
    }
    expenses.textContent = sum;
    });

    optionalExpensesBtn.addEventListener('click', function(){

        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    });

    countBudget.addEventListener('click', function(){

        if (appData.budget != undefined){
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            daybudget.textContent = appData.moneyPerDay;
    
            if(appData.moneyPerDay < 100) {
                    level.textContent = "Минимальный уровень достатка";
            }    else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                    level.textContent = "Средний уровень достатка";
            }    else if(appData.moneyPerDay > 2000) {
                    level.textContent = "Высокий уровень достатка";
            }    else {
                    level.textContent = "Произошла ошибка";
            }
        }   else {
            daybudget.textContent = "Произошла ошибка";
        }
    });

    chooseIncome.addEventListener('input', function(){
        let items = chooseIncome.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function(){
        if (appData.savings == true){
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function(){
        if (appData.savings == true){
            let sum = +sumValue.value, 
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavings.textContent = appData.monthIncome.toFixed(1);
            yearSavings.textContent = appData.yearIncome.toFixed(1);

        }
    });

    percentValue.addEventListener('input', function(){
        if (appData.savings == true){
            let sum = +sumValue.value, 
                percent = +percentValue.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavings.textContent = appData.monthIncome.toFixed(1);
            yearSavings.textContent = appData.yearIncome.toFixed(1);
        }
    });


    let appData = {
        budget: money,
        expenses: {},
        optionalExpenses: {},
        income: [],
        timeData: time,
        savings: false,
        chooseExpenses: function() {
            
        },
    };
        // detectDayBudget: function() {
        //     appData.moneyPerDay = (appData.budget / 30).toFixed();
        //     alert("Ежедневный бюджет: " + appData.moneyPerDay);
        // },
        // detectLevel: function() {
        //     if(appData.moneyPerDay < 100) {
        //         console.log("Минимальный уровень достатка");
        //     }    else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        //             console.log("Средний уровень достатка");
        //     }    else if(appData.moneyPerDay > 2000) {
        //             console.log("Высокий уровень достатка");
        //     } else {
        //             console.log("Произошла ошибка");
        //     }
        // },
        // checkSavings: function() {
        //     if (appData.savings == true) {
        //         let save = +prompt("Какова сумма накоплений?", ''),
        //             percent = +prompt("Под какой процент?", '');
        
        //             appData.monthIncome = save/100/12*percent;
        //             alert("Доход в месяц с вашего депозита: " + appData.monthIncome);  
        //     }
        // };
        // chooseOptExpenses: function() {
        //     for (let i = 1; i < 3; i++) {
        //         let opt = prompt("Статья необязательных расходов");
        //         appData.optionalExpenses[i] = opt;
        //     }
        // },
    //     chooseIncome: function() {
    //         let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
    //         appData.income = items.split(', ');
    //         appData.income.push(prompt("Может что-то еще, пёс?"));
    //         appData.income.sort();
    //     }
    // };