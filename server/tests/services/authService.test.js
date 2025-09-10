import test from "node:test";
import assert from "assert";
import authService from "../../service/authService.js";
import { findId } from "../../service/authService.js";

function deleteUser(url, mail) {
  try {
    const posts = readFile(url);
    const newPosts = posts.filter((post) => post.mail != mail);
    const stringPost = JSON.stringify(newPosts);
    fs.writeFileSync(url, stringPost);
  } catch (error) {
    return error;
  }
}

test("authService - createUser- all good", async (t) => {
  const name = "erez";
  const mail = "erez";
  const password = "erez";
  const id = 1;
  const passwordc = "";
  const insertedUser = await authService.createUser(name, mail, password);
  assert.equal(insertedUser, { id, name, mail, password: passwordc });
  deleteUser(mail);
});

test("authService - createUser- field missing", async (t) => {
  const name = "erez";
  const mail = "erez";
  const insertedUser = await authService.createUser(name, mail);
  assert.throws(insertedUser, Error, "data and salt arguments required");
  deleteUser(mail);
});

test("authService - compareUser- all good", async (t) => {
  const mail = "erez";
  const password = "erez";
  const name = "erez";

  await authService.createUser(name, mail, password);
  const comparedUser = await authService.compareUser(mail, password);
  assert.strictEqual(comparedUser, (comparedUser.name = "erez"));
  deleteUser(mail);
});
