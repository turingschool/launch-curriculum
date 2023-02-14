## Lab Objectives
* Practice refactoring using SRP
* Introduce the relationship between Tests and Refactoring

** Instructor Note **  Before the lab, prepare groups of 2/3 students and post them in slack.  During the practice time, bring students all together to share out their indentified responsibilities, and then again to share out some refactors.

## Practice

In small groups we are going to be refactoring this [Caesar Cipher](https://github.com/turingschool-examples/CaesarCipher_Launch).  A Caeser Cipher is an encryption algorithm that is commonly used in code examples when learning a new language.  

A caesar cipher encrypts messages by shifting each letter of a message forward or backward in the alphabet by a set number of letters (referred to as _the shift_).  For example, if we used a Caesar Cipher to encrypt the message "hello world" with a shift of 4, the encrypted message would be "lipps asvph".  The 'h' shifts 4 letters forward to become 'l', the 'e' shifts 4 letters forward to become 'i', and we continue shifting each letter until we reach the end of the message.

It is not necessary to become an expert on the Caesar Cipher; but, if you want more information, you can do some googling and/or check out this [wikipedia entry](https://en.wikipedia.org/wiki/Caesar_cipher).

For today's exercise, you will:
1. Fork and Clone the [starter repo](https://github.com/turingschool-examples/CaesarCipher_Launch)
2. Spend 20 minutes reviewing and annotating the code to identify key responsibilities
3. Spend 40 minutes refactoring the code to better adhere to SRP

Be Prepared to share out the responsibilities you identified, and the refactors you have made (or are making).  We will come together periodically as a group to share and discuss.

## Preparation

In your noteboook, reflect on the following:
1. During the lesson and this lab, how did you know if your refactor was or was not breaking the function of the program?
2. What if these examples had included tests?  Would that have impacted your ability to refactor the code?  Why or why not?

<!-- One thing I had a hard time determining is how "spicy" this activity is? It seems like we've done this in the BE program - how has it gone in the past? Obviously don't want to reinvent the wheel, but wonder if there are other examples of not-so-readble code that we could pull from old BE student projects and write in C# that might be easier for students to wrap their heads around. However, if y'all think that this is the right level of spiciness for our students then let's SEND IT! MM: I think this is a medium-spice activity; I want to try it, and adjust down if necessary.-->