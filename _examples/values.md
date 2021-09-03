---
title : Values
---


```v
//next line is optional, without it you are on the main module implicitly
module main



fn main() {
	s1 := "v"
	s2 := "lang"
	// Strings, which can be added together with `+`.
	println("v" + "lang")
	// This is valid too.
	println("$s1$s2")
	//or.
	println("${s1}${s2}")


	//with another types.
	println("1+1 = ${1 + 1}")

	// Booleans, with boolean operators as you'd expect.
	println(true && false)
	println(true || false)
	println(!true)
}
```