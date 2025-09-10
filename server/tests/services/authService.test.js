import authService from "../../service/authService.js";
import authUtils from "../../utils/authUtils.js";

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

test("authService - createUser- all good", async () => {
  const name = "erez";
  const mail = "erez";
  const password = "erez";
  const id = authUtils.findId() + 1;
  const insertedUser = await authService.createUser(name, mail, password);
  expect(insertedUser).toBe({ id, name, mail, password });
});

test("authService - createUser- field missing", async () => {
  const name = "erez";
  const mail = "erez";
  const insertedUser = await authService.createUser(name, mail);
  expect(insertedUser).toBe(false);
  deleteUser(mail);
});

test("authService - compareUser- all good", async () => {
  const mail = "erez";
  const password = "erez";
  const name = "erez";
  const id = authUtils.findId() + 1;

  await authService.createUser(name, mail, password);
  const comparedUser = await authService.compareUser(mail, password);
  expect(comparedUser).toBe({ id, name, mail, password });
  deleteUser(mail);
});
