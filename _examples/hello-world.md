---
title : Hello world
description: Hello world program in vlang
---

# Hello world example


`hello.v`:
```v

// create main function
fn main(){
	name := "World"
	println("Hello, $name")
	//or
	println("Hello, " + name)
}
```
then run it with `v run hello.v`
