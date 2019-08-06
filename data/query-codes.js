export default [
`// Get all users with Pro Memembership
photon.users
  .findMany({ filter: { where: { plan: 'PRO' } })
  .include({ blog: true, posts: true ) })`,
`// Find a single user
photon.users.findOne({ where: { id: "cjyr79un20001jxxwuzgtbgqe" }).include({ blog: true, posts: true })`,
`// Get all featured posts
photon.posts.findMany({ filter: { where: { featured: true } }).include({ author: true ) })`,
]