for (let i = 2 ;i<51; i++) {
    let contador=1
    for (let j = i ;j>1; j--) {
        if(i%j===0){
            contador++
            
        }
    }
    if(contador===2)
    {
        console.log(i)
    }   
}
