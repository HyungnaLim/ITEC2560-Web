function isMinnesotaZip(code) {
    // MN zipcode range : 55001 ~ 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip(55418))
console.log(isMinnesotaZip(69834))

// JavaScript does "type coercion"
// it tries to convert types to make sense to the operation
console.log(isMinnesotaZip('55418')) // so it accept string value as well