// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.14-1
description: >
    catch doesn't change declaration scope - var initializer in catch
    with same name as catch parameter changes parameter
features: [AnnexB]
includes: [runTestCase.js]
---*/

function testcase() {
  foo = "prior to throw";
  try {
    throw new Error();
  }
  catch (foo) {
    var foo = "initializer in catch";
  }
 return foo === "prior to throw";
  
 }
runTestCase(testcase);
