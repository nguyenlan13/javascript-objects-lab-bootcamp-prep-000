var recipes = {recipes: 'object'};

function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign ({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object ['key'];
  return object;
}