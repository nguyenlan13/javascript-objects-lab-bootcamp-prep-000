var recipes = {recipes: 'object'};

function updateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 };

  return obj.assign ({}, {[key]: value});

  
}