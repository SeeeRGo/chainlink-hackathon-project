import { toggleDelegate, toggleFollower } from "../src/utils/toggleDelegate";
import {
  delegationGraph,
  delegationGraphAfterAddingDelegate,
  delegationGraphAfterAddingFollower,
  delegationGraphAfterRemovingDelegate,
  delegationGraphAfterRemovingFollower,
} from "./fixtures/delegationGraph.fixtures";

describe("delegation graph operations", () => {
  describe("addDelegate", () => {
    test("adds correct delegate by id", () => {
      const actual = toggleDelegate(
        delegationGraph,
        "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
        "0x48FA28c7cb2BE9e03ff65491f405907618B73508"
      );

      const expected = delegationGraphAfterAddingDelegate;
      expect(actual).toEqual(expected);
    });
    test("does nothing if trying to add own id", () => {
      const actual = toggleDelegate(
        delegationGraph,
        "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
        "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051"
      );

      const expected = delegationGraph;
      expect(actual).toEqual(expected);
    });
    test("does nothing if trying to add non-existent id", () => {
      const actual = toggleDelegate(
        delegationGraph,
        "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
        "0x",
      );

      const expected = delegationGraph;
      expect(actual).toEqual(expected);
    });
  });
  describe("addFollower", () => {
    test("adds correct follower by id", () => {
      const actual = toggleFollower(
        delegationGraph,
        "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
        "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051"
      );

      const expected = delegationGraphAfterAddingFollower;
      expect(actual).toEqual(expected);
    });
    test("does nothing if trying to add own id", () => {
      const actual = toggleFollower(
        delegationGraph,
        "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
        "0x48FA28c7cb2BE9e03ff65491f405907618B73508"
      );

      const expected = delegationGraph;
      expect(actual).toEqual(expected);
    });
    test("does nothing if trying to add non-existent id", () => {
      const actual = toggleFollower(
        delegationGraph,
        "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
        "0x"
      );

      const expected = delegationGraph;
      expect(actual).toEqual(expected);
    });
  });
  describe("removeDelegate", () => {
    test("removes correct delegate by id", () => {
      const actual = toggleDelegate(
        delegationGraph,
        "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
        "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
      );

      const expected = delegationGraphAfterRemovingDelegate;
      expect(actual).toEqual(expected);
    });
    test("does nothing if trying to remove non-existent id", () => {
      const actual = toggleDelegate(
        delegationGraph,
        "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
        "0x",
      );

      const expected = delegationGraph;
      expect(actual).toEqual(expected);
    });
    test("does nothing if trying to remove own id", () => {
      const actual = toggleDelegate(
        delegationGraph,
        "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
        "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
      );

      const expected = delegationGraph;
      expect(actual).toEqual(expected);
    });
  });

  describe("removeFollower", () => {
    test("removes correct follower by id", () => {
      const actual = toggleFollower(
        delegationGraph,
        "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
        "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      );

      const expected = delegationGraphAfterRemovingFollower;
      expect(actual).toEqual(expected);
    });
    test("does nothing if trying to remove non-existent id", () => {
      const actual = toggleFollower(
        delegationGraph,
        "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
        "0x",
      );

      const expected = delegationGraph;
      expect(actual).toEqual(expected);
    });
    test("does nothing if trying to remove own id", () => {
      const actual = toggleFollower(
        delegationGraph,
        "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
        "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1"
      );

      const expected = delegationGraph;
      expect(actual).toEqual(expected);
    });
  });
});
