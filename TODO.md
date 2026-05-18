# TODO (Shop responsiveness: price range, limit, sort, pagination)

## Step 1
- Fix runtime bug in `src/ui/Pagination.jsx` (remove undefined `active/setActive` usage) and make pagination responsive/compact on small screens.

## Step 2
- Update `src/pages/Shop.jsx`
  - Reset `pageNum` to 1 when `limit` changes.
  - Reset `pageNum` to 1 when `priceRange` changes.
  - Ensure layout breakpoints don’t change for mobile.

## Step 3
- (If required) Implement sorting UI/logic using existing `sortoption`.

## Step 4
- Run dev/test to verify pagination + responsive layout.

