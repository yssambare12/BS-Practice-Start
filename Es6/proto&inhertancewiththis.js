const obj = {
    name:"Yogesh Sambare",
    getname:function(){
      return this.name
    },
    getroll:function(){
      return this.rollno;
    }
  }
  // console.log(obj)
  
  const obj2 = {
    rollno:"183",
    __proto__:obj
  }
  // console.log(obj2.getroll())
  
  const obj3 = {
    class:"masai",
    __proto__:obj2
  } 
  // console.log(obj3)