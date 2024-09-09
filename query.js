// 1. Find documents where the borough is not "Brooklyn"
{
  borough: { $not: /^Brooklyn$/ }
}

// 2. Find documents where the cuisine is either "American" or the borough is "Brooklyn"
{
  $or: [
    { cuisine: "American" },
    { borough: "Brooklyn" }
  ]
}
// 3. Find documents where the cuisine is neither "American" nor the borough is "Brooklyn"
{
  $nor: [
    { cuisine: "American" },
    { borough: "Brooklyn" }
  ]
}
// 4. Find all documents where the cuisine is "Jewish/Kosher" and the borough is "Brooklyn"
{
  borough: "Brooklyn",
  cuisine: "Jewish/Kosher"
}
// 5. Find all documents where the cuisine is "American" and the grades array contains exactly 5 elements
{
  cuisine: "American",
  grades: { $size: 5 }
}
// 6. Find all documents where the borough is "Queens" and the cuisine is not "American"
{
  borough: "Queens",
  cuisine: { $not: /^American$/ }
}
// 7. Find all documents where the name contains "Carvel" and the borough is either "Brooklyn" or "Queens"
{
  name: { $regex: "Carvel", $options: "i" },
  borough: { $in: ["Brooklyn", "Queens"] }
}


// 1. Find all listings with a cancellation policy of "strict_14_with_grace_period" and where the maximum nights is less than 100
{
  cancellation_policy: "strict_14_with_grace_period",
  maximum_nights: { $lt: 100 }
}
// 2. Find all listings with no reviews
{
  number_of_reviews: { $exists: false }
}
// 3. Find all listings that can accommodate at least 4 guests and have more than 2 beds
{
  accommodates: { $gte: 4 },
  beds: { $gt: 2 }
}
