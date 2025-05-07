# Lab 5 - Starter
**Names: Mehdi Aziz & Manan Ahmad**
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No I would not use a unit test to test the "message" feature of a messaging application because a unit test can not run interactions like UI elements. database writes and network calls in isolation. For this you would need to cover it with integration(end to end) testing instead.
2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes I would use a unit test to test the "max message length" feature of a messaging application because for this scenario a unit test can assert the correct result instantaneously since the logic here to prevent the user from typing more characters than 80 is a pure function.

# Check testing branch for screenshots of myError and merged
