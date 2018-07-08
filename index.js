function driversWithRevenueOver(list, rev){
  return list.filter(function(driver){
    return driver.revenue > rev;
  })
}

function driverNamesWithRevenueOver(list, revenue){
  return driversWithRevenueOver(list, rev).map(function(driver){
    return driver.name;
  })
}

function exactMatch(list, revenue){

}

function exactMatchToList(list, revenue){

}
