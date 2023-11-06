---
layout: page
title:  Refactoring Lab
---

## Lab Objectives
* Practice refactoring using SRP
* Introduce the relationship between Tests and Refactoring

<aside class="instructor-notes">
  <p><strong>Instructor Note</strong><br>Before the lab, prepare groups of 2/3 students and post them in slack.  During the practice time, bring students all together to share out their indentified responsibilities, and then again to share out some refactors.</p>
</aside>

## Practice

In small groups we are going to be refactoring this [Caesar Cipher](https://github.com/turingschool-examples/CaesarCipher_Launch).  A Caeser Cipher is an encryption algorithm that is commonly used in code examples when learning a new language.  

A caesar cipher encrypts messages by shifting each letter of a message forward or backward in the alphabet by a set number of letters (referred to as _the shift_).  For example, if we used a Caesar Cipher to encrypt the message "hello world" with a shift of 4, the encrypted message would be "lipps asvph".  The 'h' shifts 4 letters forward to become 'l', the 'e' shifts 4 letters forward to become 'i', and we continue shifting each letter until we reach the end of the message.

It is not necessary to become an expert on the Caesar Cipher; but, if you want more information, you can do some googling and/or check out this [wikipedia entry](https://en.wikipedia.org/wiki/Caesar_cipher).

For today's exercise, you will:
1. Fork and Clone the [starter repo](https://github.com/turingschool-examples/CaesarCipher_Launch)
2. Spend 20 minutes reviewing and annotating the code to identify key responsibilities
3. Refactor the code to better adhere to SRP

Be Prepared to share out the responsibilities you identified, and the refactors you have made (or are making).  We will come together periodically as a group to share and discuss.
