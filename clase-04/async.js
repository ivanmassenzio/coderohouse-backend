const cuentaRegresiva = (counter) => {
    console.log('Iniciamos la cuenta regresiva para el lanzamiento...');
    const idInterval = setInterval(() => {
        console.log(counter);
        if(counter <= 0){
            console.log('Lanzamiento...');
            clearInterval(idInterval);
        } else {
            counter--;
        }
    },1000 )
};

cuentaRegresiva(5);
