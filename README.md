# MongoDB $inc Operator Type Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical field by a specified value.  However, attempting to increment a field with a non-numerical value results in an error.

## Bug
The bug is caused by passing a string value ("1") to the $inc operator instead of a number (1).  This leads to a MongoDB error.

## Solution
The solution involves correcting the value provided to the `$inc` operator to ensure that it's a numerical value.