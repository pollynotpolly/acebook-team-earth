require("../mongodb_helper");

const Comment = require("../../models/Comment");

describe("Comment model", () => {
  beforeEach(async () => {
    await Comment.deleteMany({});
  });

  it("has a content", () => {
    const comment = new Comment({ content: "some content", user: "1" });
    expect(comment.content).toEqual("some content");
    expect (comment.user).toEqual(new ObjectId('66a8fd57ee0d00c4cf8b2656'));
    expect (comment.date).toEqual(Date.now);
  });

  it("can list all comments", async () => {
    const comments = await Comment.find();
    expect(comments).toEqual([]);
  });

it("can save a comment", async () => {
    const comment = new Comment({ content: "some content" });

    await comment.save();
    const comments = await Comment.find();
    expect(comments[0].content).toEqual("some content");
});
});