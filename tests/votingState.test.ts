import { calculateVotesToAdd } from "../src/utils/calculateVotesToAdd";
import { delegationGraph } from "./fixtures/delegationGraph.fixtures";
import { firstUserVotesForOptionTwo, secondUserVotesForOptionThree } from "./fixtures/votingState.fixtures";

describe("Vote info calculated from dependency graph", () => {
  test('should calculate votes from dependency graph', () => {
    const actual = calculateVotesToAdd(
      delegationGraph,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      1
    );

    const expected = firstUserVotesForOptionTwo

    expect(actual).toEqual(expected)
  })
  test('should calculate votes from dependency graph if followers array is empty', () => {
    const actual = calculateVotesToAdd(
      delegationGraph,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      3
    );

    const expected = secondUserVotesForOptionThree

    expect(actual).toEqual(expected)

  })
  // test('should calculate correct amount for delegated votes, based on delegates already voted for follower', () => {

  // })
});

describe("Vote events", () => {
  describe("addVote", () => {
    test.todo('should change delegates voted field for id to "CASTED"');
    test.todo(
      "should increase delegates voted field for ALL undecided followers to by 1"
    );
    test.todo("should not affect followers who already voted");
    test.todo("should set amount for option voted to 1 for given voter");
    test.todo(
      "should recalculate amounts for options voted by other delegates for given follower"
    );
    test.todo('should set amounts for options voted by delegates to 0')
  });

  describe("retractVote", () => {
    test.todo(
      'should change delegatesVoted from "CASTED" to number of delegates voted'
    );
    test.todo("should not affect followers who already voted");
    test.todo(
      "should decrease delegatesVoted by 1 for all undecided followers"
    );
    test.todo(
      "should recalculate amounts for options voted by other delegates for given follower"
    );
    test.todo('should throw if attempts with id not in the voting state')
  });

  test.todo(
    "adding vote to empty state and retracitng it should revert to empty state equivalent"
  );
  test.todo(
    "total amount of votes should be a whole number equal to a number non-empty keys in delegatesVoted"
  );
});
