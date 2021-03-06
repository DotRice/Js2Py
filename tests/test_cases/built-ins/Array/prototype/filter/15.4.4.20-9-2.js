// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-9-2
description: >
    Array.prototype.filter considers new value of elements in array
    after it is called
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, idx, obj)
  {    
    srcArr[2] = -1;
    srcArr[4] = -1;
    if(val > 0)
      return true;
    else
      return false;
  }

  var srcArr = [1,2,3,4,5];
  var resArr = srcArr.filter(callbackfn);
  if(resArr.length === 3 && resArr[0] === 1 && resArr[2] === 4)
      return true;  
  
 }
runTestCase(testcase);
