import {FooInterface} from './model';

//Arrow parens allowed 
const a = b => {
    return 'c';
};

//Curly is required
if (true) {
    //Curly!
}

//But terniary is allowed
const b = true ? 'a' : 'b';

//Switch should have default
switch (b) {
    case 'b':
        //Single case
        break;
    default:
    //Required default
}

//Simple array definition (or should we? TODO discuss with everyone)
const c: number[] = [];

//Complex array
const d: Array<(a: string) => any> = [];

const e = d;

//Pascal cased classes
class PascalCased {
    //Should have explicit public/private
    //And lowerCamelCase
    public method() {
        //No semicolon in class
    }
}

const g: FooInterface|null = null;

//Should use triple equals
if (g === e) {
    //Jup
}

//Matching of fluid definition indentation is allowed   
const longArrayNameForIndent: number[] = [];
longArrayNameForIndent.map(aA => aA)
                      .filter(aB => true)
                      .reduce((aP, aC) => {
                          return aP;
                      }, []);
longArrayNameForIndent.map(aA => aA)
    .filter(aB => true)
    .reduce((aP, aC) => {
        return aP;
    }, []);
longArrayNameForIndent
    .map(aA => aA)
    .filter(aB => true)
    .reduce((aP, aC) => {
        return aP;
    }, []);

//Shorthand object literal is not required
const h = {
    a: a
};

//But if you use it it should be consistent
const i = {
    b: 'foo',
    a: a
};

const j = {
    a
};

//Function call can be done before definition
z();
const z = () => {
    //Some function
};
