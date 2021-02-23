const db = require('./models')

async function dbTest() {
  const article = await db.article.findOne()
  const comment = await db.comment.create({
    name: 'Paul Allen',
    content: 'This is really neat! Thanks for posting.',
    articleId: article.id
  })
  console.log(comment)
}

// dbTest()

async function test() {
  const article = await db.article.findOne({
    where: { id: 1 },
    include: [db.comment]
  })
  // by using eager loading, the article model should have a comments key
  console.log(article.comments)
}
// test()

async function createTag() {
    try {
      const newTag = await db.tag.create({
      name: 'Pizza'
  })
  const article = await db.article.findOne()
  await article.addTag(newTag)
    } catch (err) {
      console.log(err)
    }
}
// createTag()

async function findTags() {
  try {
const article = await db.article.findByPk(1, {
  include: [db.tag]
})
console.log(article)
  } catch (err) {
    console.log(err)
  }
}
findTags()