// Interface Segregation Principle

// Clients should not be forced to depend upon interfaces that they do not use

// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     skipAd() {
//         console.log(`I'm going to skip if I'm premium`);
//     }

//     startParty() {
//         console.log(`I'm going to start a party if I'm premium`);
//     }
// }

// class FreeUser extends User {
//     constructor(username) {
//         super(username);
//     }

//     skipAd() {
//         return null;
//     }

//     startParty() {
//         return null;
//     }
// }

// class PremiumUser extends User {
//     constructor(username) {
//         super(username);
//     }

//     skipAd() {
//         console.log(`Ad was skipped.`);
//     }

//     startParty() {
//         console.log(`Party started, invite your friends!`);
//     }
// }

// The following code will execute
// and print the message
// const premium = new PremiumUser(`premium_username`);
// premium.skipAd();
// premium.startParty();

// The following code will execute
// but return null
// const free = new FreeUser(`free_username`);
// free.skipAd();
// free.startParty();

// Correct method
class User {
    constructor(username) {
      this.username = username;
    }
  }
  
  class FreeUser extends User {
    constructor(username) {
      super(username);
    }
  }
  
  class PremiumUser extends User {
    constructor(username) {
      super(username);
    }
  }
  
  const premiumBenefits = {
    skipAd() {
      console.log('Ad was skipped.');
    },
    startParty() {
      console.log('Party started, invite your friends!');
    },
  };
  
  Object.assign(PremiumUser.prototype, premiumBenefits);
  
  // The following code will execute
  // and print the message
  const premium = new PremiumUser('premium_username');
  premium.skipAd();
  premium.startParty();
  
  // The following code will throw an exception
  // because a FreeUser does not implement these methods
  const free = new FreeUser('free_username');
  free.skipAd();
  free.startParty();