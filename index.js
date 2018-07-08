function driversWithRevenueOver(list, rev){
  return list.filter(function(driver){
    return driver.revenue > rev;
  })
}

function driverNamesWithRevenueOver(list, rev){
  return driversWithRevenueOver(list, rev).map(function(driver){
    return driver.name;
  })
}

function exactMatch(list, attrPair{key : value}){
  return list.filter(function(driver){
    return driver.attrPair[key] > attrPair[key];
}

function exactMatchToList(list, revenue){

}
