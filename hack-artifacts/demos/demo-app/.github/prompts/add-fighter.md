# Add a New Emoji Fighter

Add a new emoji fighter to the Emoji Battle Arena.

## Requirements
- Add the fighter to the DEFAULT_FIGHTERS array in src/models/fighter.ts
- Stats must be balanced (hp: 50-200, attack: 1-20, defense: 1-20)
- Include a unique special ability description
- The emoji should not duplicate an existing fighter's emoji

## Steps
1. Choose an emoji and name
2. Design balanced stats (total stat budget ~250 points)
3. Write a creative special ability description
4. Add to DEFAULT_FIGHTERS array
5. Add a test case in tests/fighters.test.ts verifying the new fighter loads
