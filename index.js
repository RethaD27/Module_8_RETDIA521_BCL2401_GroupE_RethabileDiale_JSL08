// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"
let bankBranchInstance = null;

// 2. Define a class called `BankBranch` for managing branch information.
class BankBranch {

// 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
constructor(branchInfo) {

//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
if (!bankBranchInstance) {
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
    this.branchInfo = branchInfo;

//    - Assign the new instance to bankBranchInstance.
    bankBranchInstance = this;
}

//    - Return the `bankBranchInstance` whether it's newly created or existing.
return bankBranchInstance;
}

// 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.
getBranchInfo() {
    return this.branchInfo;
  }
}

// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
let branchA = new BankBranch({ name: 'Branch A', address: '123 Main St' });
let branchB = new BankBranch({ name: 'Branch B', address: '456 Maple St' });

//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
console.log(branchA.getBranchInfo());
console.log(branchB.getBranchInfo());

//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.
console.log(branchA === branchB);
