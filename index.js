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

function exactMatch(list, attrPair){
  return list.filter(function(driver){
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(list, revenue){

}
