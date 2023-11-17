const mappedEmp = new Map();

mappedEmp.set('linda', { fullName: 'Linda Johnson', id: 1 });

mappedEmp.set('jim', { fullName: 'Jim Thomson', id: 2 });

mappedEmp.set('pam', { fullName: 'Pam Dryer', id: 4 });

console.log(mappedEmp);


// get
console.log('get', mappedEmp.get('jim'));

// size
console.log('size', mappedEmp.size);


// loop for map 
for(let [key, val] of mappedEmp) {

    console.log('iterate', key, val);

}

