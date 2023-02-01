
// Consider...
{
    let email = "kaiser@cs.wisc.edu";
    let domain = getDomainFromEmail(email);
    let tld = tldFromDomain(domain);
    let isGood = isGoodTld(tld);
}
// Issue?


// 
    let email = "kaiser@cs.wisc.edu";
try {
    let domain = getDomainFromEmail(email);
} catch {
    // TODO
}
try {
    let tld = tldFromDomain(domain);
} catch {
    // TODO
}
let isGood = isGoodTld(tld);



// Promises?
{
    let isGood = new Promise((resolve, reject) => {
        resolve("kaiser@cs.wisc.edu")
        })
        .then(getDomainFromEmail)
        .then(tldFromDomain)
        .then(isGoodTld);

    isGood.catch(
        // TODO
    )
}


// What if we could chain things with more meaning?


{
    Optional.from("kaiser@cs.wisc.edu")
        .then(getDomainFromEmail)
        .then(tldFromDomain)
        .map(isGoodTld);
}


// A little better...

{
    Result.from<String.ErrorType>("kaiser@cs.wisc.edu")
        .then(getDomainFromEmail)
        .then(tldFromDomain)
        .map(isGoodTld);
}


// A pattern emerges...
// .then -> chain operations together and returns an effect
// .map -> chain pure operations together
// from -> constructor to get into the space
// What is this?
// A monad!


// What is the point? Kaiser, what are you getting at here?
// Consider "normal" code

statement_a();
statement_b();
statement_c();

statement_a()
  .then(statement_b)
  .then(statement_c)






















// Monads chain statements together. [Statements == expressions with effects]
// That means... (the big reveal):

// ~Monads overload the semicolon operator~!

// Issues?
// -- Specifics
// -- Complicated types

// A dream:
// Inside this complex operation or map, we will
// read from disk, and might raise this error
// print to screen and might raise this error
// save to network and might raise this error...

// Sources
// https://www.youtube.com/watch?v=nGhoZzihbHY
// https://www.youtube.com/watch?v=C2w45qRc3aU