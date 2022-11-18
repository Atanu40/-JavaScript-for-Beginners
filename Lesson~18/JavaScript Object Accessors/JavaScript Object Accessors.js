//JavaScript Getter (The get Keyword)//

const Person = 
{
  firstName : "Atanu",
  lastName : "Saha",
  language : "bn",
  get lang()
  {
    return this.language;
  }
};

document.getElementById("demo").innerHTML = Person.lang;

//JavaScript Setter (The set Keyword)//

const Person1 =
{
    firstName : "Atanu",
    lastName : "Saha",
    language : " " ,
    
    set lang(lang){
      this.language= lang;
    }
};
Person1.lang = "eng";

document.getElementById("demo1").innerHTML = Person1.language;