console.log('Nested IF ELSE Statement');

const userName = 'ravi';
const userAge = 25;
debugger
if (userAge >= 7 && userAge <= 15) {
    console.log(`${userName} is school student`);
}

else if (userAge >= 15 && userAge <= 22) {
    console.log(`${userName} is college student `);

    if (userAge > 17) {
        console.log(`${userName} is first year student`);
    }
    else {
        console.log('user is working on self');
        if (userAge > 20) {
            console.log("")
        }
        else {
            console.log(' ')

        }
    }

}