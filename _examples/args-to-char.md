---
title : os.args to Clang's (char *)

---


[source](https://t.me/vlang_en/20684)


> in order to make this example working, you need to run `v init` in the project directory
```v

import os

#flag -I @VMODROOT
#include "stdio.h"

fn C.printf(str &char)voidptr

fn main() {
	C.printf(os.args[0].str)
    //prints the executable path
}

```