describe('delegation graph operations', () => {
  describe('addDelegate', () => {
    test.todo('adds correct delegate by id');
    test.todo('throws error if trying to add own id');
    test.todo('throws error if trying to add non-existent id');
    test.todo('throws error if trying to add already included id');
  })
  describe('addFollower', () => {
    test.todo('adds correct follower by id');
    test.todo('throws error if trying to add own id');
    test.todo('throws error if trying to add non-existent id');
    test.todo('throws error if trying to add already included id');
  })
  describe('removeDelegate', () => {
    test.todo('removes correct delegate by id');
    test.todo('throws error if trying to remove non-existent id');
    test.todo('throws error if trying to remove id from empty followers array');
  })
  describe('removeFollower', () => {
    test.todo('removes correct follower by id');
    test.todo('throws error if trying to remove non-existent id');
    test.todo('throws error if trying to remove id from empty followers array');
  })
})