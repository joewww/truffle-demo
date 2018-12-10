var HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', function (accounts) {

  /* check initial value set for str var */
  it("check initial value for str", function () {
    return HelloWorld.deployed().then(function (instance) {
      return instance.str.call();
    }).then(function (str) {
        assert.equal(str, "Hello, World!");
      });
  })
});
