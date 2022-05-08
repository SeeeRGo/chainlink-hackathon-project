// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Ballot {
  struct Vote {
        address voter;
        uint vote;   // index of the voted proposal
    }

    // This is a type for a single proposal.
    struct Proposal {
        string name;   // short name (up to 32 bytes)
    }

    // A dynamically-sized array of `Proposal` structs.
    Proposal[] public proposals;

    mapping(address => uint) public votes;
    //This will be used to iterate over votes to determine a winner
    address[] public alreadyVoted;

    // will be used to calculate current RAW state of voting
    mapping(uint => address[]) votersPerOption;

    address[] remainingVotersTemp;
    /// Create a new ballot to choose one of `proposalNames`.
    constructor(string[] memory proposalNames) {
      // For each of the provided proposal names,
      // create a new proposal object and add it
      // to the end of the array.
      proposals.push(Proposal({
            name: 'EMPTY PROPOSAL'
      }));
      for (uint i = 0; i < proposalNames.length; i++) {
          proposals.push(Proposal({
            name: proposalNames[i]
          }));
      }
    }

    function checkExistingVoter(address voter) public view returns (bool existingVoter) {
      // if mapping is truly initialized with all 0
      // existingVoter = votes[voter] == 0;

      // Checking if person already voted in a more surefire way
      for (uint i = 0; i < alreadyVoted.length; i++) {
        address earlierVoter = alreadyVoted[i];
        if (voter == earlierVoter) {
          existingVoter = true;
          break;
        }
      }
      
    }

    /// Give your vote (including votes delegated to you)
    /// to proposal `proposals[proposal].name`.
    function vote(uint proposal) external payable {
      // If `proposal` is out of the range of the array,
      // this will throw automatically and revert all
      // changes.
      require(proposal !=0 && proposal <= proposals.length - 1);

      bool existingVoter = checkExistingVoter(msg.sender);
      uint previousVote = votes[msg.sender];
      // if person already voted 
      if (!existingVoter) {
        alreadyVoted.push(msg.sender);
      }

      // mapping initialised with 0 AFAIK
      votes[msg.sender] = proposal;

      // add address to the list of voters for option voting state
      votersPerOption[proposal].push(msg.sender);

      // remove address from previously voted list if voter alrady voted before
      if (existingVoter) {
        remainingVotersTemp = new address[](0);
        for (uint256 i = 0; i < votersPerOption[previousVote].length; i++) {
          address currentVoter = votersPerOption[previousVote][i];
          if (currentVoter != msg.sender) {
            remainingVotersTemp.push(currentVoter);
          }
        }
        votersPerOption[previousVote] = remainingVotersTemp;
        remainingVotersTemp = new address[](0);
      }
    }

    /// @dev Computes the winning proposal taking all
    /// previous votes into account.
    function proposalSupporters(uint proposal) public view
            returns (Proposal memory, address[] memory)
    {
      return (proposals[proposal], votersPerOption[proposal]);
    }

    // Calls winningProposal() function to get the index
    // of the winner contained in the proposals array and then
    // returns the name of the winner
    // function winnerName() external view
    //         returns (bytes32 winnerName_)
    // {
    //     winnerName_ = proposals[winningProposal()].name;
    // }
}