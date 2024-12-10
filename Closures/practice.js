function closureEx(){
    let x = 20;
    
   this.setData = function(){
        x = 30;
    }
    
    this.getData = function(){
        console.log(x);
    }
}

let closure = new closureEx();
closure.setData();
closure.getData();