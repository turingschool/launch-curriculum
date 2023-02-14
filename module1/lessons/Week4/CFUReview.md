# Week 4 Checks for Understanding

With your group, answer each question below.  Spend some time discussing each question _without_ using any resources; use your own recall of the topics covered this week.  If, after you have discussed without resources, your group needs assistance, use the raise hand feature and an instructor will come help!

1. What is OOP, and what are some benefits of this programming approach?
2. Imagine you are a developer at a new social media app, our app has two types of users: posting users, and following users.  Posting users create and post content; following users subscribe to (follow) posting users.  Come up with 2 classes that model these two user types.  Make sure there is a way to indicate how many followers a posting user has.
3. Take a look at the class below.  What tests would need to be written to verify that this class is working properly?  You don't need to write the tests, just come up with the names those tests might have :)

```c#
public class MediaPlayer
{
	private File _content;

    public MediaPlayer(File content)
    {
        _content = content;
    }

    public void Play()
    {
        // Code that plays the content.
    }

    public void Pause()
    {
        // Code that pauses the content.
    }

    public string Properties()
    {
        // Code that returns info about the file being played.
    }
}
```

4. In the code above, can you identify any abstractions? A reminder: abstractions are things that are hidden away from the person using this class.



