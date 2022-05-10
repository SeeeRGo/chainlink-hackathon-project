import { addVote } from "../src/utils/addVote";
import { addVotes } from "../src/utils/addVotes";
import { calculateVotesToAdd } from "../src/utils/calculateVotesToAdd";
import { delegationGraph } from "./fixtures/delegationGraph.fixtures";
import {
  emptyVoteEventForOptionThree,
  firstUserVotesForOptionTwo,
  fourthUserVotesForOptionThree,
  secondUserVotesForOptionThree,
  stateAfterStepFour,
  stateAfterStepOne,
  stateAfterStepThree,
  stateAfterStepTwo,
  stateAfterStepTwoPhase1,
  stateAfterStepTwoPhase2,
  thirdUserOwnVote,
  thirdUserVoteDelegatedBySecondUser,
  thirdUserVotesForOptionOne,
} from "./fixtures/votingState.fixtures";

describe("Vote info calculated from dependency graph", () => {
  test("should calculate votes from dependency graph", () => {
    const actual = calculateVotesToAdd(
      delegationGraph,
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
      2
    );

    const expected = firstUserVotesForOptionTwo;

    expect(actual).toEqual(expected);
  });
  test("should calculate votes from dependency graph if followers array is empty", () => {
    const actual = calculateVotesToAdd(
      delegationGraph,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      3
    );

    const expected = secondUserVotesForOptionThree;

    expect(actual).toEqual(expected);
  });
  test("should return empty votes array for non-existing id", () => {
    const actual = calculateVotesToAdd(delegationGraph, "0x", 3);

    const expected = emptyVoteEventForOptionThree;

    expect(actual).toEqual(expected);
  });
});

describe("Vote events", () => {
  describe("addVote", () => {
    test('when adds "OWN" vote change delegatesVoted value for id to "CASTED"', () => {
      const actual = addVote(stateAfterStepOne, thirdUserOwnVote, 1);

      const expected = stateAfterStepTwoPhase1;

      expect(actual).toEqual(expected);
    });
    test('when adds "DELEGATED" vote do nothing if delegatesVoted already "CASTED"', () => {
      const actual = addVote(
        stateAfterStepTwoPhase1,
        thirdUserVoteDelegatedBySecondUser,
        1
      );

      const expected = stateAfterStepTwoPhase2;

      expect(actual).toEqual(expected);
    });
    test('when adds "DELEGATED" vote increment delegatesVoted by 1 ', () => {
      const actual = addVote(
        stateAfterStepTwoPhase1,
        thirdUserVoteDelegatedBySecondUser,
        1
      );

      const expected = stateAfterStepTwoPhase2;

      expect(actual).toEqual(expected);
    });
    describe("AddVotes", () => {
      test("should increase delegates voted field for ALL undecided followers to by 1", () => {
        const actual = addVotes(stateAfterStepOne, thirdUserVotesForOptionOne);

        const expected = stateAfterStepTwo;

        expect(actual).toEqual(expected);
      });
      test("should not affect followers who already voted", () => {
        const actual = addVotes(
          stateAfterStepThree,
          fourthUserVotesForOptionThree
        );

        const expected = stateAfterStepFour;

        expect(actual).toEqual(expected);
      });
      test("should set amount for option voted to 1 for given voter", () => {
        const actual = addVotes(stateAfterStepOne, thirdUserVotesForOptionOne);

        const expected = stateAfterStepTwo;

        expect(actual).toEqual(expected);
      });
      test(
        "should recalculate amounts for options voted by other delegates for given follower", () => {
        const actual = addVotes(
          stateAfterStepThree,
          fourthUserVotesForOptionThree
        );

        const expected = stateAfterStepFour;

        expect(actual).toEqual(expected);
        }
      );
      test("should set amounts for options voted by delegates to 0", () => {
        const actual = addVotes(
          stateAfterStepOne,
          thirdUserVotesForOptionOne
        );

        const expected = stateAfterStepTwo;

        expect(actual).toEqual(expected);
      });
    });
  });

  // Retracting votes would be handled on the smart contract side
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
    test.todo("should throw if attempts with id not in the voting state");
  });

  test.todo(
    "adding vote to empty state and retracitng it should revert to empty state equivalent"
  );
  test.todo(
    "total amount of votes should be a whole number equal to a number non-empty keys in delegatesVoted"
  );
});
