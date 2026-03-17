# Copilot Instructions for Emoji Battle Arena

## Project Overview
This is a TypeScript/Express game API where emoji fighters battle each other.

## Coding Standards
- Use TypeScript strict mode
- All functions must have JSDoc comments with @param and @returns
- Use `const` by default, `let` only when reassignment is needed
- Error handling: always return structured { success: boolean, data?, error? } responses
- Tests: use vitest, one describe block per function, test edge cases
- Naming: camelCase for variables/functions, PascalCase for interfaces/classes
- Express routes: always validate input before processing
- No `any` types — use proper interfaces

## Architecture
- Models define interfaces (no classes)
- Services contain business logic (pure functions where possible)
- Routes handle HTTP only (validation → service call → response)
- Middleware for cross-cutting concerns (rate limiting, auth, etc.)
