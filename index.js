function receivesAFunction(dog) {
dog()
}

function returnsANamedFunction () {
    
    return function hello() {};
}

function returnsAnAnonymousFunction () {
        
        return function (){};
    
}