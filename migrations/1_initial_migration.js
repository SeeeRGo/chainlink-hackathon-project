const  Ballot = artifacts.require("Ballot");

module.exports = function(deployer) {
    deployer.deploy(Ballot, ['Colonize the Moon', 'Go to Mars', 'Cleanup Earth first']);
};