const { expect } = require("chai");

describe("SimpleStorage", function () {
  let contract;
  beforeEach(async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    contract = await SimpleStorage.deploy();
    await contract.waitForDeployment();
  });

  it("Should initialize value to 0", async function () {
    expect(await contract.getValue()).to.equal(0);
  });

  it("Should increment value", async function () {
    await contract.increment();
    expect(await contract.getValue()).to.equal(1);
  });

  it("Should decrement value", async function () {
    await contract.decrement();
    expect(await contract.getValue()).to.equal(-1);
  });
});
