function checkVotingEligible(age){
    if(arguments.length!==1 ||typeof(age)!=='number' || !isFinite(age) || isNaN(age) || age<0  || !Number.isInteger(age)) return 'Invalid'
    if(age>=18) return 'Eligible'
    return 'Not Eligible'
}
console.log(checkVotingEligible(18))