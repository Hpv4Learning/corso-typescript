function addDue(param:number):string{
    const newPAram = valueUpperCase(param.toString())
    return newPAram + 2;
}

function valueUpperCase(value:string){
    return value.toUpperCase();
}

function singUp(name:string, email:string, isPaid?:boolean){

}
singUp("David", "Parenzo")
addDue(2);

const getValue = (value:number) => {
    if(value < 5){
        return false
    }

    return value
}

const logError = (error:string):void=> {
    console.error(error)
    return 
}

const logError2 = (error:unknown):never=> {
    if(typeof error === 'string'){
        error.toString()
        throw new Error(error)
    }
    throw new Error('Geneirc error, 500')
}

export {}