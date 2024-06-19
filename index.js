const blogCards = [
  {
    image: "assets/images/photo-1.png",
    category: "beauty",
    date: "21 Nov 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-2.png",
    category: "beauty",
    date: "14 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-3.png",
    category: "beauty",
    date: "11 Jan 2024",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-4.png",
    category: "fashion",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-5.png",
    category: "beauty",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-6.png",
    category: "beauty",
    date: "15 Sep 2022",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-7.png",
    category: "lifestyle",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-8.png",
    category: "lifestyle",
    date: "17 Dec 2022",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-9.png",
    category: "fashion",
    date: "21 Jun 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-10.png",
    category: "beauty",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-11.png",
    category: "lifestyle",
    date: "21 Feb 2024",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-12.png",
    category: "beauty",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-13.png",
    category: "lifestyle",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-14.png",
    category: "fashion",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-15.png",
    category: "fashion",
    date: "21 Mar 2024",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-16.png",
    category: "beauty",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-17.png",
    category: "beauty",
    date: "14 Jun 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-18.png",
    category: "lifestyle",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-19.jpg",
    category: "fashion",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-20.png",
    category: "beauty",
    date: "21 Dec 2022",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-21.png",
    category: "lifestyle",
    date: "21 Dec 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: "assets/images/photo-22.png",
    category: "beauty",
    date: "21 May 2023",
    brief: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
]

let toBeRendered = [...blogCards]
let searchResults = []

const template = document.getElementById("card-template")
const blogsContainer = document.getElementById("cards-wrapper")
const searchField = document.querySelectorAll(".search-field")

document.querySelector("nav .search").addEventListener("click", () => {
  searchField[0].style.display == "none" ? searchField[0].style.display = "inline" : searchField[0].style.display = "none"
})

function skeletonLoader() {
  blogsContainer.innerHTML = ""
  for (let i = 0; i < 10; i++) {
    let skeletonCard = template.content.cloneNode(true)
    blogsContainer.append(skeletonCard)
  }
}

function renderBlogCards(arr) {
  blogsContainer.innerHTML = ""
  arr.forEach(card => {
    let div = template.content.cloneNode(true)
    div.getElementById("image").src = card.image
    div.getElementById("category").innerText = card.category
    div.getElementById("category").classList.add(card.category.toLowerCase())
    div.getElementById("date").innerText = card.date
    div.getElementById("brief").innerText = card.brief
    div.querySelectorAll(".skeleton").forEach(item => item.classList.remove("skeleton"))
    blogsContainer.append(div)
  })
}

function displayBlogCards(myArr) {
  skeletonLoader()
  setTimeout(() => renderBlogCards(myArr), 2000)
}

displayBlogCards(toBeRendered)

function filterBlogCards(el) {
  document.querySelectorAll(".category-btn").forEach(item => item.classList.remove("active"))
  if(el.textContent.toLowerCase() == "all posts") {
    toBeRendered = [...blogCards]
    displayBlogCards(toBeRendered)
    document.querySelector(".category-btn").classList.add("active")
  } else {
    toBeRendered = blogCards.filter(card => el.textContent.toLowerCase() == card.category.toLocaleLowerCase())
    displayBlogCards(toBeRendered)
    document.getElementById(el.textContent.toLocaleLowerCase()).classList.add("active")
  }
}

function searcBlog(el) {
  console.log(el.value);
  searchResults = toBeRendered.filter(item => item.category.toLowerCase().includes(el.value.toLowerCase()) || item.brief.toLowerCase().includes(el.value.toLowerCase()))
  searchResults.length == 0 ? blogsContainer.innerHTML = "404" : displayBlogCards(searchResults)
  if(el.value.length == 0) {
    displayBlogCards(toBeRendered)
  }
}

searchField.forEach(item => item.addEventListener("input", () => searcBlog(item)))
document.querySelectorAll(".category-btn").forEach(item => item.addEventListener("click", () => filterBlogCards(item)))
