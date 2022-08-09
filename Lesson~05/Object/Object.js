const car=
{
    name: 'Fiat',
    model: 500,
    weight:'850 kg',
    color: 'white',
    start: function ()
    {
        console.log(this.drive('Anup'));
        console.log('THE CAR IS STARTING NOW');
    },

    drive:function (name)
    {
        let x= name +" is driving now";
        return x;
    },
    
    stop:function ()
   {
     document.getElementById('demo').innerHTML="car is stop";
   },

};

car.stop();

car.start();
console.log(car.drive('Atanu'));

console.log(car.name,car.model);
console.log(car['color']);
