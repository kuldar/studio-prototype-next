export default [
  [
    { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
    { type: "string", label: "firstName", value: `"Bob"` },
    { type: "string", label: "lastName", value: `"Loblaw"` },
    { type: "boolean", label: "isAdmin", value: false },
    { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "slug", value: `"my-blog"` },
      { type: "string", label: "title", value: `"My Blog"` },
    ] },
    { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
      { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"post-12"` },
        { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
      ] },
      { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"post-12"` },
        { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
      ] },
      { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"post-12"` },
        { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
      ] },
    ] },
  ],
  [
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
    { type: "object", value: "User:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", firstName: "Bob", lastName: "Loblaw", ...}`, children: [
      { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
      { type: "string", label: "firstName", value: `"Bob"` },
      { type: "string", label: "lastName", value: `"Loblaw"` },
      { type: "boolean", label: "isAdmin", value: false },
      { type: "object", label: "blog", value: "Blog", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “my-blog", title: "My Blog", ... }`, children: [
        { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
        { type: "string", label: "slug", value: `"my-blog"` },
        { type: "string", label: "title", value: `"My Blog"` },
      ] },
      { type: "array", label: "posts", value: "[Post]", count: 3, preview: `[{ id: "cjyr79un20001jxxwuzgtbgqe", title: "Wat wat wat", content: "Dummy content is hard", ...}, ...]`, children: [
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
        { type: "object", value: "Post:", preview: `{ id: "cjyr79un20001jxxwuzgtbgqe", slug: “post-12”, createdAt: "2019-07-31T12:02:00.918Z", ... }`, children: [
          { type: "id", label: "id", value: `"cjyr79un20001jxxwuzgtbgqe"` },
          { type: "string", label: "slug", value: `"post-12"` },
          { type: "string", label: "content", value: `"Lorem ipsum dolor..."` },
        ] },
      ] },
    ]},
  ]
]